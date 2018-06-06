function escapeBasicHTML(str) {
return str.replace(/&/g, "&amp;")
 .replace(/</g, "&lt;") 
 .replace(/>/g, "&gt;")
 .replace(/"/g, "&quot;")
 .replace(/'/g, "&apos;");
}

console.log(
 escapeBasicHTML("test < test > test ' test")
	);

var mubsisapi = {
        step1   : function(){console.log(" step1"); return this;}, 
        step2   : function(){console.log(" step2"); return this;}
    }

mubsisapi.step1().step2();

var gmap = function() {
    this.add = function() {
        console.log('add');
    return this;
    }

    this.del = function() {
       console.log('delete');
       return this;
    }

    if (this instanceof gmap) {
        return this.gmap;
    } else {
        return new gmap();
    }
}
var test = new gmap();
test.add().del();