var exec = require('child_process').exec;

exec('ls -l', function(error, stdout, stderr) {
    if (stdout !== null ) {
        console.log('#stdout:' + stdout);
    }
    if (stderr !== null && stderr !== "") {
        console.log('#stderr:' + stderr);
    }
    if (error !== null ) {
        console.log('#exec error:' + error);
    }
});