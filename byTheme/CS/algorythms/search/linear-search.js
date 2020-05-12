const { sortedArray } = require('../utils');

function linearSearing(original, value) {
    let result = null;
    for (let index = 0; index < original.length; index++) {
        if (original[index].id === value) {
            result = original[index];
            break;
        }
    }
    return result
}

console.log(linearSearing(sortedArray, 500));
console.log(linearSearing(sortedArray, 70));
console.log(linearSearing(sortedArray, 695));
