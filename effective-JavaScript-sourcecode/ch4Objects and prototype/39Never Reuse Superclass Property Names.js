function Scene(context, width, height, images) {
this.context = context;
this.width = width;
this.height = height;
// this.images = images;
this.actors = [];
}
Scene.prototype.register = function(actor) {
this.actors.push(actor);
};
Scene.prototype.unregister = function(actor) {
var i = this.actors.indexOf(actor);
if (i >= 0) {
this.actors.splice(i, 1);
 }
};
Scene.prototype.draw = function() {
this.context.clearRect(0, 0, this.width, this.height);
for (var a = this.actors, i = 0, n = a.length;
 i < n;
 i++) {
 a[i].draw();
 }
};

//---------------------------

function Actor(scene, x, y) {
this.scene = scene;
this.x = x;
this.y = y;
console.log(x+'Actor.nextID='+Actor.nextID);
this.id = ++Actor.nextID;
 scene.register(this);
}
Actor.nextID = 0;

function Alien(scene, x, y, direction, speed, strength) {
 Actor.call(this, scene, x, y);
this.direction = direction;
this.speed = speed;
this.strength = strength;
this.damage = 0;
console.log(x+'Alien.nextID='+Alien.nextID);
this.id = ++Alien.nextID; // conflicts with actor id!
}
Alien.nextID = 0;


var scene_Instance= new Scene('test',1024,768,10);
console.log(scene_Instance);

var myactor=new Actor(scene_Instance,1,2);
console.log(myactor.id);
var myalien= new Alien(scene_Instance,2,1,1,1,1);
console.log(myalien.id);
var myactorA=new Actor(scene_Instance,3,22);
console.log(myactorA.id);
var myalienA= new Alien(scene_Instance,4,12,13,13,13);
console.log(myalienA.id);

var myactorB=new Actor(scene_Instance,5,2);
console.log(myactorB.id);
console.log(this.id);

console.dir(myactor);
console.dir(myalien);
console.dir(myactorA);
console.dir(myalienA);


console.log('%c solution:------------------>','color:red');
function ActorRight(scene, x, y) {
this.scene = scene;
this.x = x;
this.y = y;
this.actorID = ++ActorRight.nextID; // distinct from alienID
 scene.register(this);
}
ActorRight.nextID = 0;
function AlienRight(scene, x, y, direction, speed, strength) {
 ActorRight.call(this, scene, x, y);
this.direction = direction;
this.speed = speed;
this.strength = strength;
this.damage = 0;
this.alienID = ++AlienRight.nextID; // distinct from actorID
}
AlienRight.nextID = 0;
var myactorR=new ActorRight(scene_Instance,1,2);
console.log(myactorR.actorID);
var myalienR= new AlienRight(scene_Instance,2,1,1,1,1);
console.log(myalienR.alienID);
var myactorAR=new ActorRight(scene_Instance,3,22);
console.log(myactorAR.actorID);
var myalienAR= new AlienRight(scene_Instance,4,12,13,13,13);
console.log(myalienAR.alienID);
var myactorBR=new ActorRight(scene_Instance,5,2);
console.log(myactorBR.actorID);

console.log('%c -----------#########');
var index=0;
function Parent( a ) {
    this.a = a;
     index++;
     this.id=index;
}

Parent.prototype.func1 = function () {
	console.log('func1 is here');
};

function Child( a, b ) {
	console.log('in Child');
    Parent.call( this, a );
    this.b = b;
    index++;
     this.id=index;
}

Child.prototype = Object.create( Parent.prototype );
Child.prototype.constructor = Child;

Child.prototype.func2 = function () {};

var p, c;
p = new Parent( 1 );
console.dir( p );
c = new Child( 2, 3 );
console.dir( c );
t=new Parent(4);
console.dir( t );