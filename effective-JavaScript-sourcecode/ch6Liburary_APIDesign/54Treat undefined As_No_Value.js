var x;
console.log(x); // undefined

var obj = {};
console.log(obj.y); // undefined
function f() {
return;
}
function g() { }
console.log(f()); // undefined
console.log(g()); // undefined

function f1(x) {
return x;
}
console.log(f1()); 

var element={
	name:'nb',
	highlight:function(color){
		console.log('color='+color+'%c color test','color:'+color);
	}
}
element.highlight(); // use the default color
element.highlight("red"); // use a custom color
element.highlight(undefined); //
element.highlight(null);
var preferences = '{"firstname":"Jesper","surname":"Aaberg","phone":["555-0100","555-0120"],"highlightColor":"pink"}';
console.log('%c JSON.parse()将 JavaScript 对象表示法 (JSON) 字符串转换为对象','background:cyan');
var config = JSON.parse(preferences);
// ...
element.highlight(config.highlightColor); 


function Server(port, hostname) {
if (arguments.length < 2) {
 hostname = String(hostname || "localhost");
 }
 hostname = String(hostname);
// ...
 console.log('hostname='+hostname+'%c port:'+port,'color:red');
}
var s1 = new Server(80, "example.com");
var s2 = new Server(80); // defaults to "localhost"
var s2 = new Server(80,"localhost");