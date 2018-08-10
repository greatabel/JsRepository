Vue.component('top-bar', {
    template: `<div class="top-bar">
                <div class="player p0"> {{ players[0].name }} </div>

                <div class="turn-counter">
                  <img class="arrow" src="svg/turn.svg" />
                  <div class="turn"> {{ turn }} 轮</div>
                </div>

                <div class="player p1"> {{ players[1].name }} </div>
               </div>`,

    props: ['players', 'currentPlayerIndex', 'turn'],
    created() {
        console.log(this.players)
    }

})