class MyMath {
    constructor(initial = 0) {
        this.value = initial;
    }

    add(value) {
        this.value += value
        return this
    }

    reduce(value) {
        this.value -= value
        return this
    }

    devide(value) {
        this.value = this.value / value
        return this
    }
}

const num = new MyMath()
console.log(num.add(12).reduce(2).devide(5).value)