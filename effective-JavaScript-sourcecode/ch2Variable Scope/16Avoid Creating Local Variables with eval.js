console.log('16Avoid Creating Local Variables with eval');

function test(x) {
eval("var y = x;"); // dynamic binding
console.log(y);
return y;
}
test("hello"); // "hello"

console.log('http://blog.mariusschulz.com/2013/11/22/measuring-execution-times-in-javascript-with-consoletime');

console.time("concatenation");
var y = "global";
function test(x) {
if (x) {
eval("var y = 'local';"); // dynamic binding
 }
 console.log(y);
return y;
}
test(true); // "local"
test(false); // "global"

console.log('##')

var y = "global";
function testA(src) {
eval(src); // may dynamically bind
console.log(y);
return y;
}
testA("var y = 'local';"); // "local"
testA("var z = 'local';"); // "global"


console.log('不想影响的可以这样：');
var y = "global";
function testB(src) {
 (function() { eval(src);  console.log('nested y='+y); })();
 console.log('y='+y);
return y;
}
testB("var y = 'local';"); // "global"
testB("var z = 'local';"); // "global"


console.timeEnd("concatenation");


