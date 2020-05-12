class User {
	constructor(name) {
		this.name = name;
		this.chatroom = null;
	}

	send(msg, to) {
		this.room.send({ msg, from: this.name, to });
	}

	receive(msg, from) {
		console.log(`${from} send to ${this.name}: ${msg}`);
	}
}

class ChatRoom {
	static handleAllUsers({ users, msg, from }) {
		const userNames = Object.keys(users).filter((name) => name !== from);
		userNames.forEach((userName) => users[userName].receive(msg, from));
	}

	constructor() {
		this.users = {};
	}

	register(user) {
		this.users[user.name] = user;
		user.room = this;
	}

	send({ msg, from, to }) {
		if (to) {
			to.receive(msg, from);
		} else {
			ChatRoom.handleAllUsers({ users: this.users, msg, from });
		}
	}
}

const chatRoom = new ChatRoom();
const first = new User('first');
const second = new User('second');
const third = new User('third')
chatRoom.register(first);
chatRoom.register(second);
chatRoom.register(third)

first.send('Hi all!');
second.send('Hi, First!', first);
first.send('How you doin?', second);