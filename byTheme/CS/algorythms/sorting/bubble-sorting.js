const { shuffeledArray } = require('../utils.js');

function bubbleSort(arr) {
	const copy = [ ...arr ];

	for (let i = 1; i < copy.length; i++) {
		for (let j = 0; j < copy.length - i; j++) {
			if (copy[j].id > copy[j + 1].id) {
				const temp = copy[j];
				copy[j] = copy[j + 1];
				copy[j + 1] = temp;
			}
		}
	}

	return copy;
}

console.log(bubbleSort(shuffeledArray));
