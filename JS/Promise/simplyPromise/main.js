let promise = new Promise((resolve, reject) => {
    if(6<10) {
        resolve('it works!')
    }
    reject('rejected')
});

promise.then(result => console.log(result), reject => console.log(reject))
