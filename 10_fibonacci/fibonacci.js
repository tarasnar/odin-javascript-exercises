const fibonacci = function(position) {
    let toNumber = +position;
    let startSequence = [1, 1];

    if(toNumber <= 0) return "OOPS";
    for (let i = 0; i < toNumber; i++) {
        startSequence.push(startSequence[i] + startSequence[i+1]);
    }

    return startSequence[toNumber - 1];
};

// Do not edit below this line
module.exports = fibonacci;