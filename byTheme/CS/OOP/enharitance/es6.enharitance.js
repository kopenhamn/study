class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`${this.name} is talking`)
    }

    walk() {
        console.log(`${this.name} is walking`)
    }
}

class Employee extends Person {
    constructor(position, ...rest) {
        super(...rest)
        this.position = position
    }
}

const dev = new Employee('developer', 'John', 25)

console.dir(dev)

console.log(Object.getPrototypeOf(dev) === Employee.prototype) // true
console.log(Object.getPrototypeOf(dev) === Person.prototype) // false
console.log(dev.__proto__ === Employee.prototype) // true
console.log(dev.__proto__.__proto__ === Person.prototype) // true
console.log(dev.__proto__.__proto__.__proto__ === Object.prototype) // true
console.log(dev.__proto__.__proto__.__proto__.__proto__ === null) // true