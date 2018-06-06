// no strict-mode directive
(function() {
 // file1.js
 "use strict";
 function f() {
console.log('work test: use strict!\n https://github.com/effectivejs/code');
 }
 // ...

 f();

})();

(function() {
 // file2.js
 // no strict-mode directive
 function g() {
 var arguments = [];
 console.log('work g() is not strict');
// ...
 }
 //

 g();

})();


