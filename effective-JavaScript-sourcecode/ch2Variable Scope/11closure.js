function makeSandwich(){

	var magicIngredient = "pea";
	function make(filling){
		return magicIngredient+" and "+filling;
	}
	return make("jelly");
}

console.log(makeSandwich());

function sandwichMaker(){
	var magicIngredient = "test butter";
	function make(filling){
		return magicIngredient+" &and& "+filling;
	}
	return make;
}
var f= sandwichMaker();
console.log(f("apple"));
console.log(f("banana"));
console.log(f("marshmallows"));

var line='';
for(var i=0;i<20;i++){
  line+='#';
}
console.log('\n'+line);

function sandwichMaker(magicIngredient) {

function make(filling) {
	var result=magicIngredient + " and " + filling;
	console.log(result)
return result;
 						}

return make;
}
var hamAnd = sandwichMaker("ham");
hamAnd("cheese"); // "ham and cheese"
hamAnd("mustard"); // "ham and mustard"
var turkeyAnd = sandwichMaker("turkey");
turkeyAnd("Swiss"); // "turkey and Swiss"
turkeyAnd("Provolone"); // "turkey and Provolone"

for(var i=0;i<20;i++){
  line+='#';
}
console.log('\n'+line);

function box() {
var val = undefined;
return {
 set: function(newVal) { val = newVal; },
 get: function() { return val; },
 type: function() { return typeof val; }
 };
}
var b = box();
b.type(); // "undefined"
b.set(98.6);
console.log(b.get()); // 98.6
console.log(b.type()); // "number"