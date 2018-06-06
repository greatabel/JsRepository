console.log('Prefer Indirect eval to Direct eval-----------http://stackoverflow.com/questions/7505623/colors-in-javascript-console');
console.log('%c Oh my heavens:17 ', 'background: #222; color: red');

var x = "global";
function test() 
{
	var x = "local";
	return eval("x"); // direct eval
}
console.log(test()); // "local"

console.log('%c indirect','background:blue;color:pink');

var Y = "global";
function testa() {
	var Y = "local";
	var f = eval;
	return f("Y"); // indirect eval
}
console.log(testa()); // "global"



var srcA=1;
function testB() {
	var srcA=2;
	 
	 return (0,eval)("srcA");;
}

console.log(testB());

console.log('%c show->','background:blue;color:pink');

var srcA1=1;
function testC() {
	var srcA1=2;
	 
	 return (0,eval)(srcA1);
}

console.log(testC());	

console.log('eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。');
eval("x=10;y=20;console.log('x*y='+x*y)");