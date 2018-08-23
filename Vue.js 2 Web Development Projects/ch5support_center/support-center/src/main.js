import Vue from 'vue'
import 'babel-polyfill'
import AppLayout from './components/AppLayout.vue'
import router from './router'
import './global-components'

new Vue({
  el: '#app',
  render: h => h(AppLayout),
  router
})
