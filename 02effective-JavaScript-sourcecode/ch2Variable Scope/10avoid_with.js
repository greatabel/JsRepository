console.log('avoid with:-------:\n http://www.neoease.com/javascript-with-statement/');
function status(info) {
var widget = new Widget();
with (widget) {
setBackground("blue");
setBackground("white");
setText("Status: " + info); // ambiguous reference
show();
 }
}

console.log("right way:")
status("connecting"); // Status: connecting
Widget.prototype.info = "[[widget info]]";
status("connected"); // Status: connected


function Widget(){
	console.log('widget');
}
function setBackground(color){
	this.color=color;
}
function setText(text){
	this.text = text;
}
function show(){
	console.log('in show:'+this.color+"\n"+this.text);
}

var root = {
	branch:{ node:1}
};
 //在 with 语句内部通过内部变量修改数
with(root.branch){
	node=2;
	console.log(node);
}

console.log('root.branch.node='+root.branch.node);

//2. 在 with 语句内部通过对象节点修改数值
with(root.branch) {
	root.branch.node = 3;
	// 显示 0, 正确!
	console.log(node);
}
console.log('1 root.branch.node='+root.branch.node);

console.log('error situation')
with(root.branch) {
	root.branch = {
		node: 4
	};
	// 显示 1, 错误!
	console.log('still old:'+node);
}
// 显示 0, 正确!
console.log('2 root.branch.node='+root.branch.node);

console.log('变通法子:');
var quote = root.branch;
quote.node = 0;
// 显示 0, 正确!
console.log('3 root.branch.node='+root.branch.node);
