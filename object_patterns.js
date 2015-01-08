console.log('%c ##### ch6 object patterns #####','color:brown');
console.log('IIFE:Immediately-Invoked Function Expressions');
 var yourObject = (function() {
            // private data variables
            return {
                // public methods and properties
}; 

}());

var person = (

	function() { 
	 var age = 25;

    return {
        name: "Nicholas in pattern",
        getAge: function() {
            return "age=" + age;
						   },
        growOlder: function() {
            age++;
		  					  } 
		   };

}());

console.log(person.name);
console.log(person.getAge());

person.age = 100;
console.log(person.getAge());

person.growOlder();
console.log(person.getAge());

console.log('definition together:');
var personA =(function(){

var age = 25;

function getAge(){
	return "A age="+age;
}

function growOlder(){
	age ++;
}

return {
	name :"Nicholas definition together",
	getAge:getAge,
	growOlder:growOlder
};

}());

console.log(personA.name);
console.log(personA.getAge());

personA.age = 100;
console.log(personA.getAge());

personA.growOlder();
console.log(personA.getAge());


console.log('%c Private Members for Constructors','color:green;background:pink');

function PersonP(name){

	var age = 25;

	this.name = name;

	this.getAge = function(){
		return 'private member for constructors:'+ age;
	};

	this.growOlder = function(){
		age ++;
	};
}

var person = new PersonP("abel");

console.log(person.name);
console.log(person.getAge());

person.age = 100;
console.log(person.getAge());
person.growOlder();
person.growOlder();
console.log(person.getAge());

var personA = new PersonP("abel-A");

console.log(personA.name);
console.log(personA.getAge());

personA.age = 100;
console.log(personA.getAge());


personA.growOlder();
console.log(personA.getAge());


var Person = (function() {
       // everyone shares the same age
 var age = 25;

 function InnerPerson(name) { 
 	this.name = name;
}
       InnerPerson.prototype.getAge = function() {
           return age;
};
       InnerPerson.prototype.growOlder = function() {
           age++;
};
       return InnerPerson;

}());

var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
console.log(person1.name);      
console.log(person1.getAge());  
console.log(person2.name);      // "Greg"
console.log(person2.getAge());  // 25
person1.growOlder();
console.log(person1.getAge());   // 26
console.log(person2.getAge());   // 26


console.log('-----mixin-------');
function EventTarget(){
   }
   EventTarget.prototype = {
       constructor: EventTarget,
addListener: function(type, listener){
           // create an array if it doesn't exist
           if (!this.hasOwnProperty("_listeners")) {
               this._listeners = [];
}
           if (typeof this._listeners[type] == "undefined"){
               this._listeners[type] = [];
}
           this._listeners[type].push(listener);
       },
 fire: function(event){
           if (!event.target){
               event.target = this;
}
           if (!event.type){  // falsy
               throw new Error("Event object missing 'type' property.");
}
if (this._listeners && this._listeners[event.type] instanceof Array){ var listeners = this._listeners[event.type];
for (var i=0, len=listeners.length; i < len; i++){
                   listeners[i].call(this, event);
               }
} },
 removeListener: function(type, listener){
if (this._listeners && this._listeners[type] instanceof Array){
               var listeners = this._listeners[type];
               for (var i=0, len=listeners.length; i < len; i++){
                   if (listeners[i] === listener){
                       listeners.splice(i, 1);
                       break;
} }
} }
};



console.log('client code,one way:');
var target = new EventTarget();
   target.addListener("message", function(event) {
       console.log("Message is " + event.data);
   })
   target.fire({
       type: "message",
       data: "Hello world!"
   });

var person = new EventTarget();
   person.name = "Nicholas";
   person.sayName = function() {
       console.log(this.name);
       this.fire({ type: "namesaid", name: name });
   };


console.log('second way:');
function Person(name) {
       this.name = name;
}
Person.prototype = Object.create(EventTarget.prototype);
   Person.prototype.constructor = Person;
   Person.prototype.sayName = function() {
       console.log(this.name);
       this.fire({ type: "namesaid", name: name });
};
var person = new Person("Nicholas");
console.log(person instanceof Person);      
console.log(person instanceof EventTarget); 

console.log('mixin');

function mixin(receiver, supplier) {
            for (var property in supplier) {
                if (supplier.hasOwnProperty(property)) {
                    receiver[property] = supplier[property]
											} }
            return receiver;
        }


function Person(name) {
       this.name = name;
}
mixin(Person.prototype, new EventTarget()); mixin(Person.prototype, {
       constructor: Person,
       sayName: function() {
           console.log(this.name);
           this.fire({ type: "namesaid", name: name });
} });
   var person = new Person("Nicholas");
   console.log(person instanceof Person);      // true
   console.log(person instanceof EventTarget); // false


console.log('scope-safe:');
function Person(name) {
            this.name = name;
}

Person.prototype.sayName = function() {
       console.log(this.name);
};
var person1 = Person("Nicholas");
console.log(person1 instanceof Person);
console.log(typeof person1);
console.log(name);

console.log('safe:');
function PersonB(name) {
    if (this instanceof PersonB) {
        this.name = name;
    } else {
        return new PersonB(name);
    }
}
var personB1 = new PersonB("Nicholas");
var personB2 = PersonB("Nicholas");
console.log(personB1 instanceof PersonB);     // true
console.log(personB2 instanceof PersonB);     // true