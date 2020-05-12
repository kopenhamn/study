const { BinaryTree } = require('./binary-tree.js');

class RedBlackTree extends BinaryTree {
	static COLORS = {
		black: 'black',
		red: 'red'
	};

	static isRoot = true;

	constructor(value, parent = null, color = RedBlackTree.COLORS.black) {
		super(value, parent);
		this.color = color;
		this.root = RedBlackTree.isRoot;

		if (this.color === RedBlackTree.COLORS.red) {
			this.left = new RedBlackTree(null, this);
			this.right = new RedBlackTree(null, this);
		}

		RedBlackTree.isRoot = false;
	}

	get _nextColor() {
		const { COLORS: { black, red } } = RedBlackTree;
		return this.color === black ? red : black;
	}

	get node() {
		return {
			root: this.root,
			color: this.color,
			value: this.value,
			left: this.left === null ? null : this.left.node,
			right: this.right === null ? null : this.right.node,
		};
	}

	get isRed() {
		return this.color === RedBlackTree.COLORS.red;
	}

	get isBlack() {
		return this.color === RedBlackTree.COLORS.black;
	}

	balance() {
		if (this.root || this.parent.isBlack) return;

		const grandParent = this.parent.parent;
        console.log('this.uncle.isBlack', this.uncle.isBlack)

		if (this.uncle && this.uncle.isRed) {
			this.uncle.switchToBlack();
			this.parent.switchToBlack();

			if (!grandParent.root) {
				grandParent.swtichToRed();
			} else {
				return;
			}

			grandParent.balance();
		} else if (this.uncle.isBlack) {
            console.log('HERE1')
            if (grandParent) {
                let newGrandParent;
                console.log('HERE')
            }
        }
	}

	setLeft(value) {
		this.left = new RedBlackTree(value, this, this._nextColor);

		return this;
	}

	setRight(value) {
		this.right = new RedBlackTree(value, this, this._nextColor);

		return this;
	}

	swtichToRed() {
		this.color = RedBlackTree.COLORS.red;

		return this;
	}

	switchToBlack() {
		this.color = RedBlackTree.COLORS.black;

		return this;
	}
}

const tree = new RedBlackTree(1);
tree.setLeft(3).setRight(2);
tree.left.setLeft(52).setRight(13);
tree.left.left.setLeft(10).setRight(9);
tree.left.right.setLeft(8).setRight(11);
tree.right.setLeft(6).setRight(7);
tree.right.left.setLeft(12).setRight(5);
tree.right.right.setLeft(423).setRight(42);
tree.right.right.right.setLeft(14).setRight(9872);
tree.right.right.left.setLeft(756).setRight(222);
tree.right.right.left.left.setLeft(74524234).setRight(6546854);
tree.right.right.left.right.setLeft(65462).setRight(7657651);
tree.right.right.left.left.left.setLeft(8888).setRight(333333);
tree.right.right.left.left.right.setLeft(34522).setRight(444444);
tree.right.right.left.right.left.setLeft(432423).setRight(866252);
tree.right.right.left.left.right.right.setLeft(4325657).setRight(312353543);
tree.right.right.right.left.setLeft(876).setRight(123);
tree.right.right.right.right.setLeft(543).setRight(56242);
tree.right.right.right.right.left.setLeft(97879).setRight(876);
tree.right.right.right.right.right.setLeft(42786).setRight(34413224);
console.log(JSON.stringify(tree.right.right.right.right.right.left.uncle.node, null, 2));
tree.right.right.left.left.right.right.balance();
