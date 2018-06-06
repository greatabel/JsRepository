console.log('%c #######ch5 inheritance is starting','color:blue');

var book = {
    title: "The Principles of Object-Oriented JavaScript"
};
var prototype = Object.getPrototypeOf(book);
console.log(prototype === Object.prototype); 

console.log('The valueOf() method gets called whenever an operator is used on an object.');
var boo = new Boolean(false)
console.log(boo.valueOf());

var x = new String('Hello world');
console.log(x.valueOf()); 

var myObject=40;
 myObject={ 
 valueOf:function(){ 
   return 20; 
 }
};

console.log(myObject);
console.log(myObject.valueOf());


console.log('operator > is used, so valueof() is called:');
var now = new Date();
   var earlier = new Date(2010, 1, 1);
console.log(now > earlier);
console.log(now);
console.log(+now);


   var message = "Book = " + book;
   console.log(message);      

var book = {
       title: "The Principles of Object-Oriented JavaScript",
       toString: function() {
           return "[Book " + this.title + "]"
       }
};
   var message = "Book = " + book;
   // "Book = [Book The Principles of Object-Oriented JavaScript]"
 console.log(message);

 console.log('Modifying Object.prototype -->');
 Object.prototype.add = function(value) {
       return this + value;
};
var book = {
   title: "The Principles of Object-Oriented JavaScript"
};
console.log(book.add(5));
console.log("title".add("end"));
// in a web browser
console.log(document.add(true));
console.log(window.add(5));

console.log('other prolem :');
 var empty = {};
        for (var property in empty) {
            console.log(property);
}


console.log('so many problems, so use Object inheritance:');
var book = {
    title: "The Principles of Object-Oriented JavaScript"
};
// is the same as
var book = Object.create(Object.prototype, {
                title: {
                    configurable: true,
                    enumerable: true,
                    value: "The Principles of Object-Oriented JavaScript1",
                    writable: true
} });



console.log(book.title);

var person1 = {
	name: "bill",
	sayName: function(){
		console.log(this.name);
	}
};

var person2 = Object.create(person1,{
name:{
	configurable:true,
	enumerable:true,
	value:'steven',
	writable:true
}
});

person1.sayName();
person2.sayName();
console.log(person1.hasOwnProperty("sayName"));
console.log(person1.isPrototypeOf(person2));
console.log(person2.hasOwnProperty("sayName"));

// null prototype
var nakedObject = Object.create(null);
console.log("toString" in nakedObject);    
console.log("valueOf" in nakedObject);    

console.log('----constructor inheritance----');
 // you write this
        function YourConstructor() {
            // initialization
}
        // JavaScript engine does this for you behind the scenes
YourConstructor.prototype = Object.create(Object.prototype, {
                                        constructor: {
                                            configurable: true,
                                            enumerable: true,
                                            value: YourConstructor,
                                            writable: true
} });



function Rectangle(length, width) { 
	this.length = length;
    this.width  = width;
   }
Rectangle.prototype.getArea = function() {
       return this.length * this.width;
};
Rectangle.prototype.toString = function() {
       return "[Rectangle " + this.length + "x" + this.width + "]";
};
   // inherits from Rectangle
function Square(size) { 
	this.length  = size;
    this.width   = size;
   }
Square.prototype = new Rectangle();
Square.prototype.constructor = Square;
Square.prototype.toString = function() {
       return "[Square " + this.length + "x" + this.width + "]";
   };

var rect = new Rectangle(5, 10);
var square = new Square(6);
console.log(rect.getArea());
console.log(square.getArea());
console.log(rect.toString());
console.log(square.toString());

console.log(rect instanceof Rectangle);
console.log(rect instanceof Object);
console.log(square instanceof Square);
console.log(square instanceof Rectangle);
console.log(square instanceof Object);

console.log('** constructor stealing **');

function Square(size)
{
	Rectangle.call(this,size,size);
}

Square.prototype = Object.create(
	Rectangle.prototype,{
		constructor:{
			configurable: true,
			enumerable: true,
			value: Square,
			writable: true
		}
	}
	);
Square.prototype.toString = function(){
	return "[Square " + this.length + "x" + this.width + "]";
}

var square = new Square(6);
console.log(square.length);
console.log(square.width);
console.log(square.getArea());
console.log(square.toString());

//call the supertype method
Square.prototype.toString = function(){
	var text = Rectangle.prototype.toString.call(this);
	return text.replace("Rectangle","Square # ");
};

console.log(square.toString());
