import Vue from 'vue'
import VueRouter from 'vue-router'
import state from './state'

import Home from './components/Home.vue'
import FAQ from './components/FAQ.vue'
import Login from './components/Login.vue'
import TicketsLayout from './components/TicketsLayout.vue'


Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/faq', name: 'faq', component: FAQ},
    {path: '/login', name: 'login', component: Login},
    { path: '/tickets', name: 'tickets',
     component: TicketsLayout, meta: {private: true} },
    { path: '/login', name: 'login', component: Login, meta: { guest: true } },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach( (to, from, next) => {
    console.log('to', to.name)
    if(to.meta.private && !state.user) {
        // to login 
        next({
            name: 'login'

        })
        return
    }
    if( to.meta.guest && state.user) {
        next({name: 'home'})
    }
    next()
    
})

export default router