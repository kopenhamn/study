'use strict';
class Circle {
    constructor(center, coordinates, radius) {
        this.center = center;
        this.coordinates = coordinates;
        this.radius = radius;
    }

    circumferenceLength() {
        return 2 * Math.PI * this.radius;
    }

    copy() {
        return Object.assign({}, this);
    }

    toString() {
        return JSON.stringify(this)
    }

    static staticMethod() {

    }
}

var z = new Circle(2,4,5);
