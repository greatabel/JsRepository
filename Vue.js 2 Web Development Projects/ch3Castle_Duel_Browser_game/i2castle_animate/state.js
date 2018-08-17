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
    },
    {
        name: '项羽',
    }

    ],
    currentPlayerIndex: Math.round(Math.random()),
    testHand: [],
    // UI
    activeOverlay: null,
}
