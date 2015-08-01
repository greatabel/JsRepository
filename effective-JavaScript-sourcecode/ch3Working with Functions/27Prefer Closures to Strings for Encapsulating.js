function repeat(n, action) {
for (var i = 0; i < n; i++) {
eval(action);
 }
}
function f(){
	console.log('f()');
}
var start = [], end = [], timings = [];
repeat(10,
"start.push(Date.now()); f(); end.push(Date.now())");
for (var i = 0, n = start.length; i < n; i++) {
 timings[i] = end[i] - start[i];
}
console.log(start);
console.log(end);
console.log(timings);

console.log('如果移动全局变量，会有问题->');
function benchmark() {
var start = [], end = [], timings = [];
repeat(10,
"start.push(Date.now()); f(); end.push(Date.now())");
for (var i = 0, n = start.length; i < n; i++) {
 timings[i] = end[i] - start[i];
 }
console.log('%c  in benchmark','background:yellow');
console.log(start);
console.log(end);
console.log(timings);

return timings;
}
benchmark();






console.log('%c  better way:','background:red');
function repeatA(n, action) {
	for (var i = 0; i < n; i++) {
	action();
	 }
}
function benchmarkA() {
var start = [], end = [], timings = [];
repeatA(10, function() 
	{
	 start.push(Date.now());
	 f();
	 end.push(Date.now());
	 });
for (var i = 0, n = start.length; i < n; i++) {
 timings[i] = end[i] - start[i];
 }
console.log(start);
console.log(end);
console.log(timings);
return timings;
}
benchmarkA();