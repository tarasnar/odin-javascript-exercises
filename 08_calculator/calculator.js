const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const sum = function(array) {
    let sum = 0;
	for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }

    return sum;
};

const multiply = function(...args) {
  let sum = args[0];
  for(let i = 1; i < args.length; i++) {
    sum *= args[i];
  }

  return sum;
};

const power = (num1, num2) => num1 ** num2;

const factorial = function(num) {
  let sum = num;
  if (sum !== 0) {
    for (let i = 1; i < num; num--) {
      sum *= num - 1;
    }
  } else {
    sum += 1
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
