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

function show(){
    var showStr =lowercaseName+" # "+firstLetter+" # "+middleOfName;
    showStr +=" @ " +fixedCount+" @ "+hexCount + " @ "+stringFlag;
	document.getElementById("content").innerHTML = showStr;
}






