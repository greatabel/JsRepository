import Vue from 'vue'
import App from './App'

Vue.filter('lowercase', (key) => {
    return key.toLowerCase()
})

Vue.filter('uppercase', (key) => {
    return key.toUpperCase()
})

Vue.filter('leftpad', (value) => {
    if (value >= 10) {
        return value
    }
    return '0' + value
})

/* eslint-disable no-new */
new Vue({
  el: 'app',
  components: { App }
})
