const { BinaryTree } = require('./binary-tree.js');

class AVLTree extends BinaryTree {
	static getBalanceFactor(current) {
		if (current.parent === null) return current;

		return AVLTree.getBalanceFactor(current.parent);
	}

	constructor(value, parent = null) {
		super(value, parent);
	}

	insert(value) {
		const node = new AVLTree(value, this);
		if (this.value < value) {
			this.setRight(node);
		}
		if (this.value > value) {
			this.setLeft(node);
		}

		const rootNode = AVLTree.getBalanceFactor(this);

		if (Math.abs(rootNode.balanceFactor) > 1) {
			this.balance(rootNode);
		}
	}

	balance(node) {
		if (node.balanceFactor > 1) {
			if (node.left.balanceFactor > 0) {
				this.rotateLeftLeft(node);
			} else if (node.left.balanceFactor < 0) {
				this.rotateLeftRight(node);
			}
		} else {
			console.log('RIGHT ROTATION', node.right.balanceFactor);
			if (node.right.balanceFactor > 0) {
				this.rotateRightLeft(node);
			} else if (node.right.balanceFactor < 0) {
				this.rotateRightRight(node);
			}
		}
	}

	rotateLeftLeft(rootNode) {
		console.log('left-left');
		const leftNode = rootNode.left;
		rootNode.setLeft(null);

		if (rootNode.parent) {
			rootNode.parent.setLeft(leftNode);
		} else {
			rootNode = leftNode
		}

        if (leftNode.right) {
            rootNode.setLeft(leftNode.right);
        }

        leftNode.setRight(rootNode);
	}

	rotateLeftRight(rootNode) {
		console.log('left-right');
        const leftNode = rootNode.left;
        rootNode.setLeft(null);
        const leftRightNode = leftNode.right;
        leftNode.setRight(null);

        if (leftRightNode.left) {
            leftNode.setRight(leftRightNode.left);
            leftRightNode.setLeft(null);
        }

        rootNode.setLeft(leftRightNode);
        leftRightNode.setLeft(leftNode);

        this.rotateLeftLeft(rootNode);
	}

	rotateRightLeft(rootNode) {
		console.log('right-left');
	}

	rotateRightRight(rootNode) {
		console.log('right-right');
	}

	setLeft(node) {
		this.left = node

		return this.left;
	}

	setRight(node) {
		this.right = node

		return this.right;
	}
}

const tree = new AVLTree(1);
tree.insert(2);
tree.right.insert(-1);
console.log(tree)
tree.right.left.insert(-2);
console.log(tree.toString())
// tree.left.left.left.insert(-3);
