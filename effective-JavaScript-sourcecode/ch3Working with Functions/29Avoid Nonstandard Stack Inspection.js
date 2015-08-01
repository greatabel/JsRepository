console.log('https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments/callee');



var factorial = (function(n) {
return (n <= 1) ? 1 : (n * arguments.callee(n - 1));
});

console.log(factorial(5));

console.log([1,2,3,4,5].map(factorial)  );

console.log('%c 但是:------','color:green');
console.log([1,2,3,4,5].map(function(n){
	return  !(n>1) ? 1: (n-1)*n;
}));
console.log('%c 于是:------','color:green');
console.log([1,2,3,4,5].map(function(n){
	return !(n>1)?1:arguments.callee(n-1) *n;
}));

console.log('另外一个主要原因是递归调用会获取到一个不同的 this 值');
var global = this;

var sillyFunction = function (recursed) {
    if (!recursed) { return arguments.callee(true); }
    if (this !== global) {
        console.log("This is: " + this);
    } else {
        console.log("This is the global");
    }
}

sillyFunction();

console.log('%c 所以：','color:red');
console.log([1,2,3,4,5].map(function factorial (n) {
    return !(n > 1) ? 1 : factorial(n-1)*n;
}));
console.log('---------------------------');


function factorial_A(n) {
return (n <= 1) ? 1 : (n * factorial(n - 1));
}


console.log(factorial_A(5));

function revealCaller() {
return revealCaller.caller;
}
function start() {
return revealCaller();
}
console.log(start() === start); // true


function getCallStack() {
var stack = [];
for (var f = getCallStack.caller; f; f = f.caller) {
 stack.push(f);
 }
return stack;
}

function f1() {
return getCallStack();
}
function f2() {
return f1();
}
var trace = f2();

console.log(trace)
; // [f1, f2]
