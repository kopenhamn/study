const { LinkedList } = require('./linked-list.js');

class Queue {
	constructor() {
		this.list = new LinkedList();
	}

	add(value) {
		this.list.add(value);
	}

	get() {
		if (!this.list.head) return [];
		const current = this.list.head.node;
		this.list.deleteHead();
		return current;
	}
}

const myQueue = new Queue();
myQueue.get();
myQueue.add(1);
myQueue.add(2);
myQueue.add(3);
myQueue.add(4);
console.log([ ...myQueue.list.traverse() ]); // [ 1, 2, 3, 4 ]
myQueue.get();
myQueue.get();
myQueue.get();
console.log([ ...myQueue.list.traverse() ]); // [ 4 ]
