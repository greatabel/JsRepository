console.log('http://www.yusufaytas.com/dependency-injection-in-javascript/');

var Injector={

	dependencies:{},
	add: function(qualifier,obj){
		this.dependencies[qualifier]=obj;
	}	,
	get: function(func){
		var obj = new func;
		var dependencies=this.resolveDependencies(func);
		func.apply(obj,dependencies);
		return obj;
	},
	resolveDependencies: function(func){
		var args = this.getArguments(func);
		var dependencies=[];
		for(var i=0;i< args.length;i++){
			dependencies.push(this.dependencies[args[i]]);
		}
		return dependencies;
	},
	getArguments: function(func){
		//This regex is from require.js
      var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
      var args = func.toString().match(FN_ARGS)[1].split(',');
      return args;
	}

}


//调用部分

var Logger={
	log:function(log){}
};

var SimpleLogger = function(){};
var FancyLogger=function(){};

SimpleLogger.prototype = Object.create(Logger);

FancyLogger.prototype = Object.create(Logger);

SimpleLogger.prototype.log = function(log){
	console.log('in SimpleLogger.prototype.log='+log);
}

FancyLogger.prototype.log = function(log){
	var now = new Date();
	console.log(now.toString("dd/MM/yyyy HH:mm:ss ffff")+" : "+log);
}

var ItemCotroller = function(logger){
	this.logger= logger;
}
ItemCotroller.prototype.add = function(item){
	this.logger.log("Item["+item.id+"] is added");
};

Injector.add("logger", new FancyLogger());
var ItemCotroller=Injector.get(ItemCotroller);
ItemCotroller.add({id:5});
