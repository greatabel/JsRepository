var dict = { alice: 34, bob: 24, chris: 62 };
var people = [];
for (var name in dict) {
 people.push(name + ": " + dict[name]);
}
console.dir(people);
console.log('%c ----->');


function NaiveDict() { }
NaiveDict.prototype.count = function() {
var i = 0;
for (var name in this) { // counts every property
 i++;
 }
return i;
};
NaiveDict.prototype.toString = function() {
return "[object NaiveDict]";
};
var dict = new NaiveDict();
dict.alice = 34;
dict.bob = 24;
dict.chris = 62;
console.log(dict.count()+'-------');
console.dir(dict);

console.log('%c ----->','color:red');
var dict = new Array();
dict.alice = 34;
dict.bob = 24;
dict.chris = 62;
dict.bob; // 24
Array.prototype.first = function() {
return this[0]+'#haha';
};
Array.prototype.last = function() {
return this[this.length -1];
};

var names = [];
for (var name in dict) {
 names.push(name);
}
console.log(names);
console.log(names.first());


console.log('%c right way----->','color:red');
var dict = {};
dict.alice = 34;
dict.bob = 24;
dict.chris = 62;
var names = [];
for (var name in dict) {
 names.push(name);
}
console.log(names); // ["alice", "bob", "chris"]