const sumAll = function(numberOne,numberTwo) {
    let sum;
    if (numberOne < 0 || typeof numberOne !== typeof 0 ||
    numberTwo < 0 || typeof numberTwo !== typeof 0) {
        return "ERROR";
    } else {
        if (numberOne > numberTwo) {
            sum = 0;
            for (let i = numberTwo; i <= numberOne; i++) {
                sum += i;
            }
        } else {
            sum = 0;
            for (let x = numberOne; x <= numberTwo; x++) {
                sum += x;
            }
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;