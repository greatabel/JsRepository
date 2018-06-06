console.log(
	(function(x) {
	return x + 1;
	}).toString()
);
console.log(' bind function is implemented'+ 
'in another programming language (typically C++), 所以不是每次都能打印出代码');
console.log(

	(function(x) {
	return x + 1;
	}).bind(16).toString()

);

console.log('toString dont preserve the value associate with var reference');
console.log(

	(function(x) {
	return function(y) {
	return x + y;
	 }
	})(42).toString()

	);