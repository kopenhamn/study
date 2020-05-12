const { shuffeledArray } = require('../utils.js');

function heapify(array, i, length) {
	let largest = i;
	let left = i * 2 + 1;
	let right = left + 1;
	if (left < length && array[left].id > array[largest].id) {
		largest = left;
	}
	if (right < length && array[right].id > array[largest].id) {
		largest = right;
	}
	if (largest != i) {
		[ array[largest], array[i] ] = [ array[i], array[largest] ];
		heapify(array, largest, length);
	}
	return array;
}

function heapSorting(original) {
	const copy = [ ...original ];
	const length = copy.length;
	let i = Math.floor(length / 2 - 1);
	let k = length - 1;
	while (i >= 0) {
		heapify(copy, i, length);
		i--;
	}
	while (k >= 0) {
		[ copy[k], copy[0] ] = [ copy[0], copy[k] ];
		heapify(copy, 0, k);
		k--;
	}
	return copy;
}

console.log(heapSorting(shuffeledArray));
