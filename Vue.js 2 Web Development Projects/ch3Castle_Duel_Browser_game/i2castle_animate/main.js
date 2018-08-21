new Vue({
    name: 'game',
    el: '#app',

    data: state,
    template: `<div id="#app">
                <top-bar :turn="turn" :current-player-index="currentPlayerIndex"
                         :players="players"/>
                <div class="world">
                <castle v-for="(player, index) in players" :player="player"
                            :index="index" />
                           <div class="land" />
                </div>

                <transition name="hand">
                <hand :cards="testHand" v-if="!activeOverlay"  @card-play="testPlayCard" />
                </transition>

                <transition name="fade">
                     <div class="overlay-background" v-if="activeOverlay" />
                </transition>

                <transition name="zoom">
                <overlay v-if="activeOverlay" :key="activeOverlay"> 
                    <component :is="'overlay-content-' + activeOverlay"
                               :player="currentPlayer" :opponent="currentOpponent"
                               :players="players" />
                </overlay>
                </transition>

               </div>`,

    computed: {
        testCard () {
            return cards.archers
        },
    },
    methods: {

        testPlayCard (card) {
            console.log('testPlayCard in main.js')
            const index = this.testHand.indexOf(card)
            this.testHand.splice(index, 1)
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

// Tween.js
requestAnimationFrame(animate);

function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}