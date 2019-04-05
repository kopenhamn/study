function sum(args) {
    let sum = 0;
    for(let i = 0; i < args.length; i ++) {
        sum += args[i]
    }
    console.log(args)
    console.log(sum);
    return sum
}

function sumIt(...rest) {
    console.log(rest)
    return sum(rest)
}

export default sumIt
