var Person = function(firstName) {
  this.firstName = firstName;
};

Person.prototype.walk = function(){
  console.log("I am walking!");
};

Person.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstName);
};

function Student(firstName, subject) {
  Person.call(this, firstName);
  this.subject = subject;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstName + ". I'm studying "
              + this.subject + ".");
};
Student.prototype.sayGoodBye = function(){
  console.log("Goodbye!");
};

// Пример использования:
var student1 = new Student("Janet", "Applied Physics");
student1.sayHello();   // "Hello, I'm Janet. I'm studying Applied Physics."
student1.walk();       // "I am walking!"
student1.sayGoodBye(); // "Goodbye!"

// Проверяем, что instanceof работает корректно
console.log(student1 instanceof Person);  // true 
console.log(student1 instanceof Student); // true