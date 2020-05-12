class Node {
	constructor(node, next = null) {
		this.node = node;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	add(element) {
		const node = new Node(element);

		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}

		this.size++;

		return this;
	}

    find(callback) {
        if (!this.head) return null

        let current = this.head;

        while(current) {
            if (callback && callback(current)) return current

            current = current.next
        }

        return current
    }

    deleteHead() {
        this.head = this.head.next;

        return this
    }

	clear() {
		this.head = null;
		this.tail = null;
		this.size = 0;

		return this;
	}

	removeByValue(value) {
		let current = this.head;
		let previous = null;

		if (current.node === value) {
			if (this.head === this.tail) {
				this.clear();
			} else {
				this.head = this.head.next;
			}
		}

		while (current.next !== null && current.node !== value) {
			previous = current;
			current = current.next;
		}

		if (current) {
			if (current.next !== this.tail) {
				previous.next = current.next;
			} else {
				previous.next = this.tail;
			}
		}

		return this;
	}

	deleteTail() {
		let current = this.head;

		while (current.next) {
			if (!current.next.next) {
				current.next = null;
				this.tail = current;
			} else {
				current = current.next;
			}
		}

		return this;
	}

	*traverse() {
		let current = this.head;
		while (current !== null) {
			yield current.node;
			current = current.next;
		}
	}

	[Symbol.iterator]() {
		return this.traverse();
	}
}

class User {
	constructor(name) {
		this.name = name;
	}
}

// const list = new LinkedList();

// const john = new User('John');
// const jack = new User('Jack');
// const robert = new User('Robert');
// const kevin = new User('Kevin');

// list.add(john).add(jack).add(robert).add(kevin).removeByValue(kevin).deleteTail();
// console.log([...list.traverse()]) // [ User { name: 'John' }, User { name: 'Jack' } ]
// const numList = new LinkedList();
// numList.add(1).add(2).add(3).add(4).add(5).add(6).deleteTail().removeByValue(3)
// console.log([...numList.traverse()]) // [ 1, 2, 4, 5 ]

module.exports = {
    LinkedList
}