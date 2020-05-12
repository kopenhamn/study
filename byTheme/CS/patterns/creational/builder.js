class Car {
	constructor({ model, year, doors, wheels = 4, speed }) {
		this.model = model;
		this.year = year;
		this.doors = doors;
		this.wheels = wheels;
		this.speed = speed;
	}

    static get Builder() {
        class CarBuilder {
            constructor(model) {
                this.model = model;
            }

            setYear(year) {
                this.year = year;
                return this;
            }

            setDoors(doors) {
                this.doors = doors;
                return this;
            }

            setWheels(wheels) {
                this.wheels = wheels;
                return this;
            }

            setSpeed(speed) {
                this.speed = speed;
                return this;
            }

            build() {
                return new Car(this);
            }
        }

        return CarBuilder
    }
}

const bmwBuilder = new Car.Builder('bmw').setYear(2018).setDoors(3).setWheels(4).setSpeed(200)
console.log(bmwBuilder.build())
