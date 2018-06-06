console.log('%c http://stackoverflow.com/questions/2107556/how-to-inherit-from-a-class-in-javascript',
	'color:brown');


console.log('http://stackoverflow.com/questions/2190850/create-a-custom-callback-in-javascript');
console.log('怎么回调:');
function doSomething(callback,x,y,z){
	//调用回调的函数
	callback(x,y,z);
}

function IamBeingCalled(a,b,c){
	console.log(a+"<#said#:>"+b+" & "+c);
}

doSomething(IamBeingCalled,'hello the world','abel test it','haha');

var obj={ temporary:10};
var ff=function test(a,b,c){
	console.log('ff:'+a+b+c);
}
//就算obj.temporay存在也是会被替换
obj.temporary = ff;
var arg1='test1',arg2='test2',arg3='arg3 is me';
var result = obj.temporary(arg1,arg2,arg3);
delete obj.temporary;
console.log(obj.temporary);

console.log('%c 还好js有 默认的call method 来提供接收器: call(obj,arg1,arg2,arg3)','color:blue');
var dict = [
    { title: "Name", width: "10%" },
    { title: "Phone", width: "10%" },
    { title: "Address", width: "50%" },
    { title: "Zip", width: "10%" },
    { title: "Comments", width: "20%" }
];
console.log(dict);
for (var i = 0; i < dict.length; i += 1) {
    console.log( dict[i].title );
    // myMappings[i].width ...
}
dict.hasOwnProperty=1;
// dict.hasOwnProperty('foo');
console.log('使用call 方法');
var hasOwnProperty = {}.hasOwnProperty;
dict.foo = 1;
delete dict.hasOwnProperty;
console.log(hasOwnProperty.call(dict, "foo")); // true
console.log(hasOwnProperty.call(dict, "hasOwnProperty")); // false



var table = {
 entries: [],
 addEntry: function(key, value) {
this.entries.push({ key: key, value: value });
console.log('in addEntry:');
 },
 forEach: function(f, thisArg) {
	var entries = this.entries;

	for (var i = 0, n = entries.length; i < n; i++) {
		var entry = entries[i];
		 f.call(thisArg, entry.key, entry.value, i);
		    console.log('in forEach:'+thisArg+'#'+entry.key+"#"+entry.value);
		 }
 }

};

var table1 = Object.create(table);
console.log('@@');
console.log(table1.entries.length);
table1.addEntry(1,10);
console.log(table1.entries.length);
table1.addEntry(2,20);
console.log('@@');
console.log('before table2 create:'+table1.entries.length);
var table2=Object.create(table);
// table2.addEntry(2,20);
console.log('after table2 create:'+table1.entries.length);
console.log('#####--->');
table1.forEach(table2.addEntry, table2);
console.log('after table1.foreach:'+table1.entries.length);
console.table(table1);
console.log(table2.entries.length);
console.table(table2);
table2.addEntry(3,30);
console.table(table1);
console.log('说明是table1，table2是公用entries');