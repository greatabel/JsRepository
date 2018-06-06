var a = [1,2,3];
var b = [1,2,3];

var c = { x: 1, y: 2 };
var d = { x: 1, y: 2 };

var e = "text";
var f = "te" + "xt";

console.log(a == b );           // false
console.log(a === b);           // false

console.log(c == d );           // false
console.log(c === d);           // false
console.log(e == f );           // true
console.log(e === f);           // true

function square(x) {
return x * x;
}
console.log(
square("3") // 9
);
console.log(
square(4) // 9
);
console.log(
square('10')
	);
console.log('强转要小心!');

function BitVector(){
 this.enableBit = function(n){
 	var r=Number(n).toString(2);
 	console.log('r='+r);
 	return r;
 }
}

// BitVector.prototype.enable = function(x) {
//  x = Number(x);
// if (typeof x === "number") { // always true
// this.enableBit(x);
//  } else { // never executed
// for (var i = 0, n = x.length; i < n; i++) {
// 	console.log('x[i]='+x[i]);
// this.enableBit(x[i]);
//  }
//  }
// };
BitVector.prototype.enable = function(x) {
if (typeof x === "number") {
this.enableBit(x);
 } else if (typeof x === "object" && x) {
for (var i = 0, n = x.length; i < n; i++) {
	console.log('x[i]='+x[i]);
this.enableBit(x[i]);
 }
 } else {
throw new TypeError("expected number or array-like");
 }
}


var B=new BitVector();
B.enable(10);
B.enable(3);
// B.enable('test');
B.enable([1,2,4,8]);

console.log('%c <-----#########---->','color:red');

var guard={
	guard:function(x){
		if(!this.test(x)){
			throw new TypeError("expected "+this);
		}
	}
};
guard.or = function(other) {
	var result = Object.create(guard);
	var self = this;
	 result.test = function(x) {
	 	var r=self.test(x) || other.test(x);
	 	console.log(r);
	 	console.log('in test');
		return r;
	 };
	var description = this + " or " + other;
	 result.toString = function() {
		return description;
	 };

	 console.log('result='+result);
	return result;
};


var unit32 = Object.create(guard);

unit32.test = function(x){
	return typeof x=== "number"&& x===(x>>>0);
}
unit32.toString = function(){
	return "unit32";
}

var arrayLike = Object.create(guard);
arrayLike.test = function(x) {
return typeof x === "object" && x && unit32.test(x.length);
};
arrayLike.toString = function() {
return "array-like object";
};


function BitVector_A(x) {
 unit32.or(arrayLike).guard(x);
// ...
}

var t=new BitVector_A(10);
var t1=new BitVector_A([1,2]);
// var t2=new BitVector_A('t');