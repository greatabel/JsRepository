function hash(password){
	/* 我临时乱写个*/
	if(password=="sfalken"){
		return "0ef33ae791068ec64b502d6cb0191387";
	}else{
		return "123";
	}
}

function User(name, passwordHash) {
this.toString = function() {
return "[User " + name + "]";
 };
this.checkPassword = function(password) {
return hash(password) === passwordHash;
 };
}
var u1 = new User('abel1','123');
console.log(u1.toString());
console.log(u1.checkPassword('123t'));

var u2 = new User('abel2','1231');
console.log(u2.toString());
console.log(u2.checkPassword('123t'));

