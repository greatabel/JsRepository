function Member(name) {
this.name = name;
this.friends = [];
}

var a = new Member("Alice"),
 b = new Member("Bob"),
 c = new Member("Carol"),
 d = new Member("Dieter"),
 e = new Member("Eli"),
 f = new Member("Fatima");
a.friends.push(b);
b.friends.push(c);
c.friends.push(e);
d.friends.push(b);
e.friends.push(d, f);

console.log(a,b,c,d,e);

Member.prototype.inNetwork = function(other) {
var visited = {};
var workset = {};
 workset[this.name] = this;
 console.dir(workset);
for (var name in workset) {

var member = workset[name];
	console.log('start----')
	console.dir(member);
	console.log('end----');
delete workset[name]; // modified while enumerating
if (name in visited) { // don't revisit members
continue;
 }
 visited[name] = member;
if (member === other) { // found?
return true;
 }
 member.friends.forEach(function(friend) {
 workset[friend.name] = friend;
 });
 }
return false;
};

console.log(a.inNetwork(f));



console.log('%c ----------->','color:red');
//---------------
function Dict(elements){
	//allow an potional initial table
	this.elements = elements||{}; //simple object
}

Dict.prototype.has = function(key){
	return {}.hasOwnProperty.call(this.elements,key);
}
Dict.prototype.get = function(key) {
	// body...
	return this.has(key)? this.elements[key]:undefined;
};
Dict.prototype.set = function(key,val){
	this.elements[key]=val;
};
Dict.prototype.remove = function(key){
	delete this.elements[key];
}
//---------------

function WorkSet() {
this.entries = new Dict();
this.count = 0;
}
WorkSet.prototype.isEmpty = function() {
return this.count === 0;
};
WorkSet.prototype.add = function(key, val) {
if (this.entries.has(key)) {
return;
 }
this.entries.set(key, val);
this.count++;
};
WorkSet.prototype.get = function(key) {
return this.entries.get(key);
};
WorkSet.prototype.remove = function(key) {
if (!this.entries.has(key)) {
return;
 }
this.entries.remove(key);
this.count--;
};

Dict.prototype.pick = function() {
for (var key in this.elements) {
if (this.has(key)) {
return key;
 }
 }
throw new Error("empty dictionary");
};
WorkSet.prototype.pick = function() {
return this.entries.pick();
};

Member.prototype.inNetworkA = function(other) {
var visited = {};
var workset = new WorkSet();
 workset.add(this.name, this);
while (!workset.isEmpty()) {
var name = workset.pick();
var member = workset.get(name);
 workset.remove(name);
if (name in visited) { // don't revisit members
continue;
 }
 visited[name] = member;
if (member === other) { // found?
return true;
 }
 member.friends.forEach(function(friend) {
 workset.add(friend.name, friend);
 });
 }
return false;
};
console.log(a.inNetworkA(f));