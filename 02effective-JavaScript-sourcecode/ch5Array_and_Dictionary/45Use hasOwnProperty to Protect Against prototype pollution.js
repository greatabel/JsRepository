var dict = {};
console.log("alice" in dict); // false
console.log("bob" in dict); // false
console.log("chris" in dict); // false
console.log("toString" in dict); // true
console.log("valueOf" in dict); // true
console.log(dict.hasOwnProperty("alice")); // false
console.log(dict.hasOwnProperty("toString")); // false
console.log(dict.hasOwnProperty("valueOf")); // fals
console.log(dict.hasOwnProperty("alice") ? dict.alice : undefined);
var x=10;
console.log(dict.hasOwnProperty(x) ? dict[x] : undefined);

console.log('特殊情况');
var dictA = {};
dictA.hasOwnProperty = 10;
// dictA.hasOwnProperty("alice");
// error: dict.hasOwnProperty is not a 

console.log('%c more safer approach-->','color:blue');
var hasOwn = Object.prototype.hasOwnProperty;

// var hasOwn = {}.hasOwnProperty;


var dict = {};
dict.alice = 24;
console.log(hasOwn.call(dict, "hasOwnProperty")); // false
console.log(hasOwn.call(dict, "alice")); // true
dict.hasOwnProperty = 10;
console.log(hasOwn.call(dict, "hasOwnProperty")); // true
console.log(hasOwn.call(dict, "alice")); // true


console.log('%c more safer and better approach-->','color:blue');
function Dict(elements){
	//allow an potional initial table
	this.elements = elements||{}; //simple object
}

Dict.prototype.has = function(key){
	return {}.hasOwnProperty.call(this.elements,key);
}
Dict.prototype.get = function(key) {
	// body...
	return this.has(key)? this.elements[key]:undefined;
};
Dict.prototype.set = function(key,val){
	this.elements[key]=val;
};
Dict.prototype.remove = function(key){
	delete this.elements[key];
}

var dict = new Dict({
 alice: 34,
 bob: 24,
 chris: 62
});
console.log(dict.has("alice")); // true
console.log(dict.get("bob")); // 24
console.log(dict.has("valueOf")); // false



console.log('%c finally--------#############>','color:red;background:pink');
function DictR(elements) {
// allow an optional initial table
this.elements = elements || {}; // simple Object
this.hasSpecialProto = false; // has "__proto__" key?
this.specialProto = undefined; // "__proto__" element
}
DictR.prototype.has = function(key) {
if (key === "__proto__") {
return this.hasSpecialProto;
 }
// own property only
return {}.hasOwnProperty.call(this.elements, key);
};
DictR.prototype.get = function(key) {
if (key === "__proto__") {
return this.specialProto;
 }
// own property only
return this.has(key)
 ? this.elements[key]
 : undefined;
};
DictR.prototype.set = function(key, val) {
if (key === "__proto__") {
this.hasSpecialProto = true;
this.specialProto = val;
 } else {
this.elements[key] = val;
 }
};
DictR.prototype.remove = function(key) {
if (key === "__proto__") {
this.hasSpecialProto = false;
this.specialProto = undefined;
 } else {
delete this.elements[key];
 }
};
var dictR = new DictR({
 alice: 34,
 bob: 24,
 chris: 62

});
console.log(dictR.has("__proto__"));
console.log(dictR.has("bob"));
// dictR.set("__proto__",10);
// console.log(dictR.has("__proto__"));