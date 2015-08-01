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
// var text = downloadSync("file:///D:/AbelReading/2014/Effective.JavaScript/Exercise/ch7Concurrency/file1.txt"
//     , showErrorMessage,"myerror message:");

function downloadOneSync(urls) {
  console.log('@'+urls.length);
for (var i = 0, n = urls.length; i < n; i++) {
try {
 downloadSync(urls[i],function(){console.log(i+':here->'+this.responseText)});
 } catch (e) {
 throw new Error("all downloads failed");
  }
 }

}

downloadOneSync(["file:///D:/AbelReading/2014/Effective.JavaScript/Exercise/ch7Concurrency/file.txt"
  ,"file:///D:/AbelReading/2014/Effective.JavaScript/Exercise/ch7Concurrency/fileA.txt"]);

console.log('%c ------------','background:yellow');
function downloadOneAsync(urls, onfailure) {
var n = urls.length;
function tryNextURL(i) {
   console.log('%c i in tryNextURL:'+i,'color:red');
if (i >= n) { 
onfailure("all downloads failed");
return;
 }
downloadSync(urls[i],  function() {
  console.log('new::'+this.responseText);
tryNextURL(i + 1);
 });
 }
tryNextURL(0);
}

downloadOneAsync(["","file:///D:/AbelReading/2014/Effective.JavaScript/Exercise/ch7Concurrency/file.txt"
  ,"file:///D:/AbelReading/2014/Effective.JavaScript/Exercise/ch7Concurrency/fileA.txt"],
 null);