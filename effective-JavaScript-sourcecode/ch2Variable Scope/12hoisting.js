function isWinner(player, others) {
var highest = 0;
for (var i = 0, n = others.length; i < n; i++) {
	 console.log('1 in isWinner player.score='+player.score);
	 console.log('犯错了，因为var player 并没有创建新的var，而是把参数改变了，因为for不是函数');
var player = others[i];
 console.log('2 in isWinner player.score='+player.score);
	if (player.score > highest) {
	 highest = player.score;
	 }
 }
 console.log('3 in isWinner player.score='+player.score);
return player.score > highest;
}

function player(score) {
    this.score = score;
}
var a={
	score:222	
};
var b={
	score:221	
};
var c={
	score:1000	
}
var d={
	score:2233
};
console.log('a.score='+a.score);

var list=[a,b,c];
console.log(list);
console.log(isWinner(d,list));

console.log('----------#########');

function trimSections(header, body, footer) {
for (var i = 0, n = header.length; i < n; i++) {
	console.log(header[i]);
 header[i] = header[i].trim();
 	console.log('#'+header[i]+'#');
 }
for (var i = 0, n = body.length; i < n; i++) {
	console.log(body[i]+"|");
 body[i] = body[i].trim();
 console.log('@'+body[i]+"@");
 }
for (var i = 0, n = footer.length; i < n; i++) {
 footer[i] = footer[i].trim();
 }
}
var headerArray=['1','2','3'];

var bodyArray=[' 1000 ','200 t   ','30  '];

var footerArray=[' 111 ','22','t3 '];
trimSections(headerArray,bodyArray,footerArray);

console.log('功能一样，but better way to write it:');
function trimSections_BetterWay(header, body, footer) {
	var i ,n;
for ( i = 0, n = header.length; i < n; i++) {
	console.log(header[i]);
 header[i] = header[i].trim();
 	console.log('#'+header[i]+'#');
 }
for ( i = 0, n = body.length; i < n; i++) {
	console.log(body[i]+"|");
 body[i] = body[i].trim();
 console.log('@'+body[i]+"@");
 }
for ( i = 0, n = footer.length; i < n; i++) {
 footer[i] = footer[i].trim();
 }
}
var headerArrayB=['1','2','3'];

var bodyArrayB=[' 1000 ','200 t   ','30  '];

var footerArrayB=[' 111 ','22','t3 '];
trimSections_BetterWay(headerArrayB,bodyArrayB,footerArrayB);

function test() {
var x = "var", result = [];
 result.push(x);
try {
throw "exception";
 } catch (x) {
 x = "catch";
 }
 result.push(x);
return result;
}
test(); // ["var", "var"]