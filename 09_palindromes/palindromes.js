const palindromes = (string) => {
    let simplify = string.toLowerCase().replace(/[^\w]|_/g, "");
    console.log(simplify);
    let bool = false;
    for(let i = 0, x = simplify.length - 1; i < simplify.length, x > 0; i++, x--) {
            if (simplify[i] === simplify[x]) {
                bool = true;
            } else {
                bool = false;
            }
        }
    return bool;
}

// Do not edit below this line
module.exports = palindromes;
