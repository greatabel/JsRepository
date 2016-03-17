// http://www.runoob.com/nodejs/nodejs-util.html
var util = require('util');
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}

Base.prototype.showName = function() {
    console.log(this.name + ' show name');
};

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub, Base);
var objectBase = new Base();
objectBase.showName();
objectBase.sayHello();
console.log(objectBase);

var objectSub = new Sub();
objectSub.showName();
console.log(objectSub);