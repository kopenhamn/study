class RootUser {
	static instance = null;
	static exists = false;

	constructor(name) {
		if (RootUser.exists) return RootUser.instance;

		this.name = name;

		RootUser.instance = this;
		RootUser.exists = true;
	}
}

const rootUser = new RootUser('SUDO');
const rootUser1 = new RootUser('sudo');
console.log('rootUser', rootUser); // SUDO
console.log('rootUser1', rootUser1); // SUDO (prev instance)
