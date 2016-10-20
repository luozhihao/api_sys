import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '../views/Index.vue'
import Markdown from '../views/Markdown.vue'
import Right from '../views/Right.vue'

export default new Router({
    mode: 'hash',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        { 
            path: '/api', 
            name: 'index', 
            component: Index,
            children: [
                {
                  path: ':id',
                  name: 'api',
                  component: Right
                }
            ]
        },
        { path: '/markdown/:id', name: 'editor', component: Markdown },
        { path: '*', redirect: '/api' }
    ]
})
