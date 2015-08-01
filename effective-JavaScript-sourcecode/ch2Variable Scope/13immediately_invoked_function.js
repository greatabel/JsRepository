function wrapElements(a) {
var result = [], i, n;
for (i = 0, n = a.length; i < n; i++) {
 result[i] = function() { return a[i]; };
 }
 console.log('**#\n');
 console.log('in wrapElements:'+result);
 console.log('#**\n');
return result;
}

var wrapped = wrapElements([10, 20, 30, 40, 50]);
console.log('\n ---\n');
var f = wrapped[0];
console.log('f()='+f());
console.log('\n\n-------------\n');




function wrapElements_A(a) {
var result = [];
for (var i = 0, n = a.length; i < n; i++) {

 (function() {
var j = i;
 result[i] = function() { return a[j]; };
 })();
 }
 console.log('new result:'+result);
return result;
}
var wrappedA = wrapElements_A([100, 20, 30, 40, 50]);
console.log('\n ---\n');
var f = wrappedA[0];
console.log('f()='+f());




console.log('\n\n-------------\n');
function wrapElements_B(a) {
var result = [];
for (var i = 0, n = a.length; i < n; i++) {
 (function(j) {
 result[i] = function() { return a[j]; };
 })(i);
 }
 console.log('b:'+result);
return result;
}

var wrappedB = wrapElements_B([1000, 20, 30, 40, 50]);
console.log('\n ---\n');
var f = wrappedB[0];
console.log('f()='+f());

console.log('http://stackoverflow.com/questions/8228281/what-is-this-iife-construct-in-javascript');
var val= function(){ return 1+9;};
console.log(val);
console.log((val)());