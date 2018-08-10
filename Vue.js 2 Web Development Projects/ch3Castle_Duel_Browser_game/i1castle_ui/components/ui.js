Vue.component('top-bar', {
    template: `<div class="top-bar">
                <div class="player p0"> {{ players[0].name }} </div>
                <div class="player p1"> {{ players[1].name }} </div>
               </div>`,
    props: ['players', 'currentPlayerIndex', 'turn'],
    created() {
        console.log(this.players)
    }

})