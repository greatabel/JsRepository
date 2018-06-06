function values() {
	var i = 0, n = arguments.length;
	console.log('abel:arguments.length='+arguments.length);
	for(var j=0;j<n;j++){
		console.log('arguments[j]='+arguments[j]);
	}
	return {
	 hasNext: function() {
	return i < n;
	 },
	 next: function() {
	 	console.log('in next i='+i+',n='+n);
	 if (i >= n) {
	throw new Error("end of iteration");
	 }
	return arguments[i++]; // wrong arguments
	 }
	 };
}

var it = values(1, 4, 11, 4, 2, 1, 3, 5, 6);
console.log(it.next()); // 1
console.log(it.next()); // 4
console.log(it.next()); // 1
console.log('iterator’s next method contains its own arguments 这是原因');
console.log('%c -----------','color:red');
function values_New() {
var i = 0, n = arguments.length, a = arguments;
return {
 hasNext: function() {
return i < n;
 },
 next: function() {
if (i >= n) {
throw new Error("end of iteration");
 }
return a[i++];
 }
 };
}
var it = values_New(1, 4, 11, 4, 2, 1, 3, 5, 6);
console.log(it.next()); // 1
console.log(it.next()); // 4
console.log(it.next()); // 1