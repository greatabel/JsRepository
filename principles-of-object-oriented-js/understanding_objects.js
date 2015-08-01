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

var person1 = {};
Object.defineProperty(person1, "name", {
    value: "Nicholas"
});
console.log("name" in person1);
console.log(person1.propertyIsEnumerable("name"));
delete person1.name;
console.log("name" in person1);
person1.name = "Greg";
console.log(person1.name);

var person1 = {
            name: "Nicholas"
};

// which is equal to following:
 var person1 = {};
 Object.defineProperty(person1, "name", {
            value: "Nicholas",
            enumerable: true,
            configurable: true,
            writable: true
 });
 console.log('the following code creates a name property that is nonenumerable, nonconfigurable, and nonwritable');
var person1 = {};
Object.defineProperty(person1, "name", {
    value: "Nicholas"
});
console.log("name" in person1);
console.log(person1.propertyIsEnumerable("name"));
delete person1.name;
console.log("name" in person1);
person1.name = "Greg";
console.log(person1.name);

//Defining Multiple Properties
var person1 = {};
Object.defineProperties(person1, {

 _name: {
           value: "Nicholas",
           enumerable: true,
           configurable: true,
           writable: true
},
// accessor property 
name: {
           get: function() {
               console.log("Reading name");
               return this._name;
           },
           set: function(value) {
               console.log("Setting name to %s", value);
               this._name = value;
           },
           enumerable: true,
           configurable: true
       }
});

console.log(person1.name);

//Retrieving Property Attributes

console.log('--- preventing Extensions');
 var person1 = {
       name: "Nicholas"
   };
var descriptor = Object.getOwnPropertyDescriptor(person1, "name");
console.log(descriptor.enumerable);
console.log(descriptor.configurable);
console.log(descriptor.writable);
console.log(descriptor.value);


var person1 = {
       name: "Nicholas"
};
console.log(Object.isExtensible(person1));
Object.preventExtensions(person1); 
console.log(Object.isExtensible(person1));
person1.sayName = function() { 
	console.log(this.name);

};
console.log("sayName" in person1);


console.log('--- sealing objects');
var person2 ={
	name : "testname"
};

console.log(Object.isExtensible(person2));

console.log(Object.isSealed(person2));

Object.seal(person2);
console.log(Object.isExtensible(person2));
console.log(Object.isSealed(person2));

person2.sayName = function() { 
	console.log(this.name);
};
console.log("sayName" in person2);

person2.name = "Greg";

console.log(person2.name);

delete person2.name;
console.log("name" in person2);
console.log(person2.name);

var descriptor = Object.getOwnPropertyDescriptor(person2,"name");
console.log(descriptor.configurable);

console.log('----freezing objects');
var person1 = {
       name: "Nicholas"
};
console.log(Object.isExtensible(person1));
console.log(Object.isSealed(person1));
console.log(Object.isFrozen(person1));
Object.freeze(person1); 
console.log('after freezing');
console.log(Object.isExtensible(person1));  
console.log(Object.isSealed(person1));
console.log(Object.isFrozen(person1));

person1.sayName = function() {
    console.log(this.name);
};

console.log("sayName" in person1);
person1.name = "Greg"; 
console.log(person1.name);
delete person1.name;
console.log("name" in person1);
console.log(person1.name);
var descriptor = Object.getOwnPropertyDescriptor(person1, "name");
console.log(descriptor.configurable);           // false
console.log(descriptor.writable);               // false


