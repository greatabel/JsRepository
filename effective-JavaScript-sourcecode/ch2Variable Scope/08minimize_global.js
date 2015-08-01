var i,n,sum; //global
function averageScore(players) {
 sum = 0;
for (i = 0, n = players.length; i < n; i++) {
 sum += score(players[i]);
 }
 console.log('in averageScore is:'+sum/n);
return sum / n;
}


var i, n, sum; // same globals as averageScore!
function score(player) {
 sum = 0;
for (i = 0, n = player.levels.length; i < n; i++) {
 sum += player.levels[i].score;
 }
 console.log('sum='+sum);
return sum;
}

//player
function player() {

	var myarray=new Array();;
	for(var i=0;i<10;i++){
		myarray[i]={"score":Math.random()*100 };
		console.log(myarray[i].score);
	}
		
	

  this.levels = myarray;
  console.log('player instantiated');
}

//调用
var playerA = new player();
score(playerA);
var playerB = new player();
score(playerB);
var listOfObjects = [];
listOfObjects.push(playerA);

listOfObjects.push(playerB);
console.log(listOfObjects);
averageScore(listOfObjects);
