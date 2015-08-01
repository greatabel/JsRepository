function f() { return "global"; }

function test(x) 
{
		function f() { return "local"; }
	var result = [];
	if (x) {
	 result.push(f());
	 }

	 result.push(f());
	 console.log(result);
	return result;
}

test(true); // ["local", "local"]
test(false); // ["local"]
console.log('es5 will work like below!');

console.log('如果想内外结合，可以这样：');
function ff() { return "global"; }
function test(x) {
var g = ff, result = [];
if (x) {
 g = function() { return "local"; }
 result.push(g());
 }
 result.push(g());
 console.log('#:'+result);
return result;
}

test(true); 
test(false); 