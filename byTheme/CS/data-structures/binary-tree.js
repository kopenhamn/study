class BinaryTree {
	static TRAVERSE_ORDERING = {
		pre: 'pre',
		in: 'in',
		post: 'post'
	};

	constructor(value, parent = null) {
		this.value = value;
		this.left = null;
		this.right = null;
		this.parent = parent;
	}

	get node() {
		return {
			value: this.value,
			left: this.left === null ? null : this.left.node,
			right: this.right === null ? null : this.right.node
		};
	}

	get uncle() {
		const areNoParents =
			!this.parent || !this.parent.parent || !this.parent.parent.left || !this.parent.parent.right;
		if (areNoParents) return;

		if (this.parent === this.parent.parent.left) return this.parent.parent.right;

		return this.parent.parent.left;
	}

	get leftHeight() {
		if (!this.left) return 0;

		return this.left.height + 1;
	}

	get rightHeight() {
		if (!this.right) return 0;

		return this.right.height + 1;
	}

	get height() {
		return Math.max(this.leftHeight, this.rightHeight);
	}

	get balanceFactor() {
		return this.leftHeight - this.rightHeight;
	}

	insert(value) {
		const node = new BinaryTree(value, this);
		if (this.value < value) {
			return this.setRight(node);
		}
		if (this.value > value) {
			return this.setLeft(node);
		}
	}

	setLeft(node) {
		this.left = node

		return this.left;
	}

	setRight(node) {
		this.right = node

		return this.right;
	}

	traverse(order = BinaryTree.TRAVERSE_ORDERING.pre) {
		const result = [];

		if (BinaryTree.TRAVERSE_ORDERING.pre) result.push(this.value);

		if (this.left) {
			result.push(...this.left.traverse(order));
		}

		if (BinaryTree.TRAVERSE_ORDERING.in) result.push(this.value);

		if (this.right) {
			result.push(...this.right.traverse(order));
		}

		if (BinaryTree.TRAVERSE_ORDERING.post) result.push(this.value);

		return result;
	}

	toString() {
		return this.traverse(BinaryTree.TRAVERSE_ORDERING.in).toString();
	}
}

module.exports = {
	BinaryTree
};

// const tree = new BinaryTree(123);
// tree.insert(124)
// tree.insert(120)
// tree.left.insert(423)
// tree.left.insert(12)
// tree.right.insert(119)
// console.log(JSON.stringify(tree.node, null , 2))
// console.log(tree.height)
