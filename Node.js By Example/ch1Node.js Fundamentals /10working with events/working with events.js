var events = require('events');
var eventEmitter = new events.EventEmitter();

var somethingHappenFunc = function() {
    console.log('somethingHappen!!');
}
eventEmitter
    .on('something-happen', somethingHappenFunc)
    .emit('something-happen');