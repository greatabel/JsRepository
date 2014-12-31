
var showStr_functions = "ch2:function test ";

var result = add(5, 5);

function add(num1, num2) {
            return num1 + num2;
}
showStr_functions+=('result='+result);

 var add = function(num1, num2) {
            return num1 + num2;
};

showStr_functions+=(' add(1,20)='+add(1,20))

//错误的方式
// var resultA = addA(5, 5);
//         var addA = function(num1, num2) {
//             return num1 + num2;
// };

function sayHi() { 
	console.log("Hi!");
}
sayHi(); // outputs "Hi!" 
var sayHi2 = sayHi;
sayHi2();       // outp

//等效真正发生的是：
 var sayHi = new Function("console.log(\"Hi1!\");");
   sayHi();        // outputs "Hi!"
   var sayHi2 = sayHi;
   sayHi2();       // outputs "Hi!"


var numbers = [ 1, 5, 8, 4, 7, 10, 2, 6 ]; 
numbers.sort(function(first, second) {
       return first - second;
   });
console.log(numbers); // "[1, 2, 4, 5, 6, 7, 8, 10]" 
numbers.sort();
console.log(numbers);       
console.log('way is 10 after 1,see http://stackoverflow.com/'+
	'questions/10198257/comparing-2-strings-alphabetically-for-sorting-purposes');

console.log('Parameters:');
function reflect(value) {
    return value;
}
console.log(reflect("Hi!"));
console.log(reflect("Hi!", 25));
console.log(reflect.length);
reflect = function() {
    return arguments[0];
};
console.log(reflect("Hi!"));
console.log(reflect("Hi!", 25));
console.log(reflect.length);

console.log('function 的length只反映函数定义时候参数个数，arguments有时候挺有用');

function sum(){
	var result =0;
	i=0,
	len = arguments.length;

	while(i < len){
		result += arguments[i];
		i++;
	}
	return result;
}
console.log(sum(1,2,3,4));
console.log(sum());

console.log('overloading');
function sayMessage(message) {
            console.log(message);
}
function sayMessage() {
    console.log("Default message");
}
sayMessage("Hello!");  

console.log('the one that appears last in your code wins');

console.log("看看真正发生的是这样的：")
var sayMessageA = new Function("message","console.log(message);");

sayMessageA = new Function("console.log(\"Default 2\");");
sayMessageA("Hello 2");
console.log('但是可以这样用：')
function sayMessageB(message){
	if(arguments.length === 0){
		message = "Default B";
	}
	console.log(message);
}
sayMessageB("Hello B");


//----------@@  method  @@--------------
var person = {
 name: "abel",
 sayName: function(){
 	console.log(person.name+" in sayName function");
 }

};
person.sayName();

//等价方式：
var personA = {
	nameA :"great",
	sayNameA: function(){
		console.log(this.nameA);
	}

}
personA.sayNameA();

//更复杂点的调用方式:
function sayNameForAll(){
	console.log(this.name);
}
var person1 = {
	name : "Abel1",
	sayName: sayNameForAll
};
var person2 = {
	name : "Abel2",
	sayName: sayNameForAll
};

var name= "Abel3_outer";

person1.sayName();
person2.sayName();
sayNameForAll();

//----------@@  method  @@--------------
function sayNameForAll_call(label){
	console.log(label+" label:"+this.name);
}

var personC1 = {
	name: "test_c1"
};
var personC2 = {
	name: "test_c2"
};

var name = "test_c_couter";

sayNameForAll_call.call(this,"global haha");
sayNameForAll_call.call(personC1,"personC1 haha");
sayNameForAll_call.call(personC2,"personC2 haha");


sayNameForAll_call.apply(this,["test_apply global"]);

sayNameForAll_call.apply(personC1,["test_apply personC1"]);

sayNameForAll_call.apply(personC2,["test_apply personC2"]);

//bind
var sayNameForPerson1 = sayNameForAll_call.bind(person1);
sayNameForPerson1("p1_bind");

var sayNameForPerson2 = sayNameForAll_call.bind(person2);
sayNameForPerson2("p2_bind");

//attaching a method to an object doesn't change 'this'
person2.sayName = sayNameForPerson1;
person2.sayName("person2_dont_change_this");

console.log('%c -----ch2 is end ------','color:red');
