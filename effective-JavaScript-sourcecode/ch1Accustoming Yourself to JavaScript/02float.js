console.log('typeof 17='+(typeof 17)); // "number"
console.log('typeof 98.6='+(typeof 98.6)); // "number"
console.log('typeof -2.1='+(typeof -2.1)); // "number

console.log('Flags and bitmasks https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators');
var FLAG_A = 1; // 0001
var FLAG_B = 2; // 0010
var FLAG_C = 4; // 0100
var FLAG_D = 8; // 1000
var mask = FLAG_A | FLAG_B | FLAG_D; // 0001 | 0010 | 1000 => 1011
console.log(mask);

var FLAG_WAN=3;
console.log(FLAG_A|FLAG_WAN);

var nMyNumber = 11;
var sBinString = nMyNumber.toString(2);
console.log(sBinString); // prints 1011, i.e. 11
var sBinString = nMyNumber.toString(4);
console.log(sBinString); // prints 1011, i.e. 11


function createMask () {
  var nMask = 0, nFlag = 0, nLen = arguments.length > 32 ? 32 : arguments.length;
  for (nFlag; nFlag < nLen; nMask |= arguments[nFlag] << nFlag++);
  return nMask;
}
var mask1 = createMask(true, true, false, true); // 11, i.e.: 1011
var mask2 = createMask(false, false, true); // 4, i.e.: 0100
var mask3 = createMask(true); // 1, i.e.: 0001
// etc.

console.log('createMask:'+mask1); // prints 11, i.e.: 1011

function arrayFromMask (nMask) {
  // nMask must be between -2147483648 and 2147483647
  if (nMask > 0x7fffffff || nMask < -0x80000000) { 
    throw new TypeError("arrayFromMask - out of range"); 
  }
  for (var nShifted = nMask, aFromMask = []; nShifted; 
       aFromMask.push(Boolean(nShifted & 1)), nShifted >>>= 1);
  console.log('in arrayFromMask:'+aFromMask);	
  return aFromMask;
}

var array1 = arrayFromMask(11);
var array2 = arrayFromMask(4);
var array3 = arrayFromMask(1);

console.log("[" + array1.join(", ") + "]");

console.log('You can test both algorithms at the same time…');
var nTest = 19; // our custom mask
var nResult = createMask.apply(this, arrayFromMask(nTest));

console.log(nResult); // 19


function createBinaryString (nMask) {
  // nMask must be between -2147483648 and 2147483647
  for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
       nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
  return sMask;
}

var string1 = createBinaryString(11);
var string2 = createBinaryString(4);
var string3 = createBinaryString(1);

console.log(string1);
// prints 00000000