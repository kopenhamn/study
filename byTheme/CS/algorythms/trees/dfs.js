const { binaryTree } = require('../utils.js');

function walk(node, callbacks) {
	callbacks.onEnter(node);

	if (node.left) walk(node.left, callbacks);

	if (node.right) walk(node.right, callbacks);

	callbacks.onLeave(node);
}

console.log(
	walk(binaryTree, {
		onEnter: (node) => console.log('node on enter: ', node),
		onLeave: (node) => console.log('node on leave: ', node)
	})
);
