console.log('%c ##### ch6 object patterns #####','color:brown');
 var yourObject = (function() {
            // private data variables
            return {
                // public methods and properties
}; 

}());

var person = (

	function() { 
	 var age = 25;

    return {
        name: "Nicholas in pattern",
        getAge: function() {
            return age;
},
        growOlder: function() {
            age++;
} 
};

}());

console.log(person.name);
