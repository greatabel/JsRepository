console.log('%c ----- ch4 is beginning','color:pink');
function Person() {
    // intentionally empty
}

// var person1 = new Person();
// var person2 = new Person();

//when no para to constructor , you can omit ()
var person1 = new Person;
var person2 = new Person;
console.log(person1 instanceof Person);     
console.log(person2 instanceof Person);    