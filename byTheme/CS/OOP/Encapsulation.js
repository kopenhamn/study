function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + this.age);
    };
};
var tom = new User("Том", 26);
tom.name=34;
console.log(tom.name);

////////////////////////////////////////////////////////

function User (name, age) {
    this.name = name;
    var _age = age;
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + _age + "<br>");
    };
    this.getAge = function() {
        return _age;
    }
    this.setAge = function(age) {
        if(typeof age === "number" && age >0 && age<110){
            _age = age;
        } else {
            console.log("Недопустимое значение");
        }
    }
}
 
var tom = new User("Том", 26);
console.log(tom._age); // undefined - _age - локальная переменная
console.log(tom.getAge()); // 26
tom.setAge(32);
console.log(tom.getAge()); // 32
tom.setAge("54"); // Недопустимое значение


// Symbol

const SimpleDate = (function() {
  const _yearKey = Symbol();
  const _monthKey = Symbol();
  const _dayKey = Symbol();

  class SimpleDate {
    constructor(year, month, day) {
      // Check that (year, month, day) is a valid date
      // ...

      // If it is, use it to initialize "this" date
      this[_yearKey] = year;
      this[_monthKey] = month;
      this[_dayKey] = day;
     }

    addDays(nDays) {
      // Increase "this" date by n days
      // ...
    }

    getDay() {
      return this[_dayKey];
    }
  }

  return SimpleDate;
}());


// Static Properties and Methods

class SimpleDate2 {
  static setDefaultDate(year, month, day) {
    // A static property can be referred to without mentioning an instance
    // Instead, it's defined on the class
    SimpleDate2._defaultDate = new SimpleDate2(year, month, day);
  }

  constructor(year, month, day) {
    // If constructing without arguments,
    // then initialize "this" date by copying the static default date
    if (arguments.length === 0) {
      this._year = SimpleDate2._defaultDate._year;
      this._month = SimpleDate2._defaultDate._month;
      this._day = SimpleDate2._defaultDate._day;

      return;
    }

    // Check that (year, month, day) is a valid date
    // ...

    // If it is, use it to initialize "this" date
    this._year = year;
    this._month = month;
    this._day = day;
  }

  addDays(nDays) {
    // Increase "this" date by n days
    // ...
  }

  getDay() {
    return this._day;
  }
}

SimpleDate2.setDefaultDate(1970, 1, 1);
const defaultDate = new SimpleDate2();

class x {
    sayHello(name) {
        console.log('Hello, my name is ' + name);
    };
    
    static staticSayHello(name) {
        console.log('Hello, my name is static ' + name);
    };

    getStaticHello(name) {
        console.log('this :', this);
        x.staticSayHello(name)
    };
};

const y = new x();

y.sayHello('Alex');
// y.staticSayHello('Michael'); y.staticSayHello is not a function
y.getStaticHello('Michael');

console.log('x :', x);
console.log('y :', y);

