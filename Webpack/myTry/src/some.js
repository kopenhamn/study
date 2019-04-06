function sum(...rest) {
    let sum = 0;
    for(let i = 0; i < rest.length; i++) {
        sum += rest[i]
    }
    return sum
}

function avg(...rest) {
    return sum(rest) / rest.length
}

export default avg
