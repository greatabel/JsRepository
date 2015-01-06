console.log('%c ----- ch4 is beginning','color:pink');
function Person() {
    // intentionally empty
}

// var person1 = new Person();
// var person2 = new Person();

//when no para to constructor , you can omit ()
var person1 = new Person;
var person2 = new Person;
console.log(person1 instanceof Person);     
console.log(person2 instanceof Person);    

console.log(person1.constructor === Person);



function Person(name){
	this.name = name;
	this.sayName = function(){
		console.log('say:'+this.name);
	}
}

var person1 = new Person("steven");
var person2 = new Person("bill");

console.log(person1.name);
console.log(person2.name);

person1.sayName();
person2.sayName();

function Person(name){

	Object.defineProperty(this, "name",{ 
		get: function(){
			return 'in get:'+name;
		}
		,
		set : function(newName){
			name = newName;
		}
		,
		enumerable: true,
		configurable: true
	});

	this.sayName = function(){
		console.log('in sayName:'+this.name);
	}
}
//注意没有new
var person1 = Person("Nick");
console.log(person1 instanceof Person);
console.log(typeof person1);
console.log(name);

console.log('---prototype----');
 var book = {
            title: "The Principles of Object-Oriented JavaScript"
};
console.log("title" in book);
console.log(book.hasOwnProperty("title"));
console.log("hasOwnProperty" in book);
console.log(book.hasOwnProperty("hasOwnProperty"));
console.log(Object.prototype.hasOwnProperty("hasOwnProperty"));

console.log('check hasPrototypeProperty:');
function hasPrototypeProperty(Object,name){
	return name in Object && ! Object.hasOwnProperty(name);
}

console.log(hasPrototypeProperty(book,"title"));
console.log(hasPrototypeProperty(book,"hasOwnProperty"));

console.log('Object.getPrototypeOf() --->');
var object = {};
var prototype = Object.getPrototypeOf(object);

console.log(prototype === Object.prototype);
console.log(object.__proto__);
console.log('to see one object is a prototype for another:');
console.log(Object.prototype.isPrototypeOf(object));


var object = {}; 
console.log(object.toString());
   object.toString = function() {
       return "[object Custom]";
}; 
console.log(object.toString());
  delete object.toString;
console.log(object.toString()); // "[object Object]"

// no effect - delete only works on own properties
delete object.toString;
console.log(object.toString());

console.log('--Using Prototypes with Constructors');
function PersonP(name){
	this.name = name;
}

PersonP.prototype.sayName = function(){
	console.log('prototype sayName:'+this.name);
}

var person11 = new PersonP("bill");
var person22 = new PersonP("steve");

person11.sayName();
person22.sayName();

PersonP.prototype.favorites = [];
person11.favorites.push('egg');
person22.favorites.push('bread');

console.log(person11.favorites);
console.log(person22.favorites);

//more clear way to add properties to prototype
PersonP.prototype = {
	sayHello: function(){
		console.log('sayHello:'+this.name);
	},
	toString: function(){
		return "[Person "+ this.name+"]";
	}
};
var person33 = new PersonP("tesla");
person33.sayHello();
console.log(person33.toString());

console.log(person33 instanceof PersonP);
console.log(person33.constructor === PersonP);
console.log(person33.constructor === Object);

console.log('-------')
function PersonT(name){
	this.name = name;
}

PersonT.prototype = {
 constructor: PersonT,
 sayName: function(){
 	console.log(this.name);
 },
 toString: function(){
 	return "[Person"+this.name+"]";
 }
};


var personT1 = new PersonT("bill");
var personT2 = new PersonT("steven");

console.log(personT1 instanceof PersonT);
console.log(personT1.constructor === PersonT);
console.log(personT1.constructor === Object);
console.log(personT2 instanceof PersonT);
console.log(personT2.constructor === PersonT);
console.log(personT2.constructor === Object);

console.log('changing prototype');
PersonT.prototype.sayHi = function(){
	console.log('say hi');
}
personT1.sayHi();
personT2.sayHi();

console.log('freeze 只影响OwnProperty')
Object.freeze(personT1);

PersonT.prototype.sayHiA = function(){
	console.log('sayHiA in test');
}
personT1.sayHiA();
personT2.sayHiA();

console.log('build-in object prototypes');

Array.prototype.sum = function(){
	return this.reduce(
		function(previous,current){
			return previous + current;
		});
};

var numbers = [1,2,3];
var result = numbers.sum();
console.log('result='+result);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//about reduce()
//other example:
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
});
console.log('flattened='+flattened);



// Define the callback function.
function appendCurrent (previousValue, currentValue) {
    return previousValue + "::" + currentValue;
    }

// Create an array.
var elements = ["abc", "def", 123, 456];
// Call the reduce method, which calls the callback function
// for each array element.
var result = elements.reduce(appendCurrent);
showStr_constructors_and_prototypes = result;











