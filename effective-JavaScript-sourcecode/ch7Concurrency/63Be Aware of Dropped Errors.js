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

var text = downloadSync("127.0.0.1"
    , showErrorMessage,"myerror message:");

console.log('%c \ntext='+text,'color:green');
