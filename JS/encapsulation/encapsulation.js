//src (RU): https://metanit.com/web/javascript/4.7.php
function user (name, age) {
    this.name = name;
    var _age = age;
    this.getAge = () => {
        return _age
    }
    this.setAge = (newAge) => {
        if(typeof newAge == "number"){
            _age = newAge
        } else {
            console.log("not a number");
        }
    }
}

var ivan = new user('Ivan', 34);

console.log(ivan);
console.log(ivan.name);
console.log(ivan.age);
console.log(ivan.getAge());

ivan.setAge(38);

console.log(ivan.getAge());

ivan.setAge('39');
