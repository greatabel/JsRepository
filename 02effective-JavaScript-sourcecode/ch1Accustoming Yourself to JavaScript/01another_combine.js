
"use strict";
function f() {
 console.log('test: use strict!');
}

f();
function g() {
var arguments = [];
// ...
console.log('g() is not strict');
 x = 3.14; 
}

g();