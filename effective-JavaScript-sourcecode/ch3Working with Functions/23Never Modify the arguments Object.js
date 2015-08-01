var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"
console.log('shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。');
console.log(arr + "\n")
console.log(arr.shift() + "\n")
console.log(arr)

function callMethod(obj, method) {
var shift = [].shift;
for (var i = 0, sum = 0, n = arguments.length;
 i < n;
 i++) {
 console.log('arguments[i]='+arguments[i]);
 }

 shift.call(arguments);
 shift.call(arguments);
 for (var i = 0, sum = 0, n = arguments.length;
 i < n;
 i++) {
 console.log('after:arguments[i]='+arguments[i]);
 }
return obj[method].apply(obj, arguments);
}

var obj = {
 add: function(x, y) { 
 	console.log(x+'(@)'+y);
 	return x + y; }
};
 // console.log(callMethod(obj, "add", 17, 25));



function callMethod_work_but_shouldnotDoit(obj, method) {
var shift = [].pop;
for (var i = 0, sum = 0, n = arguments.length;
 i < n;
 i++) {
 console.log('arguments['+i+']='+arguments[i]);
 }

 shift.call(arguments);
 shift.call(arguments);
 for (var i = 0, sum = 0, n = arguments.length;
 i < n;
 i++) {
 console.log('after:arguments['+i+']='+arguments[i]);
 }
 console.log('method='+method);
 console.log('obj='+obj);
 console.log(typeof(arguments));
 var newarray=[arguments[2],arguments[3]];
return obj[method].apply(obj, newarray);
}

console.log('callMethod_work_but_shouldnotDoit->'+callMethod_work_but_shouldnotDoit(obj, "add", 17, 25,1,2));

console.log('%c console.log(callMethod(obj, "add", 17, 25)); error: TypeError: obj[method] is undefined 但是我们可以做一个workable版本，只是不是arguments'
	,'color:red;');

var argumentsA=[1,2,30,40,50,60,70,80];
function callMethod_A(obj,method){
var shift = [].shift;
console.log(argumentsA);
 shift.call(argumentsA);
 shift.call(argumentsA);

console.log(argumentsA);
return obj[method].apply(obj, argumentsA);	
}
console.log(callMethod_A(obj,"add",10,90));
 objA = {
 add: function(x, y,z) { return x + y+z; }
};
console.log(callMethod_A(objA,"add"));