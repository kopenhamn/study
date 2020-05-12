function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function () {
    console.log(`${this.name} is talking`)
}

Person.prototype.walk = function () {
    console.log(`${this.name} is walking`)
}

console.dir(Person)

function Employee(position, ...args) {
    Person.apply(this, args)
    this.position = position
}

console.dir(Employee)

Employee.prototype = Object.create(Person.prototype)

console.dir(Employee)

Employee.prototype.constructor = Employee

console.dir(Employee)

const dev = new Employee('developer', 'John', 25)

console.dir(dev)

console.log(Object.getPrototypeOf(dev) === Employee.prototype) // true
console.log(Object.getPrototypeOf(dev) === Person.prototype) // false
console.log(dev.__proto__ === Employee.prototype) // true
console.log(dev.__proto__.__proto__ === Person.prototype) // true
console.log(dev.__proto__.__proto__.__proto__ === Object.prototype) // true
console.log(dev.__proto__.__proto__.__proto__.__proto__ === null) // true
console.log(Function.__proto__ === Function.prototype) // true (the only one case when __proto__ equals prototype)