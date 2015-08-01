
console.log('http://blog.mariusschulz.com/2013/11/13/advanced-javascript-debugging-with-consoletable');
var languages = {
    csharp: { name: "C#", paradigm: "object-oriented" },
    fsharp: { name: "F#", paradigm: "functional" }
};

console.table(languages);
// Multiple property keys
console.table(languages, ["name", "paradigm"]);
console.log('A single property key');
// A single property key
console.table(languages, ["name"]);
console.table(languages, ["paradigm"]);



console.log(' Understand the Difference between Function, Method, and Constructor Calls');
function hello(username) {
return "hello, " + username;
}
console.log(hello("Keyser Söze"));

console.log('%c ----','background:blue;color:pink');
var obj = {
 hello: function() {
return "hello, " + this.username;
 },
 username: "greatabel"
};
console.log(obj.hello()); // "hello, Hans Gruber"
console.log(obj.username);


var obj2 = {
 hello: obj.hello,
 username: "Boo Radley"
};
console.log('obj2.hello():'+obj2.hello()); // "hello, Boo Radley"


function hello() {
	//"use strict";
	//使用严格模式，会this.username 过不去
return "hello, " + this.username;
}
console.log(hello());

var obj11 = {
 hello: hello,
 username: "Gordon Gekko1"
};
console.log(obj11.hello()); // "hello, Gordon Gekko"
var obj22 = {
 hello: hello,
 username: "Biff Tannen2"
};
console.log(obj22.hello()); // "hello, Biff Tannen"


function User(name, passwordHash) {
this.name = name;
this.passwordHash = passwordHash;
}

var u = new User("sfalken","0ef33ae791068ec64b502d6cb0191387");
console.log(u.name+' # '+u.passwordHash);
