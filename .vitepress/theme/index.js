// import DefaultTheme from 'vitepress/theme'

import NewLayout from './components/NewLayout.vue'
import NotFound from './components/NotFound.vue'
import Archives from './components/Archives.vue'
import Tags from './components/Tags.vue'
import Page from './components/Page.vue'
import Comment from './components/Comment.vue'

// import './custom.css'

import "tailwindcss/tailwind.css"

import "./style.scss"

export default {
    // ...DefaultTheme,
    Layout: NewLayout,
    NotFound,
    enhanceApp({ app }) {
        // register global compoment
        app.component('Tags', Tags)
        app.component('Archives', Archives)
        app.component('Page', Page)
        app.component('Comment', Comment)
    }
}
