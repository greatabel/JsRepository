console.log('%c -----ch3 is starting ------','color:blue');
var person1 = {
            name: "Nicholas"
        };
var person2 = new Object();
person2.name = "Nicholas"; 
person1.age = "Redacted";
person2.age = "Redacted"; 
person1.name = "Greg";
person2.name = "Michael";

console.log("name" in person1);
console.log("age" in person1);
console.log("title" in person1);

var person1 = {
    name: "Nicholas",
    sayName: function() {
        console.log(this.name);
    }
};
console.log("sayName" in person1);  // true

//check its own property
console.log('check its own property');
console.log("name" in person1);
console.log(person1.hasOwnProperty("name"));
console.log(person1.hasOwnProperty("sayName"));
console.log("toString" in person1);
console.log(person1.hasOwnProperty("toString"));
// true
// true
// true
// false