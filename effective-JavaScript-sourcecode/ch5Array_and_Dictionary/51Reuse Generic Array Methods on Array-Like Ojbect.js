var arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
var result = Array.prototype.map.call(arrayLike, function(s) {
return s.toUpperCase();
}); // ["A", "B", "C"]
console.log('result='+result);

var resultS = Array.prototype.map.call("abcd", function(s) {
return s.toUpperCase();
}); // ["A", "B", "C"]
console.log('resultS='+resultS);

console.log('concat is not generic in array method!');
function namesColumn() {
return ["Names"].concat(arguments);
}
var r3=namesColumn("Alice", "Bob", "Chris");
console.dir(r3);
// ["Names", { 0: "Alice", 1: "Bob", 2: 
console.log(["test"].concat(['test1','t2']));

function namesColumnA() {
return ["Names"].concat([].slice.call(arguments));
}
var r4 =namesColumnA("Alice1", "Bob2", "Chris3");
console.log('%c r4--->','color:brown');
console.dir(r4);