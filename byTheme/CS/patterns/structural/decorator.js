class User {
    constructor(name) {
        this.name = name;
    }

    checkAdminRole() {
        return !!this.isAdmin
    }
}

function setAdminRole(instance) {
    instance.isAdmin = true
    return instance
}

const user = new User('username')
console.log(user)
console.log('instanceof User', user instanceof User)
console.log('isAdmin', user.checkAdminRole())
console.log('///////////////////////////////////////////')
const admin = setAdminRole(new User('adminname'))
console.log(admin)
console.log('instanceof User', admin instanceof User)
console.log('isAdmin', admin.checkAdminRole())