import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vue_Resource from 'vue-resource'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.use(Vue_Resource)

const app = new Vue({
    router,
    ...App
})

export { app, router }