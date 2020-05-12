const { sortedArray } = require('../utils');

function searching(original, value) {
	const middle = Math.floor(original.length / 2);
	if (value > original[middle].id) {
		return searching(original.slice(middle), value);
	}
	if (value < original[middle].id) {
		return searching(original.slice(0, middle), value);
	}

	return original[middle];
}

console.log(searching(sortedArray, 500));
console.log(searching(sortedArray, 70));
console.log(searching(sortedArray, 695));
