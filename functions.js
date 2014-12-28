
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



console.log('%c ch2 is end ---','color:red');
