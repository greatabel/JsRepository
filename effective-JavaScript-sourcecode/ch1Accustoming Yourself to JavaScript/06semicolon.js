function Point(x, y) {
this.x = x || 0
this.y = y || 0
}
Point.prototype.isOrigin = function() {
return this.x === 0 && this.y === 0
}
var x=new Point(1,2);
console.log(x.isOrigin());

var a,b;
function b(){
	console.log("b()");
}
function f()
{
	console.log('f');
}
console.log("如果开头有'(' 会变成1行 ：a=b \n (f()) will become:-> a=b(f())");
console.log('1:-----');
a = b
(f());

console.log("分成2行:");
a=b
f();

console.log('合并');

console.log('There are exactly five problematic characters to watch out for: (, [, +, -, and /.');
a = b;
["r", "g", "d"].forEach(function(key) {
    console.log("key="+key) ;
});

b= [
    ["d", [1,11]], // Note the quotes around "10%"
    ["Phone", "10%"],
    // etc..
];

console.log(
"a = b\
['r', 'g', 'd'].forEach(function(key) { \
    console.log('key='+key) ; \
}); \
变成 a=b['r',...  "
);

a=1,b=9
a
++
b
console.log('a='+a);

console.log('b='+b);