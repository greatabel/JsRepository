new Vue({
    name: 'game',
    el: '#app',

    data: state,
    template: `<div id="#pp">
                <top-bar :turn="turn" :current-player-index="currentPlayerIndex"
                         :players="players"/>
                <transition name="fade">
                <hand :cards="testHand" v-if="!activeOverlay" />
                </transition>
               </div>`,

    computed: {
        testCard () {
            return cards.archers
        },
    },
    methods: {
        handlePlay () {
            console.log('You played a card!')
        },

        testDrawCard() {

            const ids = Object.keys(cards)
            const randomId = ids[Math.floor(Math.random() * ids.length)] // Return a new card with this definition
            return {
                     // Unique id for the card
                     uid: cardUid++,
                     // Id of the definition
                     id: randomId,
                     // Definition object
                     def: cards[randomId],
                   }
        },
        createTestHand (){
            // console.log('creatTestHand:', cards)
            const cards = []
            // const ids = Object.keys(cards)
            // console.log('ids=', ids)
            for (let i=0; i < 5; i++){
                cards.push(this.testDrawCard())
            }
            return cards
        },

    },


    created () {
        this.testHand = this.createTestHand()
        // console.log('testHand=>', this.testHand)
    },

})


window.addEventListener('resize', () => {
    state.worldRatio = getWorldRatio()
})
