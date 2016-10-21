import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '../views/Index.vue'
import Markdown from '../views/Markdown.vue'
import Right from '../views/Right.vue'
import View from '../views/View.vue'

export default new Router({
    mode: 'hash',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        { 
            path: '/', 
            name: 'index', 
            component: Index,
            children: [
                {
                  path: '/index',
                  name: 'view',
                  component: View
                },
                {
                  path: '/api/:id',
                  name: 'api',
                  component: Right
                }
            ]
        },
        { path: '/markdown/:id', name: 'editor', component: Markdown },
        { path: '*', redirect: '/index' },
        { path: '/', redirect: '/index' }
    ]
})
