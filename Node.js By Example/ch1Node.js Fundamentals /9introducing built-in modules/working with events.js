var events = require('events');
var eventEmitter = new events.EventEmitter();

var somethingHappen = function() {
    console.log('somethingHappen!!');
}
eventEmitter
    .on('something-happen', somethingHappen)
    .emit('something-happen');