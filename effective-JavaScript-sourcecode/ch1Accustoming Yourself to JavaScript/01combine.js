console.log('----combination---');

function g() {
var arguments = [];
// ...
console.log('g() is not strict');
}

g();

"use strict";
function f() {
 console.log('test: use strict!');
}

f();

console.log('another combination:');
