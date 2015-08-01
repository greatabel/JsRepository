function C() { }
C.prototype = null;
console.log('But instantiating this constructor still results in instances of Object:');
var o = new C();
console.log(Object.getPrototypeOf(o) === null); // false
console.log(Object.getPrototypeOf(o) === Object.prototype); // true

console.log('%c--->in ES5 .ES5 provide 1st standard way to create object with no prototype','background:green');
var x = Object.create(null);
x.id=111;
console.log('Object.getPrototypeOf(x) === null  '+(Object.getPrototypeOf(x) === null).toString());
console.log(Object.getPrototypeOf(x) === Object.prototype); 
console.log(x.id);

var y = { __proto__: null };
console.log(y instanceof Object);