import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import GeoBlog from './components/GeoBlog.vue'
import NotFound from './components/NotFound.vue'


Vue.use(VueRouter)
const routes = [
{ path: '/', name: 'home', component: GeoBlog,
       meta: { private: true } },
     { path: '/login', name: 'login', component: Login },
     { path: '*', component: NotFound },
]

const router = new VueRouter({ routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
     return savedPosition
    }
    if (to.hash) {
     return { selector: to.hash }
    }
    return { x: 0, y: 0 }
    },
})

export default router