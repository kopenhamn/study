const { LinkedList } = require('./linked-list.js');

class Stack {
	constructor() {
		this.list = new LinkedList();
	}

	add(value) {
		this.list.add(value);
	}

	get() {
		if (!this.list.head) return [];
		const current = this.list.tail.node;
		this.list.deleteTail();
		return current;
	}
}

const myStack = new Stack();
myStack.get();
myStack.add(1);
myStack.add(2);
myStack.add(3);
myStack.add(4);
console.log([ ...myStack.list.traverse() ]); // [ 1, 2, 3, 4 ]
myStack.get();
myStack.get();
myStack.get();
console.log([ ...myStack.list.traverse() ]); // [ 1 ]
