class User {
    constructor(name) {
        this.name = name;
    }
}

class SimpleUser extends User {
    constructor(name) {
        super(name)
        this.status = 'simple'
        this.price = 50
    }
}

class StandartUser extends User {
    constructor(name) {
        super(name)
        this.status = 'standart'
        this.price = 100
    }
}

class VIPUser extends User {
    constructor(name) {
        super(name)
        this.status = 'vip'
        this.price = 150
    }
}

class UserFactory {
    static USER_MAP = {
        simple: SimpleUser,
        standart: StandartUser,
        vip: VIPUser,
    }

    static create(name, status) {
        const UserConstructor = UserFactory.USER_MAP[status] || UserFactory.USER_MAP.simple
        return new UserConstructor(name)
    }
}

const users = [
    UserFactory.create('First', 'simple'),
    UserFactory.create('Second', 'vip'),
    UserFactory.create('Third', 'standart'),
    UserFactory.create('Fourth'),
]

console.log(users)
// SimpleUser { name: 'First', status: 'simple', price: 50 }
// VIPUser { name: 'Second', status: 'vip', price: 150 }
// StandartUser { name: 'Third', status: 'standart', price: 100 }
// SimpleUser { name: 'Fourth', status: 'simple', price: 50 }