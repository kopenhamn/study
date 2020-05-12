class Subject {
	constructor() {
		this.observers = [];
	}

	subscribe(observer) {
		this.observers.push(observer);
	}

	unsubscribe(observer) {
		this.observers = this.observers.filter((obs) => obs !== observer);
	}

	fire(action) {
		this.observers.forEach((observer) => {
			if (typeof action === 'function') {
				return action(observer);
			}

			observer.dispatch(action);
		});
	}
}

class Observer {
	constructor(initial) {
		this.state = initial;
	}

	dispatch({ type, payload }) {
		switch (type) {
			case 'PLUS':
				this.state += payload;
				break;
			case 'MINUS':
				this.state -= payload;
				break;
			default:
				return this.state;
		}
	}
}

const stream$ = new Subject();
const entity1 = new Observer(0);
const entity2 = new Observer(1);
const entity3 = new Observer(2);

stream$.subscribe(entity1);
stream$.subscribe(entity2);
stream$.subscribe(entity3);

stream$.fire({ type: 'PLUS', payload: 10 });

console.log(entity1, entity2, entity3);

const plain1 = { current: 1 };
const plain2 = { current: 2 };
const plain3 = { current: 3 };
const plainStream$ = new Subject();
plainStream$.subscribe(plain1)
plainStream$.subscribe(plain2)
plainStream$.subscribe(plain3)

function mutation(obj) {
    obj.previous = obj.current
    obj.current += 100
}

plainStream$.fire(mutation)

console.log(plain1)
console.log(plain2)
console.log(plain3)