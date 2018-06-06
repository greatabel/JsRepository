var empty = Object.create(null); // object with no prototype
console.log("__proto__" in empty); // false (in some environments)

console.log('如果不提供__proto__ :');
if (typeof Object.getPrototypeOf === "undefined") {
 Object.getPrototypeOf = function(obj) {
var t = typeof obj;
if (!obj || (t !== "object" && t !== "function")) {
throw new TypeError("not an object");
 }
return obj.__proto__;
 };
}