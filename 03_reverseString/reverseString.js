const reverseString = function(string) {
    const word = [];
    for (i = 0; i < string.length; i++) {
        word.unshift(string[i]);
    }
    return word.toString().replaceAll(',', '');
};
console.log(reverseString('popa pisya pisya popa'))
// Do not edit below this line
module.exports = reverseString;
