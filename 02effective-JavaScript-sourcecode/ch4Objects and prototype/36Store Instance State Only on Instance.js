// function Tree(x) {
// this.value = x;
// } 
// Tree.prototype = {
//  children: [], // should be instance state!
//  addChild: function(x) {
//  	if ((x instanceof Tree)){
//  		console.log('x');
// this.children.push(x.value);
//  	}else{
//  		console.log('here');
// this.children.push(x);
//  	}

//  }
// };

function Tree(x) {
this.value = x;
}

Tree.prototype = {
 children: [], // should be instance state!
 addChild: function(x) {
this.children.push(x);
 }
};

var left = new Tree(2);
left.addChild(1);
left.addChild(3);
var right = new Tree(6);
right.addChild(5);
right.addChild(7);
var topA = new Tree(4);
topA.addChild(left);
topA.addChild(right);
console.log(topA.children);
console.log(left.children);

console.log('right way:');
function TreeA(x) {
this.value = x;
this.children = []; // instance state
}
TreeA.prototype = {
 addChild: function(x) {
this.children.push(x);
 }
};
var left = new TreeA(2);
left.addChild(1);
left.addChild(3);
var right = new TreeA(6);
right.addChild(5);
right.addChild(7);
var topA = new TreeA(4);
topA.addChild(left);
topA.addChild(right);
console.log(topA.children);
console.log(left.children);