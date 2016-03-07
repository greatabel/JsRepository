var book = require('./book.js');
console.log('Name: ' + book.name);
book.read()

// wanchangdeMacBook-Pro:ch1Node.js Fundamentals  wanchang$ iojs 1book_exports_wrongway/script.js 
// Name: 
// /Users/wanchang/Downloads/AbelProject/JsRepository/Node.js By Example/ch1Node.js Fundamentals /1book_exports_wrongway/script.js:3
// book.read()
//      ^
// TypeError: book.read is not a function
//     at Object.<anonymous> (/Users/wanchang/Downloads/AbelProject/JsRepository/Node.js By Example/ch1Node.js Fundamentals /1book_exports_wrongway/script.js:3:6)
//     at Module._compile (module.js:430:26)
//     at Object.Module._extensions..js (module.js:448:10)
//     at Module.load (module.js:355:32)
//     at Function.Module._load (module.js:310:12)
//     at Function.Module.runMain (module.js:471:10)
//     at startup (node.js:117:18)
//     at node.js:948:3