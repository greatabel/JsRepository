import Vue from 'vue'
import 'babel-polyfill'
import Test from './Test.vue'
import TestA from './TestA.vue'
import TestB from './TestB.vue'


new Vue({
  el: '#app',
  ...Test,
  ...TestA,
  ...TestB,
  // render: h => h('div', 'hello world'),
    // render (h) {
    // return h('ul', { 'class': 'movies' }, [
    //                 h('li', { 'class': 'movie' }, 'Star Wars'),
    //                 h('li', { 'class': 'movie' }, 'Blade Runner'),
    //               ])
    // }

})
