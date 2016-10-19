import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '../views/Index.vue'
import Markdown from '../views/Markdown.vue'

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '/api/:id', name: 'api', component: Index },
        { path: '/markdown/:id', name: 'editor', component: Markdown },
        { path: '*', redirect: '/api/1' }
    ]
})
