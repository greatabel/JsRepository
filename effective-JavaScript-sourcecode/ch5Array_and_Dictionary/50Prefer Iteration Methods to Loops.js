// for (var i = 0; i <= n; i++) { ... }
// // extra end iteration
// for (var i = 1; i < n; i++) { ... }
// // missing first iterationptg11539634

// for (var i = n; i >= 0; i--) { ... }
// // extra start iteration
// for (var i = n - 1; i > 0; i--) { ... } 

// 	for (var i = 0, n = players.length; i < n; i++) {
//  players[i].score++;
// }
// es5 you can:
// players.forEach(function(p) {
//  p.score++;
// });*
var input =['test','t11 '];

var trimmed = [];
for (var i = 0, n = input.length; i < n; i++) {
 trimmed.push(input[i].trim());
}

var trimmed = [];
input.forEach(function(s) {
 trimmed.push(s.trim());
});

var trimmed = input.map(function(s) {
return s.trim();
})
console.log('trimmed='+trimmed+'#');

function takeWhile(a, pred) {
var result = [];
for (var i = 0, n = a.length; i < n; i++) {
if (!pred(a[i], i)) {
break;
 }
 result[i] = a[i];
 }
return result;
}
var prefix = takeWhile([1, 2, 4, 8, 16, 32], function(n) {
return n < 10;
}); 
console.log(prefix);

console.log('add to Array.prototype');
Array.prototype.takeWhile = function(pred) {
var result = [];
for (var i = 0, n = this.length; i < n; i++) {
if (!pred(this[i], i)) {
break;
 }
 result[i] = this[i];
 }
return result;
};
var prefix = [1, 2, 4, 8, 16, 32].takeWhile(function(n) {
return n < 10;
}); // [1, 2, 4, 8]

function takeWhileA(a, pred) {
var result = [];
var earlyExit = {}; // unique value signaling loop break
try {
 a.forEach(function(x, i) {
if (!pred(x)) {
throw earlyExit;
 }
 result[i] = x;
 });
 } catch (e) {
if (e !== earlyExit) { // only catch earlyExit
throw e;
 }
 }
return result;
}
var prefixA = takeWhileA([1, 2,3, 4, 8, 16, 32], function(n) {
return n < 10;
}); 
console.log(prefixA);
console.log([1, 10, 100].some(function(x) { return x > 5; }));
console.log([1, 10, 100].some(function(x) { return x < 0; }));