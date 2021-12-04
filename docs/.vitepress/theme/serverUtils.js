const globby = require('globby')
const matter = require('gray-matter')
const fs = require('fs-extra')
const path = require('path')

module.exports = { getPosts, generatePaginationPages }

async function getPosts(docPath) {
    let paths = await getPostMDFilePaths(docPath)
    let posts = await Promise.all(
        paths.map(async (item) => {
            const content = await fs.readFile(item, 'utf-8')
            const { data } = matter(content)
            data.date = _convertDate(data.date)
            console.log('Found Article:', path.relative(docPath, item))
            return {
                frontMatter: data,
                regularPath: `/${path.relative(docPath, item).replace('.md', '.html')}`
            }
        })
    )
    posts.sort(_compareDate)
    return posts
}

async function generatePaginationPages(docPath) {
    // getPostMDFilePath return type is object not array
    let allPagesLength = [...(await getPostMDFilePaths(docPath))].length

    const paths = path.resolve('./', docPath)
    const page = `
---
page: true
date: 2021-06-30
title: Home
sidebar: false
---
<script setup>
import Page from "./.vitepress/theme/components/Page.vue";
import { useData } from "vitepress";
const { theme } = useData();
const pageSize = theme.value.pageSize;
const posts = theme.value.posts
</script>
<Page :posts="posts"/>
`.trim()
    const file = path.resolve(paths, `./index.md`)
    console.log(file)
    await fs.writeFile(file, page)
}

function _convertDate(date = new Date().toString()) {
    const json_date = new Date(date).toJSON()
    return json_date.split('T')[0]
}

function _compareDate(obj1, obj2) {
    return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1
}

async function getPostMDFilePaths(docPath) {
    let paths = await globby([`./${docPath}/*/**.md`])
    return paths.filter((item) => item.includes('posts/'))
}
