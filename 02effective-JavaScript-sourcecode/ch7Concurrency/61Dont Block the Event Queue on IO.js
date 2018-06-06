function downloadSync(sURL,fCallback)
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
  console.log(sMsg +"###"+ this.responseText);
}
var text = downloadSync("file:///D:/AbelReading/2014/Effective.JavaScript/Exercise/ch7Concurrency/file.txt"
    , showMessage,"new message");
console.log('%c \ntext='+text,'color:green');
