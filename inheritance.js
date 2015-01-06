console.log('%c ####ch5 inheritance is starting','color:blue');

var book = {
    title: "The Principles of Object-Oriented JavaScript"
};
var prototype = Object.getPrototypeOf(book);
console.log(prototype === Object.prototype); 