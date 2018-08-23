import Vue from 'vue'
import 'babel-polyfill'
import Test from './Test.vue'
import TestA from './TestA.vue'


new Vue({
  el: '#app',
  ...Test,
  ...TestA,
  // render: h => h('div', 'hello world'),
    // render (h) {
    // return h('ul', { 'class': 'movies' }, [
    //                 h('li', { 'class': 'movie' }, 'Star Wars'),
    //                 h('li', { 'class': 'movie' }, 'Blade Runner'),
    //               ])
    // }

})
