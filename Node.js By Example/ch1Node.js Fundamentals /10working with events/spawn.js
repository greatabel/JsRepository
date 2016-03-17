/* 
http://stackoverflow.com/questions/33487617/nodejs-child-process-spawn-handle-process-input-prompt
*/
var spawn = require('child_process').spawn;
var command = spawn('git', ['push','origin','master']);
command.stdout.on('data', function(data){
    console.log('stdout:' + data);
});

command.stderr.on('data', function(data) {
    console.log('sterr:' + data);
});

command.on('close', function(code) {
    console.log('child_process exited with code ' + code);
});

command.stderr.pipe(process.stderr);
command.stdout.pipe(process.stdout);