function User(name, passwordHash) {
	console.log('use strict 模式会不work');
this.name = name;
this.passwordHash = passwordHash;
}
console.log('33------If a caller forgets the new keyword, then the function’s receiver becomes the global object:');
var u = User("baravelli", "d8b74df393528d51cd19980ae0aa028e");
console.log(u); // undefined
console.log(this.name); // "baravelli"
console.log(this.passwordHash);


console.log('right and better way:');
function UserA(name, passwordHash) {
if (!(this instanceof UserA)) {
	console.log('1->'+name);
return new UserA(name, passwordHash);
 }
 console.log('2->'+name);
this.name = name;
this.passwordHash = passwordHash;
}
console.log('x');
var x = UserA("baravelliA1", "d8b74df393528d51cd19980ae0aa028e");
console.log('y');
var y = new UserA("baravelliA2","d8b74df393528d51cd19980ae0aa028e");
console.log(x instanceof UserA); // true
console.log(y instanceof UserA); // true
console.log(x.name+' '+y.name);


console.log('more es5 way:');
function UserB(name, passwordHash) {
var self = this instanceof UserB
 ? this
 : Object.create(UserB.prototype);
 self.name = name;
 self.passwordHash = passwordHash;
return self;
}
console.log('xx');
var xx = UserB("baravelliA1B", "d8b74df393528d51cd19980ae0aa028e");
console.log('yy');
var yy = new UserB("baravelliA2B","d8b74df393528d51cd19980ae0aa028e");
console.log(xx instanceof UserB); // true
console.log(yy instanceof UserB); // true
console.log(xx.name+' '+yy.name);

console.log('es5 的Object.create 如果当前环境不存在');
if (typeof Object.create === "undefined") {
 Object.create = function(prototype) {
function C() { }
 C.prototype = prototype;
return new C();
 };
}