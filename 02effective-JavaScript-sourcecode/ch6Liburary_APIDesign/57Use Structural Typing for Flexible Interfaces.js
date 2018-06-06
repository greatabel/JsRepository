console.log('http://stackoverflow.com/questions/12762550/example-of-javascript-duck-typing');

function OceanAnimal(){
	this.swim = function(n){
		var r1="I am "+this.name +", the"+this.type+
		", and I just swam "+ n +" meters.";
		return r1;
	};
}

function LandAnimal() {
    this.walk = function (n) {
    	var r2="I am " + this.name + ", the " + this.type +
               ", and I just walked " + n + " meters.";
        return r2;
    };
}

Turtle.prototype.type= "turtle";

function Turtle(name){
	this.name= name;
	LandAnimal.call(this);
	OceanAnimal.call(this);
}


Lion.prototype.type = "lion";

function Lion(name) {
    this.name = name;
    LandAnimal.call(this);
}

Dolphin.prototype.type = "dolphin";

function Dolphin(name) {
    this.name = name;
    OceanAnimal.call(this);
}

console.log("Now that we have created all the constructors let's create a turtle, a lion and a dolphin:");
var yoyo = new Turtle("Yoyo");
var simba = new Lion("Simba");
var dolphy = new Dolphin("Dolphy");

console.log(yoyo.walk(10));
console.log(yoyo.swim(30));   // turtles are faster in the water
console.log(simba.walk(20));
console.log(dolphy.swim(20));

console.log(yoyo instanceof OceanAnimal);
console.log(yoyo instanceof LandAnimal);
console.log(simba instanceof LandAnimal);
console.log(simba instanceof OceanAnimal);

function isOceanAnimal(object) {
    if (typeof object !== "object") return false;
    if (typeof object.swim !== "function") return false;
    return true;
}

function isLandAnimal(object) {
    if (typeof object !== "object") return false;
    if (typeof object.walk !== "function") return false;
    return true;
}
console.log('%c --- our own test','color:red');
console.log( isOceanAnimal( yoyo) );
console.log(isLandAnimal( yoyo) );
console.log( isOceanAnimal( simba) );
console.log(isLandAnimal( simba) );


console.log('http://stackoverflow.com/questions/3379529/duck-typing-in-javascript');
var duck = {  
    appearance: "feathers",  
    quack: function duck_quack(what) {  
        console.log(what + " quack-quack!");  
    },  
    color: "black"  
};

var someAnimal = {  
    appearance: "feathers",  
    quack: function animal_quack(what) {  
        console.log(what + " whoof-whoof!");  
    },  
    eyes: "yellow"  
};  

function check(who) {  
    if ((who.appearance == "feathers") && (typeof who.quack == "function")) {  
        who.quack("I look like a duck!\n");  
        return true;  
    }  
    return false;  
}  
duck.quack('realduck');
someAnimal.quack('someAnimal');
console.log(check(duck));  
console.log(check(someAnimal));  



