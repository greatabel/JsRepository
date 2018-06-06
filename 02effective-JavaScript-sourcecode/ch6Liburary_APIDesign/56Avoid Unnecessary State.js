var c ={
	textAlign:'test',
	fillStyle:'test1',
	fillText:function(a,b,c){
		console.log( a+b+c);
		return a+b+c;
	}
}
console.dir(c);
c.fillText("hello, world!", 75, 25);
c.fillStyle = "blue";
c.font = "24pt serif";
c.textAlign = "center";
c.fillText("hello, world!!", 75, 25);
console.dir(c);
