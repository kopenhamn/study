class User {
  constructor(name) {
    this.name = name;
  }

  login() {
    console.log(`${this.name} has been logged in`);
  }

  logout() {
    console.log(`${this.name} has been logged out`);
  }
}

class UserCommand {
  constructor(user) {
    this.user = user;
    this.actionsHistory = []
  }

  execute(command) {
    this.actionsHistory.push(command);
    return this.user[command]();
  }
}

const userCommand = new UserCommand(new User('john'))
userCommand.execute('login')
userCommand.execute('logout')
console.log(userCommand.actionsHistory)