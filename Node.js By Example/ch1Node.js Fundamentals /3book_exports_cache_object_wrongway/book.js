var ratePoints = 0;

exports.rate = function(points) {
    ratePoints = points;
}

exports.getPoints = function(points) {
    return ratePoints;
}
