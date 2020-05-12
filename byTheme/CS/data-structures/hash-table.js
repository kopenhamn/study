const { LinkedList } = require('./linked-list.js');

const defaultHashTableSize = 32;

class HashTable {
	constructor(size = defaultHashTableSize) {
		this.buckets = Array(size).fill(null).map(() => new LinkedList());
		this.keys = {};
	}

	hash(key) {
		const hash = Array.from(key).reduce((acc, current) => (acc += current.charCodeAt(0)), 0);

		return hash % this.buckets.length;
	}

	set(key, value) {
		const hash = this.hash(key);
		this.keys[hash] = key;
		const list = this.buckets[hash];
		const current = list.find(({ node }) => node && node.key === key);

		if (!current) {
			list.add({ key, value });
		} else {
			current.node.value = value;
		}
	}

	has(key) {
		return Object.hasOwnProperty.call(this.keys, this.hash(key));
	}

	get(key) {
		const list = this.buckets[this.hash(key)];
		const current = list.find(({ node }) => node && node.key === key);
		return current ? current.node.value : undefined;
	}

    getKeys() {
        return Object.keys(this.keys)
    }
}

const hashTable = new HashTable();
hashTable.set('ping', 'pong');
hashTable.set('test', 'test');
console.log(hashTable.getKeys());
console.log(hashTable.has('ping'));
console.log(hashTable.has('bla'));
console.log(hashTable.get('ping'));
// console.log(hashTable);
