
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
console.log('way is 10 after 1,see http://stackoverflow.com/questions/10198257/comparing-2-strings-alphabetically-for-sorting-purposes');

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


console.log('%c -----ch2 is end ------','color:red');
