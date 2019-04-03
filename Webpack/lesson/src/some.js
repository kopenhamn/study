function sum(...rest) {
    let sum = 0;
    for(let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum
}

function sumIt(...rest) {
    return sum(...rest)
}

export default sumIt;
