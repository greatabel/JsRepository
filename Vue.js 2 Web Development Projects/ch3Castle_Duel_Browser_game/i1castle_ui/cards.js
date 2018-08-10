let cards = [
  {
    id: 'pikemen',
    type: 'attack',
    title: '长矛兵',
    description: '耗费 1 <b>食物🍜</b><br>交换 1 <b>伤害😢</b>',
    note: 'Send your disposable men to a certain death.',
    play (player, opponent) {
      player.food -= 1
      opponent.health -= 1
    },
  },
  {
    id: 'catapult',
    type: 'attack',
    title: '投石机',
    description: '耗费 2 <b>食物🍜</b><br>交换 2 <b>伤害😢</b>',
    play (player, opponent) {
      player.food -= 2
      opponent.health -= 2
    },
  },
  {
    id: 'trebuchet',
    type: 'attack',
    title: '重型投石机',
    description: '耗费 3 <b>食物🍜</b><br>Take 1 <b>伤害😢</b><br>交换 4 <b>伤害😢</b>',
    note: ' &#171;The finest machine Man ever created!&#187;',
    play (player, opponent) {
      player.food -= 3
      player.health -= 1
      opponent.health -= 4
    },
  },
  {
    id: 'archers',
    type: 'attack',
    title: '弓箭手',
    description: '耗费 3 <b>食物🍜</b><br>交换 3 <b>伤害😢</b>',
    note: '&#171;Ready your bows! Nock! Mark! Draw! Loose!&#187;',
    play (player, opponent) {
      player.food -= 3
      opponent.health -= 3
    },
  },
  {
    id: 'knighthood',
    type: 'attack',
    title: '骑士',
    description: '耗费 7 <b>食物🍜</b><br>交换 5 <b>伤害😢</b>',
    note: 'Knights may be even more expansive than their mount.',
    play (player, opponent) {
      player.food -= 7
      opponent.health -= 5
    },
  },
  {
    id: 'repair',
    type: 'support',
    title: '护理',
    description: 'Repair 5 <b>伤害😢</b><br>Skip your next turn',
    play (player, opponent) {
      player.skipTurn = true
      player.health += 5
    }
  },
  {
    id: 'quick-repair',
    type: 'support',
    title: '快速修复',
    description: '耗费 3 <b>食物🍜</b><br>Repair 3 <b>伤害😢</b>',
    note: 'This is not without consequences on the moral and energy!',
    play (player, opponent) {
      player.food -= 3
      player.health += 3
    }
  },
  {
    id: 'farm',
    type: 'support',
    title: '农场',
    description: 'Gather 5 <b>食物🍜</b><br>Skip your next turn',
    note: '&#171;One should be patient to grow crops.&#187;',
    play (player, opponent) {
      player.skipTurn = true
      player.food += 5
    },
  },
  {
    id: 'granary',
    type: 'support',
    title: '粮仓',
    description: 'Gather 2 <b>食物🍜</b>',
    play (player, opponent) {
      player.food += 2
    }
  },
  {
    id: 'poison',
    type: 'special',
    title: '放毒',
    description: '耗费 1 <b>食物🍜</b><br>Your opponent lose 3 <b>食物🍜</b>',
    note: 'Send someone you trust poison the enemy granary.',
    play (player, opponent) {
      player.food -= 1
      opponent.food -= 3
    },
  },
  {
    id: 'fireball',
    type: 'special',
    title: '火球🔥',
    description: 'Take 3 <b>伤害😢</b><br>交换 5 <b>伤害😢</b><br>Skip your turn',
    note: '&#171;Magic isn\'t for kids. You fool.&#187;',
    play (player, opponent) {
      player.health -= 3
      player.skipTurn = true
      opponent.health -= 5
    },
  },
  {
    id: 'chapel',
    type: 'special',
    title: '礼堂',
    description: 'Do nothing',
    note: 'Pray in the chapel, and hope someone will listen.',
    play (player, opponent) {
      // Nothing happens...
    },
  },
  {
    id: 'curse',
    type: 'special',
    title: '诅咒',
    description: 'Everyone:<br>Lose 3 <b>食物🍜</b><br>Take 3 <b>伤害😢</b>',
    play (player, opponent) {
      player.food -= 3
      player.health -= 3
      opponent.food -= 3
      opponent.health -= 3
    },
  },
  {
    id: 'miracle',
    type: 'special',
    title: '奇迹',
    description: 'Everyone:<br>Gather 3 <b>食物🍜</b><br>Repair 3 <b>伤害😢</b>',
    play (player, opponent) {
      player.food += 3
      player.health += 3
      opponent.food += 3
      opponent.health += 3
    },
  },
]

cards = cards.reduce((map, card) => {
  card.description = card.description.replace(/\d+\s+<b>.*?<\/b>/gi, '<span class="effect">$&</span>')
  card.description = card.description.replace(/<b>(.*?)<\/b>/gi, (match, p1) => {
    // console.log('p1=>', p1)
    var id = p1.toLowerCase()

    switch ( id ) {
      case '食物🍜':
        id = 'food';
        break;
      case '伤害😢':
        id = 'Damage';
        break;
      default:
        break;
    }

    return `<b class="keyword ${id}">${p1} <img src="svg/${id}.svg"/></b>`
  })
  map[card.id] = card
  return map
}, {})

let pile = {
  pikemen: 4,
  catapult: 4,
  trebuchet: 3,
  archers: 3,
  knighthood: 3,
  'quick-repair': 4,
  granary: 4,
  repair: 3,
  farm: 3,
  poison: 2,
  fireball: 2,
  chapel: 2,
  curse: 1,
  miracle: 1,
}
