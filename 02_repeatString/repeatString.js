const repeatString = function(string, number) {
    let repeatedString = string;
    if (number === 0) {
        return '';
    } else if (number < 0) {
        return 'ERROR'
    } else {
        for (let i = 1; i < number; i++) {
            repeatedString += string;
        }
        return repeatedString;
    }
};
console.log(repeatString('', 500))
// Do not edit below this line
module.exports = repeatString;