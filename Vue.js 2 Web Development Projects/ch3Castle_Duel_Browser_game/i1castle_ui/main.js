new Vue({
    name: 'game',
    el: '#app',

    data: state,
    template: `<div id="#pp">
                <top-bar :turn="turn" :current-player-index="currentPlayerIndex"
                         :players="players"/>
                <card :def="testCard" />
               </div>`,

    computed: {
        testCard () {
            return cards.archers
        },
    }

})


window.addEventListener('resize', () => {
    state.worldRatio = getWorldRatio()
})
