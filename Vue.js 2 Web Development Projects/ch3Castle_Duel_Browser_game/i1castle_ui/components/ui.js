Vue.component('top-bar', {
    template: '<div class="top-bar">\
                顶栏\
               </div>',
    props: ['players', 'currentPlayerIndex', 'turn'],
    created() {
        console.log(this.players)
    }

})