const binaryTree = {
	value: 'root',
	left: {
		value: 'left',
		left: {
			value: 'left->left',
			left: {
				value: 'left->left->left',
				left: null,
				right: null,
			},
			right: {
				value: 'left->left->right',
				left: null,
				right: null,
			}
		},
		right: {
			value: 'left->right',
			left: {
				value: 'left->right-left',
				left: null,
				right: null,
			},
			right: {
				value: 'left->right->right',
				left: null,
				right: null,
			}
		}
	},
	right: {
		value: 'right',
		left: {
			value: 'right->left',
			left: {
				value: 'right->left->left',
				left: null,
				right: null,
			},
			right: {
				value: 'right->left->right',
				left: null,
				right: null,
			}
		},
		right: {
			value: 'right->right',
			left: {
				value: 'right->right-left',
				left: null,
				right: null,
			},
			right: {
				value: 'right->right->right',
				left: null,
				right: null,
			}
		}
	}
}

const _shuffle = function(a, b) {
	return 0.5 - Math.random();
};

const sortedArray = new Array(1000).fill({ type: 'entity' }).map(function(entity, id) {
	return {
		id,
		time: Date.now(),
		type: Buffer.from(`${entity.type}-${id}-${Date.now()}`).toString('base64')
	};
});

const shuffeledArray = [...sortedArray].sort(_shuffle)

module.exports = {
	sortedArray,
	shuffeledArray,
	binaryTree,
};
