import Vue from 'vue'
import 'babel-polyfill'
import Test from './Test.vue'


new Vue({
  el: '#app',
  ...Test,
  // render: h => h('div', 'hello world'),
    // render (h) {
    // return h('ul', { 'class': 'movies' }, [
    //                 h('li', { 'class': 'movie' }, 'Star Wars'),
    //                 h('li', { 'class': 'movie' }, 'Blade Runner'),
    //               ])
    // }

})
