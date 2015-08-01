console.log("1.0e0" == { valueOf: function() { return true; } });
//模拟form
var form = {
    month:{value:9} ,
    day:{value:24}
};


var today = new Date();
console.log((today.getMonth() + 1));
console.log(today.getDate());
console.log(form.month.value);
if (form.month.value == (today.getMonth() + 1) &&
 form.day.value == today.getDate()) {
// happy birthday!
// ...
 console.log('test A');
}else{
	console.log('test B');
}
console.log('easy to convert values to numbers explicitly using the '+
'Number function or the unary + operator');
var today = new Date();
if (+form.month.value == (today.getMonth() + 1) &&
 +form.day.value == today.getDate()) {
// happy birthday!
 console.log('test A1');
}else{
	console.log('test B1');
}
console.log('An even better alternative is to use the strict '+
'equality operator');
var today = new Date();
if (+form.month.value === (today.getMonth() + 1) && // strict
 +form.day.value === today.getDate()) { // strict
// happy birthday!
 console.log('test A2');
}else{
	console.log('test B2');
}


var date = new Date("1999/12/31");
console.log(date == "1999/12/31"); // false
console.log(null == undefined);
console.log(null=="1");
console.log("will transfer to number:"+("1"==true));
console.log("1999/12/31"==date);
console.log('date.getYear() ='+date.getYear() );
function toYMD(date) {
var y = date.getYear() + 1900, // year is 1900-indexed
 m = date.getMonth() + 1, // month is 0-indexed
 d = date.getDate();
return y
 + "/" + (m < 10 ? "0" + m : m)
 + "/" + (d < 10 ? "0" + d : d);
}
console.log(toYMD(date));
console.log(toYMD(date) === "1999/12/31");
