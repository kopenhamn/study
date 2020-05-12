class User {
    static generateID = () => (new Date()).getTime().toString(36) + Math.random().toString(36).slice(2)

	constructor(name) {
		this.name = name;
		this.id = User.generateID();
		this.friends = [];
	}

	setFriend(user) {
		this.friends.push(user);

		return this;
	}
}

class SocialNetwork {
	constructor(users = []) {
		this.users = new Map();
		users.forEach((user) => this.users.set(user.name, user));
		this.usersCount = users.length;
	}

	addUser(user) {
		this.users.set(user.name, user);
		this.usersCount++;
	}

	addToFriend(from, to) {
		this.users.get(from.name).setFriend(to);
		this.users.get(to.name).setFriend(from);
	}

	get userList() {
		return [ ...this.users.values() ].reduce((result, user) => ({
			...result,
			[user.name]: user.friends
		}), {});
	}
}

const john = new User('John');
const jake = new User('Jake');
const marta = new User('Marta');
const michel = new User('Michel');
const users = [ john, jake, marta, michel ];
const socialNetwork = new SocialNetwork(users);
socialNetwork.addToFriend(john, michel);
socialNetwork.addToFriend(john, jake);
socialNetwork.addToFriend(john, marta);
const bruce = new User('Bruce');
socialNetwork.addUser(bruce);
console.log(socialNetwork);
console.log(socialNetwork.usersCount);
