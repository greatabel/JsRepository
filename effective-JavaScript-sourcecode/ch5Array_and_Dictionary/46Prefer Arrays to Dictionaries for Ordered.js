var ratings = {
"Good Will Hunting": 0.8,
"Mystic River": 0.7,
"21": 0.6,
"Doubt": 0.9
};
var total = 0, count = 0;
for (var key in ratings) { // unpredictable order
 total += ratings[key];
 count++;
}
console.log('count='+count);
console.log('total='+total); // ?
console.log('(0.8 + 0.7 + 0.6 + 0.9) / 4 ='+(0.8 + 0.7 + 0.6 + 0.9) / 4);
console.log('(0.6 + 0.8 + 0.7 + 0.9) / 4 /='+(0.6 + 0.8 + 0.7 + 0.9) / 4 );

console.log((8 + 7 + 6 + 9) / 4 / 10); // 0.75
console.log((6 + 8 + 7 + 9) / 4 / 10);
console.log('http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html');

function report(highScores) {
var result = "";
var i = 1;
for (var name in highScores) { // unpredictable order
 result += i + ". " + name + ": " +
 highScores[name] +"#"+highScores[name].points+"#"+ "\n";
 i++;
 }
return result;
}
var r=report([{ name: "Hank", points: 1110100 },
 { name: "Steve", points: 1064500 },
 { name: "Billy", points: 1050200 }]);

console.log(r);







console.log('%c 2rd:->\n\n ','color:cyan');
function reportA(highScores) {
var result = "";
for (var i = 0, n = highScores.length; i < n; i++) {
var score = highScores[i];
 result += (i + 1) + ". " +
 score.name + ": " + score.points + "\n";
 }
return result;
}
var ra=reportA([{ name: "Hank", points: 1110100 },
 { name: "Steve", points: 1064500 },
 { name: "Billy", points: 1050200 }]);
console.log(ra);