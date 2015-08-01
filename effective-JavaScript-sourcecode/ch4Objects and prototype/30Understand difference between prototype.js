function hash(password){
	/* 我临时乱写个*/
	if(password=="sfalken"){
		return "0ef33ae791068ec64b502d6cb0191387";
	}else{
		return "123";
	}
}

function User(name, passwordHash) {
this.name = name;
this.passwordHash = passwordHash;
}
User.prototype.toString = function() {
return "[User " + this.name + "]";
};
User.prototype.checkPassword = function(password) {
return hash(password) === this.passwordHash;
};
var u = new User("sfalken",
"0ef33ae791068ec64b502d6cb0191387");

console.log(u.toString());
console.log(u.checkPassword('sfalken'));
console.log(u.checkPassword('sfalken1')+"\n");

console.log('%c Object.getPrototypeOf(u) === User.prototype :',"color:red");
console.log(Object.getPrototypeOf(u) === User.prototype);
console.log('u.__proto__ === User.prototype :'+(u.__proto__ === User.prototype).toString());