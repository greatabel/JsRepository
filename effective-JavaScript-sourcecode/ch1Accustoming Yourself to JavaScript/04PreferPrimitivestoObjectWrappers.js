console.log('wrapper------');
var s = new String("hello");
console.log(s + " world");
console.log(typeof "hello"); // "string"
console.log(typeof s);
var  s1=new String("hello");

var  s2=new String("hello");
console.log("s1==s2:"+(s1==s2));
console.log("hello".toUpperCase());
console.log("Hello World".toLowerCase());

console.log('http://stackoverflow.com/questions/20012624/adding-properties-to-primitive-data-types-other-than-array');
"hello".some=200;
console.log("hello".some);
console.log(typeof "hello");
var t=new String("test");
t.some=111;
console.log("t.some="+t.some);
console.log(typeof t);

console.log('---------primitive type:---');
console.log(typeof "John"               );  // Returns string 
console.log(typeof 3.14                 );  // Returns number
console.log(typeof false                );  // Returns boolean
console.log(typeof [1,2,3,4]            );  // Returns object
console.log(typeof {name:'John', age:34});  // Returns object

var cars;              // Value is undefined
var person = null;     // Value is null
console.log( undefined==cars);
console.log('cars='+cars);
console.log('person='+person);

console.log('When a JavaScript variable is declared with the keyword "new", '+
	'the variable is created as an object:');
var x = new String();          // Declares x as a String object
var y = new Number();          // Declares y as a Number object
var z = new Boolean(); 
console.log(typeof x);
 
console.log(typeof y);
 
console.log(typeof z);	