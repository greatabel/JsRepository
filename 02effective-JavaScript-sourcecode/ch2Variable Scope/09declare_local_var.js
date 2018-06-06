function swap(a, i, j) {
 temp = a[i]; // global
 a[i] = a[j];
 a[j] = temp;
}

console.log('error way:');

var a=[10,1,2,3];
console.log(a);
swap(a,1,2);
console.log(a);
console.log("temp="+temp);

console.log("right way:");
function swapA(a, i, j) {
var tempA = a[i];
 a[i] = a[j];
 a[j] = tempA;
}
swapA(a,1,2);
console.log(a);
console.log("tempA="+tempA);