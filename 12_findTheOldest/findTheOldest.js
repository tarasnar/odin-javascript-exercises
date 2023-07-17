const findTheOldest = function(array) {
    let oldest = array.sort((person1, person2) => {
        for (let i = 0; i < array.length; i++) {
            if(array[0].yearOfDeath === undefined) {
                array[0].yearOfDeath = (new Date()).getFullYear();
            }
        }

        if(person1.yearOfDeath - person1.yearOfBirth >
            person2.yearOfDeath - person2.yearOfBirth) {
            return -1;
        } else {
            return 1;
        }
    });

    return oldest[0];
};

const people = [
    {
        name: "Carly",
        yearOfBirth: 2018,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

// Do not edit below this line
module.exports = findTheOldest;
