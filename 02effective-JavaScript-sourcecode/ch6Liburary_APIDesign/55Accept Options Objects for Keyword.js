function Alert(parent, message, opts) {
 opts = opts || {}; // default to an empty options object
this.width = opts.width === undefined ? 320 : opts.width;
this.height = opts.height === undefined
 ? 240
 : opts.height;
this.x = opts.x === undefined
 ? (parent.width / 2) - (this.width / 2)
 : opts.x;
this.y = opts.y === undefined
 ? (parent.height / 2) - (this.height / 2)
 : opts.y;
this.title = opts.title || "Alert";
this.titleColor = opts.titleColor || "gray";
this.bgColor = opts.bgColor || "white";
this.textColor = opts.textColor || "black";
this.icon = opts.icon || "info";
this.modal = !!opts.modal;
this.message = message;
}

// var alert = new Alert(100, 75, 300, 200,
// "Error", message,
// "blue", "white", "black",
// "error", true);

var alert = new Alert({},"mesage1",{
 x: 100, y: 75,
 width: 300, height: 200,
 title: "Error", message: "test message",
 titleColor: "blue", bgColor: "white", textColor: "black",
 icon: "error", modal: true
});

console.dir(alert);
console.log('%c --------------------->','color:red');

function extend(target, source) {
if (source) {
for (var key in source) {
var val = source[key];
if (typeof val !== "undefined") {
 target[key] = val;
 }
 }
 }
return target;
}

function Alert_A(parent, message, opts) {
 opts = extend({
 width: 320,
 height: 240
 });
 opts = extend({
 x: (parent.width / 2) - (opts.width / 2),
 y: (parent.height / 2) - (opts.height / 2),
 title: "Alert",
 titleColor: "gray",
 bgColor: "white",
 textColor: "black",
 icon: "info",
 modal: false
 }, opts); 
this.width = opts.width;
this.height = opts.height;
this.x = opts.x;
this.y = opts.y;
this.title = opts.title;
this.titleColor = opts.titleColor;
this.bgColor = opts.bgColor;
this.textColor = opts.textColor;
this.icon = opts.icon;
this.modal = opts.modal;
}

var alertA = new Alert_A({},"mesage1",{
});

console.dir(alertA);

function Alert_B(parent, message, opts) {
 opts = extend({
 width: 320,
 height: 240
 });
 opts = extend({
 x: (parent.width / 2) - (opts.width / 2),
 y: (parent.height / 2) - (opts.height / 2),
 title: "Alert",
 titleColor: "gray",
 bgColor: "white",
 textColor: "black",
 icon: "info",
 modal: false
 }, opts);
extend(this, opts);
}
console.log('------->');
var alertB = new Alert_B({width: 1000, height: 800},"mesage2",{ 
});

console.dir(alertB);