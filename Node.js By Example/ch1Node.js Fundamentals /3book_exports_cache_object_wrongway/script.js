var bookA = require('./book.js');
bookA.rate(10)
var bookB = require('./book.js');
bookB.rate(20);
console.log(bookA.getPoints(),bookB.getPoints());

// wrong result:20 20
