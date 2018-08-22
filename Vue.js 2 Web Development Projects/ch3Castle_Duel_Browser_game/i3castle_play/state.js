// Some usefull variables
var maxHealth = 10
var maxFood = 10
var handSize = 5
var cardUid = 0
var currentPlayingCard = null

// The consolidated state of our app
var state = {
  // World
  worldRatio: getWorldRatio(),
  // TODO Other things
  turn: 1,
  players: [
    {
        name: '刘邦',
        food: 10,
        health: 10,
        // Is skipping is next turn 
        skipTurn: false,
        // Skiped turn last time skippedTurn: false, 
        hand: [], 
        //临时的
        lastPlayedCardId: 'catapult', 
        dead: false,
    },
    {
        name: '项羽',
        food: 10,
        health: 10,
        // Is skipping is next turn 
        skipTurn: false,
        // Skiped turn last time skippedTurn: false, 
        hand: [], 
        lastPlayedCardId: 'catapult', 
        dead: false,
    }

    ],
    currentPlayerIndex: Math.round(Math.random()),
      get currentPlayer () {
    return state.players[state.currentPlayerIndex]
      },
      get currentOpponentId () {
        return state.currentPlayerIndex === 0 ? 1 : 0
      },
      get currentOpponent () {
        return state.players[state.currentOpponentId]
      },

      get currentHand () {
      return state.currentPlayer.hand
      },
      
    testHand: [],
    // UI
    activeOverlay: null,
    
    drawPile: pile,
    discardPile: {},
}
