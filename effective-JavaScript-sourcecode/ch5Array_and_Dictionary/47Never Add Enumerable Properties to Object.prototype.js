Object.prototype.allKeysOne = function() {
var result = [];
for (var key in this) {
 result.push(key);
 }
return result;
};
console.log('Sadly, this method pollutes even its own result:');
console.log(
({ a: 1, b: 2, c: 3 }).allKeysOne()
);

console.log('%c better use function than method ->','color:red');

function allKeys_A(obj) {
var result = [];
for (var key in obj) {
 result.push(key);
 }
return result;
}
var objectA ={a:10,b:20};
console.log(allKeys_A(objectA));


Object.defineProperty(Object.prototype, "allKeys_B", {
 value: function() {
var result = [];
for (var key in this) {
 result.push(key);
 }
return result;
 },
 writable: true,
 enumerable: false,
 configurable: true
});

console.log(
({ a: 1, b: 2, c: 3 }).allKeys_B()
);
console.log(
({ a: 1, b: 2, c: 3 }).allKeys
);
