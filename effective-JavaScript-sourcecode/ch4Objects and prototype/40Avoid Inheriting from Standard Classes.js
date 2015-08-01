	function Dir(path, entries) {
this.path = path;
for (var i = 0, n = entries.length; i < n; i++) {
this[i] = entries[i];
 }


}
Dir.prototype = Object.create(Array.prototype);

var dir = new Dir("/tmp/mysite",
 ["index.html", "script.js", "style.css"]);
console.log(dir.length);
console.dir(dir);
var dirA = new Dir("/", []);
console.log(Object.prototype.toString.call(dirA)); // "[object Object]"
console.log(Object.prototype.toString.call([])); // "[object Array]"
dir.forEach(function(element){ console.log(element+" # "); });




console.log('%c better way:------->','background:red');
function DirB(path, entries) {
this.path = path;
this.entries = entries; // array property
}

DirB.prototype.forEach = function(f, thisArg) {
if (typeof thisArg === "undefined") {
 thisArg = this;
 }
this.entries.forEach(f, thisArg);
};
var dirb = new DirB("/tmp/mysite",
 ["index.html", "script.js", "style.css"]);
dirb.forEach(function(element){ console.log(element+" # "); });
console.dir(dirb);