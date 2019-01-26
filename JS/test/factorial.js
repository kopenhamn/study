function factorial(n) {
    let x = n;

    for(let i = 1; i < n; i++){
        n = n * i;
    }

    return x;
}
