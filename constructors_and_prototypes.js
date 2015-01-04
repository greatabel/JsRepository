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

