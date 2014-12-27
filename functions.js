
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


