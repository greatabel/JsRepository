console.log('%c bind',	'background:red');
var overflow='http://stackoverflow.com/questions/2236747/bind-method-of-javascript';
console.log(overflow);

var Button=function(content){
	this.content=content;
}
Button.prototype.click= function(){
	console.log(this.content+' clicked');
}
var myButton=new Button('OK');
myButton.click();

var looseClick=myButton.click;
looseClick();

var boundClick = myButton.click.bind(myButton);
boundClick();

console.log('%c----------','color:red');
function getMontlhlyFee(fee){
  var remaining = this.total - fee;
  this.total = remaining;
  var result=this.name +' remaining balance:'+remaining;
  console.log(result);
  return result;
}

var rachel = {name:'Rachel Green', total:500};
var getRachelFee = getMontlhlyFee.bind(rachel, 90);
//deduct
getRachelFee();//Rachel Green remaining balance:410
getRachelFee();//Rachel Green remaining balance:320

var ross = {name:'Ross Geller', total:250};
//bind
var getRossFee = getMontlhlyFee.bind(ross, 25);
//deduct
getRossFee(); //Ross Geller remaining balance:225
getRossFee(); //Ross Geller remaining balance:200

console.log('%c 科里化 http://netwjx.github.io/blog/2012/12/05/function-currying-in-javascript-and-scala/',
	'background:red');
function filter(list,func){
	var ret=[];
	for(var i=0;i<list.length;i++){
		var v=list[i];
		if(func(v)){
			ret.push(v);
		}
	}
	return ret;
}


function modN(n,x){
	return x%n===0;
}

var nums  =[1,2,3,4,5,6,7,8];

console.log(filter(nums,function(x){
	return modN(2,x);
}));

console.log(filter(nums,function(x){
	return modN(3,x);
}));

console.log(filter(nums,function(x){
	return modN(4,x);
}));

console.log('modN函数有2个参数, 示例中可以同时提供所有的参数, '+
	'当然这是相当理想的情况. 实际可能不同的参数在不同的阶段提供');
var p = [2];  // 提供相关参数
console.log(filter(nums, function(x) {
    p[1] = x;
    return modN.apply(this, p);
}));

p[0] = 3;  // 提供相关参数
console.log(filter(nums, function(x) {
    p[1] = x
    return modN.apply(this, p);
}));

console.log('这种方式需要有一个变量用来保存参数, 而如果使用Currying可以这样:');
Function.prototype.curry = function() {
    var func = this,
        p = Array.prototype.slice.call(arguments, 0);
    return function() {
        return func.apply(this, p.concat.apply(p, arguments));
    };
};

console.log(filter(nums, modN.curry(2)));
console.log(filter(nums, modN.curry(3)));

console.log('%c 科里化end 开始讨论,26->\nUse bind to Curry Functions The bind method of functions is useful for more ',
	'background:red');
console.log('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map');

function simpleURL(protocol ,domain,path){
	return protocol+"://"+domain+"/"+path;
}
console.log(simpleURL('https','www.31huiyi.com','eventlist'));

var siteDomain="www.31huiyi.com";
var paths=['eventlist','2014/companylist.aspx','company/suppliersearch/'];
var urls = paths.map(function(path){
	return simpleURL("http",siteDomain,path);
})
console.log(urls);

console.log('哈哈我改进：');
function testFunc(myparameter){
	return simpleURL("https",siteDomain,myparameter);
}
var urls_A = paths.map(testFunc);

console.log(urls_A);
console.log('end哈哈我改进!');

console.log('use bind to curry function:');
var urls_New= paths.map(simpleURL.bind(null,"https",siteDomain));
console.log(urls_New);