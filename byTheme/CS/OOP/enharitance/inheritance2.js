function Transport() {};
Transport.prototype.drive = function() { return console.log('drive speed from Transport is ' + this.speed + ' km/hour'); };

function Car (brand, model, type, speed) {
  this.brand = brand;
  this.type = type;
  this.model = model;
  this.speed = speed;
};

Car.prototype = Object.create(Transport.prototype);

let car1 = new Car('Volvo', 'X-quatro', 'truck', 120);
car1.drive(); // drive speed from Transport is 120 km/hour

Car.prototype.setWeight = function(weight) { this.weight = weight };

console.log('car1 :', car1); // __proto__.setWeight
car1.setWeight(3000);
console.log('car1.weight :', car1.weight); // car1.weight : 3000

let car2 = Object.create(Car.prototype);

console.log('car2 :', car2);

console.log('car2.weight :', car2.weight);

car2.setWeight(2500);

console.log('car2 :', car2);

console.log('car1.weight :', car1.weight); // car1.weight : 3000
console.log('car2.weight :', car2.weight); // car1.weight : 2000 ???