function factorial(n) {
    let x = n;

    for(let i = 1; i < n; i++){
        n = n * i;
    }

    return x;
}

if (true) {
    var y = 5;
    let z = 7;
    console.log(y); //5
    console.log(z); //7
}
console.log(y); //5
//console.log(z); //error cant find

(function one () {var y = 10; let z = 15})()
console.log(y); //5
//console.log(z); //error cant find

(function two () {y = 10; z = 15})()
console.log(y);
console.log(z);

var person1 = new Object({
  name: 'Chris',
  age: 38,
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
});

var person2 = {
  name: 'Chris',
  age: 38,
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
};

var person3 = person1 ;

console.log(person1, person2, person3);

setInterval(() => {
    tim = new Date();
    document.getElementById('root').innerHTML = tim.toTimeString()
}, 1000)
