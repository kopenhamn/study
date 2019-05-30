function sum(rest) {
    let sum = 0;
    console.log(sum);
    for(let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum
}

function sumIt(...rest) {
    console.log(rest);
    return sum(rest)
}

export default sumIt;
