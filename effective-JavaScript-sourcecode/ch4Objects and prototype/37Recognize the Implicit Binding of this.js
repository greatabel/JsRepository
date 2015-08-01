function CSVReader(separators) {

	console.log('separators='+separators);
this.separators = separators || [","];
console.log('this.separators='+this.separators);
this.regexp = 
new RegExp(this.separators.map(function(sep) {
	console.log('sep='+sep);
return "\\" + sep[0];
 }).join("|"));
console.log('this.regexp='+this.regexp);
}

CSVReader.prototype.read = function(str) {
var lines = str.trim().split(/\n/);
	console.log('lines='+lines.length);
	for(var i=0;i<lines.length;i++){
		console.log(lines[i]+'@ ');
	}
return lines.map(function(line) {
	var abelResult= line.split(this.regexp);
	console.log('abelResult='+abelResult.length);
return abelResult; // wrong this!
 });
};
var reader = new CSVReader();
console.log(
reader.read("a,b,c\nd,e,f\nabel,test,test1\n") // [["a,b,c"], ["d,e,f
		   );


console.log('%c 上面是错误，下面是正确------------','color:blue;background:red');
CSVReader.prototype.readA = function(str) {
var lines = str.trim().split(/\n/);
return lines.map(function(line) {
var abelResult= line.split(this.regexp);
	console.log('abelResult='+abelResult.length);
return abelResult;
 }.bind(this)); // bind to outer this-binding
};
var reader = new CSVReader();
console.log(
reader.readA("a,b,c\nd,e,f\nabel,test,test1\n") // [["a,b,c"], ["d,e,f
		   );