function show(){
    //修改div的显示内容
	document.getElementById("content").innerHTML = showStr;
}


var color1 = "red";
var color2 = color1;

console.log(color1);
console.log(color2);

color1 = "blue";
console.log(color1);
console.log(color2);

console.log(typeof "Nicholas");
console.log(typeof 10);
console.log(typeof 5.1);
console.log(typeof true);
console.log(typeof undefined);

console.log('In fact, this has been acknowledged as an error '+
	'by TC39, the committee that designs and maintains JavaScript.');
console.log(typeof null);   

var value = null;
console.log(value === null); 

console.log('%c2个等号比较前会强转的，3个的不会，类型不同就算不同','color:red;background:yellow');
console.log("5" == 5); 
console.log("5" === 5);
console.log(undefined == null); 
console.log(undefined === null);

//-----------
console.log('Primitive Methods');
var name = "Nicholas";
var lowercaseName = name.toLowerCase();
var firstLetter = name.charAt(0);
var middleOfName = name.substring(2, 5);

var count = 10;
var fixedCount = count.toFixed(2);
var hexCount = count.toString(16);
var flag = true;
var stringFlag = flag.toString();

var showStr =lowercaseName+" # "+firstLetter+" # "+middleOfName;
    showStr +=" @ " +fixedCount+" @ "+hexCount + " @ "+stringFlag;




console.log('----Reference Types');
var object1 = new Object();
var object2 = object1;
object1.myCustomProperty = "Awesome!";
console.log(object2.myCustomProperty);     

console.log('实例化内建的引用类型：');
var items = new Array();
var now = new Date();
var error = new Error("Something bad happened.");
var func = new Function("console.log('Hi');");
var object = new Object();
var re = new RegExp("\\d+");

showStr +="<br/>"+now.toString()+" * "+error.toString();

var book = {
    "name": "The Principles of Object-Oriented JavaScript",
    "year": 2014
};

var bookA = new Object();
        bookA.name = "The Principles of Object-Oriented JavaScript";
        bookA.year = 2014;

console.log('%c 2 way to create object is equivalent','color:pink');
console.dir(book);

console.dir(bookA);













