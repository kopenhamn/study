function create(proto, ownProps) {
	function F() {}

	F.prototype = proto;
    const result = new F();

	if (typeof ownProps === 'object') {
		for (let prop in ownProps) {
			if (ownProps.hasOwnProperty(prop)) {
				result[prop] = ownProps[prop];
			}
		}
	}

	return result
}

function Animal(type) {
	this.type = type;
}

Animal.prototype.run = function() {
	console.log('animal runs');
};

function Rabbit(name, type) {
	Animal.call(this, type);
	this.name = name;
}

Rabbit.prototype = create(Animal.prototype, {
	jump: function() {
        console.log('jump');
    },
});
Rabbit.prototype.constructor = Rabbit;

let white = new Rabbit('roger', 'white');
console.log(white)
