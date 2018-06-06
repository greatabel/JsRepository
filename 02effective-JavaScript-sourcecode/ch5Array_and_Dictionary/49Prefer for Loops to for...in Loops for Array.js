console.log('error:');
var scores = [98, 74, 85, 77, 93, 100, 89];
var total = 0;
for (var score in scores) {
	console.log('score='+score);
 total += score;
}
console.log('total='+total+'scores.length='+scores.length);
var mean = total / scores.length;
console.log(mean); // ?

var scores = [98, 74, 85, 77, 93, 100, 89];
var total = 0;
for (var i = 0, n = scores.length; i < n; i++) {
 total += scores[i];
}
console.log('total='+total+'scores.length='+scores.length);
var mean = total / scores.length;
console.log(mean); // ?