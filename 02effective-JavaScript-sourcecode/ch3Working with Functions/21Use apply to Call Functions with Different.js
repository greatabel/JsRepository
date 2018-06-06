// console.log(average(1, 2, 3)); // 2
// console.log(average(1)); // 1
// console.log(average(3, 1, 4, 1, 5, 9, 2, 6, 5)); // 4
// console.log(average(2, 7, 1, 8, 2, 8, 1, 8)); // 4.625
console.log('如果知道固定数目的参数')
var x = [ 'p0', 'p1', 'p2','p3' ];
function call_me (param0, param1, param2 ) {
    console.log(param0+' # '+ param1+' # '+param2);
}

// Calling the function using the array with apply()
call_me.apply(this, x);

console.log('改进：');
function call_me2(){
	console.log('call_me2:'+arguments+" <> "+arguments.length);
	for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
call_me2.apply(this,x);


var buffer = {
 state: [],
 append: function() 
	 {
			for (var i = 0, n = arguments.length; i < n; i++) {
			this.state.push(arguments[i]);
			 }
	 }
};

buffer.append("Hello, ");
var firstName='greatabel',lastName='test',newline="\n";
function getInputStrings(){
	return ["haha","testArray"];
}
buffer.append(firstName, " ", lastName, "!");
buffer.append(newline);

buffer.append.apply(buffer, getInputStrings());

console.log(buffer.state);
buffer.append.apply(buffer, ['getInputStrings()','test()']);
console.log(buffer.state);