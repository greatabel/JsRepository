import Vue from 'vue'
import 'babel-polyfill'
import AppLayout from './components/AppLayout.vue'
import router from './router'
import state from './state'

import VueFetch, { $fetch } from './plugins/fetch'

import './global-components'

import VueState from './plugins/state'


Vue.use(VueFetch, {
    baseUrl: 'http://localhost:3000/',
})

Vue.use(VueState, state)



async function main () {
    try {
        state.user = await $fetch('user')
    } catch (e) {
        console.warn(e)
    }

    new Vue({
      el: '#app',
      data: state,
      render: h => h(AppLayout),
      router
    })
}

main()