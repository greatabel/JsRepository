console.log('%c -----25------','background:blue;color:pink');

var buffer = {
 entries: [],
	 add: function(s) {
	this.entries.push(s);
	 },
	 join: function() {
	return this.entries.join("");
	 }
};

console.log('not working demo:var source = ["867", "-", "5309"]; source.forEach(buffer.add);');
// var source = ["867", "-", "5309"];
// source.forEach(buffer.add);

var source = ["867", "-", "5309"];
source.forEach(buffer.add, buffer);
console.log(buffer.join()); // "867-5309"

console.log('What if forEach did not accept the extra receiver argument?');
var source = ["867", "-", "5309"];
source.forEach(function(s) {
 buffer.add(s);
});
console.log(buffer.join()); // "867-5309"

console.log('%c using bind to simpfiy demo: http://kangax.github.io/compat-table/es5/','background:yellow');
var bufferA = {
 entries: [],
	 add: function(s) {
	this.entries.push(s);
	 },
	 join: function() {
	return this.entries.join("");
	 }
};
var source = ["867", "-", "5309"];
source.forEach(bufferA.add.bind(bufferA));
console.log(bufferA.join());
