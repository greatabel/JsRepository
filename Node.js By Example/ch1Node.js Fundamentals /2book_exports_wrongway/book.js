exports.name = 'Node.js by example!';
exports.read = function() {
    console.log('I am reading ' + exports.name);
}

module.exports = function() {
    console.log('test')
}