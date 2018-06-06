var a = [1, 2, 3, 4, 5];
console.log('Now, you could use the Array constructor instead:');
var a1 = new Array(1, 2, 3, 4, 5);
console.dir(a1);

function f(Array) {
return new Array(1, 2, 3, 4, 5,6);
}
var r=f(String); // new String(1)
console.dir(r);
Array = String;
console.dir(new Array(1, 2, 3, 4, 5) );
