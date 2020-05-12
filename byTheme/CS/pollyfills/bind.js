function bind(fn) {
    return function (thisArg, ...rest) {
        return fn.apply(thisArg, rest)
    }
}

function Test() {
    console.log('this', this)
    console.log('arguments', arguments)
}

const bounded = bind(Test)
bounded(1, 'a', 'b')