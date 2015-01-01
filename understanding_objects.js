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

delete person1.name;
console.log('after delete:'+("name" in person1));
console.log(person1.name);

console.log('\n');

var property;
        for (property in person2) {
            console.log("Name: " + property);
            console.log("Value: " + person2[property]);
}
console.log('%c a list of an objects\'s property','color:pink');
var object = person2;
var properties = Object.keys(object); // if you want to mimic for-in behavior
var i, len;
        for (i=0, len=properties.length; i < len; i++){
            console.log("Name: " + properties[i]);
            console.log("Value: " + object[properties[i]]);
}


var person1 = {
_name: "Nicholas",
get name() { console.log("Reading name");
                return this._name;
            },
set name(value) {
console.log("Setting name to %s", value);
        this._name = value;
    }
};
console.log(person1.name);
person1.name = "Greg";
console.log(person1.name);

var person1 = {
 name: "Nicholas"
};
Object.defineProperty(person1, "name", { 
 enumerable: false
   });
   console.log("name" in person1);
console.log(person1.propertyIsEnumerable("name")); 
var properties = Object.keys(person1);
   console.log(properties.length);
Object.defineProperty(person1, "name", { 
 configurable: false
});
   // try to delete the Property
delete person1.name; 
console.log("name" in person1);
   console.log(person1.name);
 //following will be error
// Object.defineProperty(person1, "name", 
// 	{ configurable: true
// });

   var person1 = {
            name: "Nicholas"
};
//等价于：
var person1 = {};
        Object.defineProperty(person1, "name", {
            value: "Nicholas",
            enumerable: true,
            configurable: true,
            writable: true
        });


Object.defineProperty(person1, "name", {
    value: "Nicholas"
});
console.log("name" in person1);
console.log(person1.propertyIsEnumerable("name"));
delete person1.name;
console.log("name" in person1);
person1.name = "Greg";
console.log(person1.name);





