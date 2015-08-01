function downloadSync(sURL,fCallback)
{



    var oReq = new XMLHttpRequest();
  oReq.callback = fCallback;
  oReq.arguments = Array.prototype.slice.call(arguments, 2);
  oReq.onload = xhrSuccess;
  oReq.onerror = xhrError;
  	try{
  oReq.open("get", sURL, true);
  oReq.send(null);
  }catch(e){
  	this.abelError = e;
	console.dir(e);
	fCallback();
	}
}
function xhrSuccess () { this.callback.apply(this, this.arguments); }

function xhrError () { console.error(this.statusText); }
function showErrorMessage (sMsg) {
  console.log(sMsg +"###"+ this.abelError);
}



function downloadAllAsync(urls, onsuccess, onerror) {
var pending = urls.length;
var result = [];
if (pending === 0) {
setTimeout(onsuccess.bind(null, result), 0);
return;
 }
 urls.forEach(function(url, i) {
 	console.log('i='+i+'url='+url);
downloadSync(url, function(text) {
	console.log('##:here->'+this.responseText);
if (result) {
 result[i] = text; // store at fixed index
 pending--; // register the success
if (pending === 0) {
onsuccess(result);
 }
 }
 }, function(error) {
if (result) {
 result = null;
onerror(error);
 }
 });
 });
}

downloadAllAsync(["file:///D:/AbelReading/2014/Effective.JavaScript/Exercise/ch7Concurrency/file.txt"
  ,"file:///D:/AbelReading/2014/Effective.JavaScript/Exercise/ch7Concurrency/fileA.txt"]
  ,function(){console.log('%c success!!','color:brown')},null);