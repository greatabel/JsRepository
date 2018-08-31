import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from './components/NotFound.vue'

Vue.use(VueRouter)


const routes = [
           // ...
           { path: '*', component: NotFound },
]

const router = new VueRouter({
    routes,
    })
export default router