var spawn = require('child_process').spawn;
var command = spawn('git', ['push', 'origin']);
command.stdout.on('data', function(data){
    console.log('stdout:' + data);
});

command.stderr.on('data', function(data) {
    console.log('sterr:' + data);
});

command.on('close', function(code) {
    console.log('child_process exited with code ' + code);
});