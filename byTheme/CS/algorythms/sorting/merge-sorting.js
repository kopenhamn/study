const { shuffeledArray } = require('../utils.js');

function mergeSorting(array) {
	const copy = [ ...array ];

	if (copy.length <= 1) return copy;

	function merge(left, right) {
		let result = [];
		let minValue = null;

		while (left.length && right.length) {
			if (left[0].id < right[0].id) {
				minValue = left.shift();
			} else {
				minValue = right.shift();
			}

			result.push(minValue);
		}

		if (left.length) result = result.concat(left);

		if (right.length) result = result.concat(right);

		return result;
	}

	const middle = Math.floor(copy.length / 2);
	const leftSide = copy.slice(0, middle);
	const rightSide = copy.slice(middle, copy.length);

	const sortedLeftSide = mergeSorting(leftSide);
	const sortedRightSide = mergeSorting(rightSide);

	return merge(sortedLeftSide, sortedRightSide);
}

console.log(mergeSorting(shuffeledArray));
