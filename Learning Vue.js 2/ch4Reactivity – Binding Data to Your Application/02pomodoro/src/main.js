import Vue from 'vue'
import App from './App'

Vue.filter('lowercase', (key) => {
    return key.toLowerCase()
})

Vue.filter('uppercase', (key) => {
    return key.toUpperCase()
})

/* eslint-disable no-new */
new Vue({
  el: 'app',
  components: { App }
})
