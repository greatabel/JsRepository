var util = require('util');

console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray({}));

console.log("date judge:");
console.log(util.isDate(new Date));
//  false (without 'new' returns a String)
console.log(util.isDate(Date()));
console.log({});