console.log('3+true='+(3+true));
console.log(2 + 3); // 5
console.log("hello" + " world"); // "hello world"
console.log('"2"+3='+("2" + 3)); // "23"
console.log('2+"3"='+(2+"3"));

var obj = {
 toString: function() {
return "[object MyObject]";
 },
 valueOf: function() {
return 17;
 }
};
console.log("object: " + obj); // "object: 17"
console.log("J" + { toString: function() { return "S"; } }); // "JS"
console.log(2 * { valueOf: function() { return 3; } }); // 6

function point(x, y) {
if (!x) {
 x = 320;
 }

if (!y) {
 y = 240;
 }
return { x: x, y: y };
}

console.log(point(0, 0));

function pointA(x, y) {
if (typeof x === "undefined") {
 x = 320;
 }
if (typeof y === "undefined") {
 y = 240;
 }
return { x: x, y: y };
}

console.log('pointA()=');
console.log(pointA());
console.log('pointA(0,0)=');
console.log(pointA(0,0));
console.log('http://stackoverflow.com/questions/2485632/valueof-vs-tostring-in-javascript');
console.log('a + b:'+
    'pa = ToPrimitive(a)'+
    'pb = ToPrimitive(b)*'+
'    if(pa is string || pb is string)'+
'       return concat(ToString(pa), ToString(pb))'+
'    else'+
       'return add(ToNumber(pa), ToNumber(pb)));');

var x = {
    toString: function () { return "foo"; },
    valueOf: function () { return 42; }
};

console.log(x); // foo
console.log("x=" + x); // "x=42"
console.log(x + "=x"); // "42=x"
console.log(x + "1"); // 421
console.log(x + 1); // 43
console.log(["x=", x].join("")); // "x=foo"