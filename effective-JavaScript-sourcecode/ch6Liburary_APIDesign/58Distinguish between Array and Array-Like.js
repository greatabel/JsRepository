function BitVector(){
	this.enable = function(n){
		console.log(n+" is enabled!");
	};
	this.bitAt= function(n){
		console.log(n+" is bitAt!");
	}
}
function StringSet(){
	this.add = function(n){
		console.log(n+" is added in StringSet");
	};
	this.contains=function(n){}
}
var bits = new BitVector();
bits.enable(4);
bits.enable([1, 3, 8, 17]);
bits.bitAt(4); // 1
bits.bitAt(8); // 1
bits.bitAt(9); // 0

var set = new StringSet();
set.add("Hamlet");
set.add(["Rosencrantz", "Guildenstern"]);
set.add({ "Ophelia": 1, "Polonius": 1, "Horatio": 1 });
set.contains("Polonius"); // true
set.contains("Guildenstern"); // true
set.contains("Falstaff"); // false

function StringSetA(){

}
StringSetA.prototype.add = function(x) {
if (typeof x === "string") {
this.addString(x);
 } else if (x instanceof Array) { // too restrictive
 x.forEach(function(s) {
this.addString(s);
 }, this);
 } else {
for (var key in x) {
this.addString(key);
 }
 }
};

console.log('ES5->');

function isArray(x) {
return toString.call(x) === "[object Array]";
}

StringSetB.prototype.add = function(x) {
if (typeof x === "string") {
this.addString(x);
 } else if (Array.isArray(x)) { // tests for true arrays
 x.forEach(function(s) {
this.addString(s);
 }, this);
 } else {
for (var key in x) {
this.addString(key);
 }
 }
};

function StringSetB(){
	var myarray=[];
	this.myarray=myarray;
	this.addString=function(n){
		myarray.push(n);
		console.log('StringSetB'+n);
	}
}
var r = new StringSetB();
r.add('test1');
r.add('t2');
console.log(r.myarray);
r.add([1,2,3]);
console.log(r.myarray);