const { shuffeledArray } = require('../utils.js');

function quickSorting(array) {
	if (array.length <= 1) return array;
	const copy = [ ...array ];
	const middle = Math.floor(copy.length / 2);
	const center = copy[middle];
	const leftSide = [];
	const rightSide = [];

	while (copy.length) {
		const current = copy.shift();
		if (current.id < center.id) {
			leftSide.push(current);
		}
		if (current.id > center.id) {
			rightSide.push(current);
		}
	}

	const leftSideSorted = quickSorting(leftSide);
	const rightSideSorted = quickSorting(rightSide);

	return [ ...leftSideSorted, center, ...rightSideSorted ];
}

console.log(quickSorting(shuffeledArray));
