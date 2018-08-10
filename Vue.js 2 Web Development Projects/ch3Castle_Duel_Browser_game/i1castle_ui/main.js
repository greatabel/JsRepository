new Vue({
    name: 'game',
    el: '#app',

    data: state,
    template: `<div id="#pp">
                <top-bar :turn="turn" :current-player-index="currentPlayerIndex"
                         :players="players"/>
                <card :def="testCard" @play="handlePlay" />
               </div>`,

    computed: {
        testCard () {
            return cards.archers
        },
    },
    methods: {
        handlePlay () {
            console.log('You played a card!')
        }
    }

})


window.addEventListener('resize', () => {
    state.worldRatio = getWorldRatio()
})
