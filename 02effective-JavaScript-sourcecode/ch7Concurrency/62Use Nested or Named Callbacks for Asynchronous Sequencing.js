console.log('%c 62---------->\n','color:cyan');

function downloadSyncA(sURL,fCallback)
{
    var oReq = new XMLHttpRequest();
  oReq.callback = fCallback;
  oReq.arguments = Array.prototype.slice.call(arguments, 2);
  oReq.onload = xhrSuccess;
  oReq.onerror = xhrError;
  oReq.open("get", sURL, true);
  oReq.send(null);
}
function xhrSuccess () { this.callback.apply(this, this.arguments); }

function xhrError () { console.error(this.statusText); }
function showMessage (sMsg) {
  console.log(sMsg +"%c @@@"+ this.responseText,'background:yellow');
}


var downloadURL="file:///D:/AbelReading/2014/Effective.JavaScript/Exercise/ch7Concurrency/file.txt";
function lookAsync(sURL,fCallback){
	    var oReq = new XMLHttpRequest();
  oReq.callback = fCallback;
  oReq.arguments = Array.prototype.slice.call(arguments, 2);
  oReq.onload = xhrSuccess;
  oReq.onerror = xhrError;
  oReq.open("get", sURL, true);
  oReq.send(null);
}


//客户端代码
lookAsync(downloadURL,function(url){
	console.log('%c looking1! ','background:pink');

	downloadSyncA(downloadURL,  showMessage,"62 new message");

});

console.log("%c starting3",'color:red');

