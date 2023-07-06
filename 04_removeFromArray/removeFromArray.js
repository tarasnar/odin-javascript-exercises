const removeFromArray = function(array,...args) {
    for (let i = 0; i < array.length; i++) {
        if (args.length > 0) {
            for (let x = 0; x < args.length; x++) {
                if (array[i] === args[x]) {
                    array.splice(i,1);
                    i = 0;
                } else if (array.length <= 0) {
                    break;
                }
            }
        } else {
            break;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
let a = [1,2,3]
console.log(removeFromArray(a,3,2,1));