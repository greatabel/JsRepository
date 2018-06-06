function averageOfArray(a) {
for (var i = 0, sum = 0, n = a.length; i < n; i++) {
 sum += a[i];
 }
return sum / n;
}
var r=averageOfArray([2, 7, 1, 8, 2, 8, 1, 8]); // 4.625
console.log(r);

function average() {
for (var i = 0, sum = 0, n = arguments.length;
 i < n;
 i++) {
 sum += arguments[i];
 }
return sum / n;
}
var r1=average(1,2,3,4);
console.log(r1);

console.log('代码封装角度可以这样：');
function averageA() {
return averageOfArray(arguments);
}

console.log(averageA(10,20,30,40));