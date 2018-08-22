import Vue from 'vue'


new Vue({
  el: '#app',
  // render: h => h('div', 'hello world'),
    render (h) {
    return h('ul', { 'class': 'movies' }, [
                    h('li', { 'class': 'movie' }, 'Star Wars'),
                    h('li', { 'class': 'movie' }, 'Blade Runner'),
                  ])
    }

})
