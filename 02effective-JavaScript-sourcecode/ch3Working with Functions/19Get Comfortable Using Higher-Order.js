console.log('%c ----','background:blue;color:pink');

function compareNumbers(x, y) {
	if (x < y) {
	return -1;
	 }
	if (x > y) {
	return 1;
	 }
	return 0;
}
var arr=[3, 1, 4, 1, 5, 9];
console.table(arr);
arr.sort(compareNumbers); // [1, 1, 3, 4, 5, 9]
console.table(arr);


console.log('%c In fact, the above example can be simplified further with an anonymous function:','color:blue');
console.log(
				[10,3,2,4,1].sort(
			function(x,y){
				if(x<y)
					return -1;
				if(x>y)
					return 1;
				return 0;
			}
				)
);


var names = ["Fred", "Wilma", "Pebbles"];
var upper = [];
for (var i = 0, n = names.length; i < n; i++) {
 upper[i] = names[i].toUpperCase();
}
console.log(upper); // ["FRED", "WILMA", "PEBBLES"]

console.log('使用高阶改造之：ES5之后有了arrays的map方法');
var newupper = names.map(
	function(name){
		return name.toUpperCase();
	}

	);
console.log(newupper);

console.log('%c 等你熟悉后就可以自由的创造','color:green');

var aIndex="a".charCodeAt(0);

var alphabet="";
for(var i=0;i<26;i++){
	alphabet+=String.fromCharCode(aIndex+i);
}
console.log(alphabet);


var digits="";
for(var i=0;i<10;i++){
	digits+=i;
}
console.log(digits);


console.log('random string->');
var random="";
for(var i=0;i<8;i++){
	random+=String.fromCharCode(Math.floor(Math.random()*26)+aIndex);
}
console.log('random='+random);



console.log('%c 抽象出来之后','color:cyan;background:pink');
function buildString(n, callback) {
var result = "";
for (var i = 0; i < n; i++) {
 result += callback(i);
 }
return result;
}

var alphabetCommon= buildString(26,function(i){
return 	String.fromCharCode("a".charCodeAt(0)+i);
});
console.log(alphabetCommon);

var digitsCommon = buildString(10,
	function(i){
		return i;
	});
console.log(digitsCommon);

var randomCommon = buildString(8,function(i){
	return String.fromCharCode(Math.floor(Math.random()*26)+"a".charCodeAt(0));
});
console.log(randomCommon);



