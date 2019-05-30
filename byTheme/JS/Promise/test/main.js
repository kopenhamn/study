console.log('first log');
let z = new Promise(resolve => {
    console.log('promise before log');
    resolve();
    console.log('promise after log');
});
console.log('between log');
z.then(
    resolve => {
        console.log('onFullfiled log');
    },
    reject => {
        console.log('error log');
    }
)
