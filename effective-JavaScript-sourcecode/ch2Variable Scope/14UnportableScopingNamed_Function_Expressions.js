function double(x){ return x*2; }

console.log('double(10)='+double(10));



var f = function double(x) { return x * 2; };

console.log('f(20)='+f(20));

var f1 = function(x) { return x * 2; };

console.log('f1(210)='+f1(210));

console.log('---------------注意递归函数使用的是f(tree.right,key)而不是find()');
//模拟tree
var tree = {
	key:1,
    value:10 ,
    left:{ key:2,value:20},
    right:{key:3,value:30}
};

var f = function find(tree, key) {
if (!tree) {
return null;
 }
if (tree.key === key) {
return tree.value;
 }
return f(tree.left, key) ||
 f(tree.right, key);
};

console.log(f(tree,2));
console.log('//find(tree, 2);');




var f1 = function(tree, key) {
if (!tree) {
return null;
 }
if (tree.key === key) {
return tree.value;
 }
return f1(tree.left, key) ||
 f1(tree.right, key);
};

console.log(f1(tree,3));




console.log('不过可以这样：');
function findA(tree, key) {
if (!tree) {
return null;
 } 
if (tree.key === key) {
return tree.value;
 }
return find(tree.left, key) ||
find(tree.right, key);
}
var f2 = findA;
console.log(f2(tree,1));

console.log('es5 correct it:')
var constructor = function() { return null; };
var f = function f() {
return constructor();
};
console.log(f()); // {} (in ES3 environments)



var constructor = function() { return 111; };
var f = function() {
return constructor();
};
console.log(f());  // {} (in nonconformant environments)


console.log('better way:')
var f = function g() { return 17; };
var g=null;


