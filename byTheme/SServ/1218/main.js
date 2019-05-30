function createPromiseRandom(min, max, delay) {
   return new Promise((resolve, reject) => {
       if(min < max) {
           setTimeout(function(){
            resolve(this.promiseState = 'fulfilled');
            alert(Math.random()*100)
        }, 2000);

       } else {
           setTimeout(function(){
            this.promiseState = 'rejected';
            console.log(error);
            throw error;
        }, 2000);

           function(error) {

           }
       });
}
let p1 = createPromiseRandom(1, 100, 2000);
p1.then(/ Your code /);
let p2 = createPromiseRandom(1000, 100, 3000);
p2.then(/ Your code /);
