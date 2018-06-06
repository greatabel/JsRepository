console.log('<-- 34Store Methods on Prototypes -->');
function UserD(name, passwordHash) {
this.name = name;
this.passwordHash = passwordHash;
this.toString = function() {
return "[UserD " + this.name + "]";
 };
this.checkPassword = function(password) {
return hash(password) === this.passwordHash;
 };
}

var u1 = new UserD('abel1','test');
var u2 = new UserD('abel2','test');
var u3 = new UserD('abel3','test');
console.log(u1.toString());
console.log(u2.toString());
console.log(u3.toString());

console.log('关于this.name值问题');
this.name='name problem';
console.log(this.name);
var u4=UserD('abel4','test');
console.log(this.name);