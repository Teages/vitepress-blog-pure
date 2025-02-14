const { getPosts, generatePaginationPages } = require('./theme/serverUtils')

async function config() {
    const docPath = 'docs'
    await generatePaginationPages(docPath)
    return {
        title: 'vitepress-blog',
        base:'/',
        description: 'vitepress,blog,blog-theme',
        themeConfig: {
            posts: await getPosts(docPath),
            pageSize: 25565,
            website: 'https://github.com/airene/vitepress-blog-pure', //copyright link
            comment: {
                repo: 'airene/vitepress-blog-pure',
                themes: 'github-light',
                issueTerm: 'pathname'
            },
            nav: [
                { text: 'Home', link: '/' },
                { text: 'Archives', link: '/pages/archives' },
                { text: 'Tags', link: '/pages/tags' },
                { text: 'About', link: '/pages/about' }
                // { text: 'Airene', link: 'http://airene.net' }  -- External link test
            ]
        },
        markdown: {
          lineNumbers: true
        },
        srcExclude: ['README.md'] // exclude the README.md , needn't to compiler
        /*
        vite: {
            build: { minify: false }
        },
        optimizeDeps: {
            keepNames: true
        }
        */
    }
}

module.exports = config()
