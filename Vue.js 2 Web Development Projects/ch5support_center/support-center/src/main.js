import Vue from 'vue'
import 'babel-polyfill'
import AppLayout from './components/AppLayout.vue'
import router from './router'
import './global-components'
import VueFetch from './plugins/fetch'

Vue.use(VueFetch, {
    baseUrl: 'http://localhost:3000/',
})

new Vue({
  el: '#app',
  render: h => h(AppLayout),
  router
})
