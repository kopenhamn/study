//Video-course: https://www.udemy.com/javascript-essentials/learn/v4/t/lecture/4393202?start=0

/*

console.log("Hello world!");

console.log(200);

console.log(true);

var num = 10;

console.log(num);


// simple function

function makeCoffe (sugar, milk) {
    var instructions = "Boil water,";
    instructions += " pour into cup,";
    instructions += " add coffe granules,";
    instructions += " add " + sugar + " spoons of sugar";
    instructions += " add " + milk + " % of milk.";
    return instructions;
}

console.log(makeCoffe(2, 20));


//not working, doesn't get the case value

function goToWorkByCar (weather, km, fuellitre, time) {
    switch (goToWorkByCar) {
        case 10 || km === 10 && fuellitre === 10 && time === 'few':
        console.log('As you choose: weather is ' + weather + '; km is ' + km + '; fuel - litre is '  + fuellitre + '; time is ' + time + ';. So I think it will be better you go to work by car!');
        break;
        default:
        console.log('As you choose: weather is ' + weather + '; km is ' + km + '; fuel - litre is '  + fuellitre + '; time is ' + time + ';. So I think it will be better you go to work NOT by car!');
        break;
    }
    }

goToWorkByCar ( 10, 10, 10, 'few' );


// simple function

function somenumber (x, y) {
    let table = 'lets sum: ';
    table += +x+ ' + ' +y+ ' = ';
    table += x + y + '!';
    return table;
}
console.log(somenumber(8, 4));

// object:
var car = {
    color : "red",
    speed : 200,
    drive : function(){ return "drive"; }
};

//array:
var shoppinglist = [
    "Orange",
    "Apple",
    "Pear"
];


var car = {
    make : "volvo",
    speed : 160,
    engine : {
        size : 2.0,
        make : "bmw",
        fuel : "petrol",
        pistons :[
            { maker : "BMW" },
            { maker : "BMWbmw" }
        ]
    },
    drive : function() { return "drive"; }
};
var array = [
    "string",
    100,
    ["embed", 200],
    {car : "ford"},
    function() {return "drive";}
]


//some functions in work:

function name (){
    var fullname = 'Michael Feninets';
    function cons (sum) {
        function mr(x, y) {
            return x + y;
        }
        return mr("M", "R. ") + sum;
    }

    return cons(fullname);
}

function myaddres () {
    var city = "Kyiv";
    var country = "Ukraine";
    function fulladdres (x, y){
        return "I leave in " + x + ", this is the best city in " + y + "!";
    }
    return fulladdres (city, country);
}


//callableObjects

function myname (fullname){
    return fullname.firstname + fullname.lastname;
}
console.log(myname ({firstname: "Michael", lastname: "Feninets"}));

//callableObjects

console.log(name (function (){
    return "embed";
}))
function name (fullname) {
    return fullname();
}


var myName = "Michael1"       //executed

console.log( myName, myName2,names3());

var myName2 = "Michael2"       //not executed
function names3 (name) {       //executed
    return "Michael3";
}


// some new featers of function capability

var yourage = 17;
var array = [
    "Michael",
    "Olga",
    "Natalia",
    "Viktor",
    "MichaelOld",
    function(y){
        if (y>16) {
            return ', your age fits'
        }
        else {
            return ", your age doesn't fit"
        }
    }
];

function myname(name){
    return "MR./MRs. " + array[1] + name;
}
console.log(myname(array[5](yourage)));

var list = [
    "Alpha",
    100,
    240,
    "Beta"
]
var obj = {
    color : "red",
    speed : 160,
    engine : {
        ar : 200,
        ad : "first"
    }
}


//object constructor (interesting!)

function Apple (x, y, color, scale) {
    this.xAxes = x;
    this.yAxes = y;
    this.colorOfItem = color;
    this.scaleOfItem = scale;
    return this;
}
Apple.prototype = {
    eat : function(){return this;},
    throw : function () {return "throw the apple"}
}
var apple1 = new Apple(100, 200, "red", 300);
var apple2 = new Apple(50, 80, "yellow", 200);
var apple3 = new Apple(100, 300, "green", 300);
console.log(Apple(), new Apple(), apple1, apple2, apple3, Apple.prototype.eat().throw(), Apple.prototype.throw(), apple2.eat());



// for in loop (not logic but can be as a formula!)
var classRegister = ["A", "B", "C"]

for ( var i in classRegister)
{
    console.log(classRegister[i]);
}


var el = document.getElementById('style');
el.style.cssText = " background: #c4c4c4; color: red; width: 300px";
el.style.cssText += "height: 200px;"


var select = document.getElementsByName('cars')[0];

select.onclick = function (event) {console.log(event)};

select.addEventListener( 'click' );
select.onclick = function(ev){console.log(ev)};


var select = document.getElementsByName('cars')[0];


function ClickCallback(event){
    console.log('clicked by add event listener');
}

select.addEventListener('click', ClickCallback);

// EventListener
var pushforstyle = document.getElementById('pushTheButton');
var el = document.getElementById('style');


function gostyle(ev){
    el.style.cssText = "background: yellow; color: white; width: 500px";
}
function gostyle2(ev){
    el.innerHTML = "This text is changed!";
}

//pushforstyle.onclick = gostyle;

pushforstyle.addEventListener('click', gostyle);
pushforstyle.addEventListener('click', gostyle2);

// add new div with js and style it

var element = document.createElement('div');

element.style.cssText = "background: yellow; color: black; width: 200px; height:200px;"

document.body.appendChild(element);


var select = document.createElement('div');

select.style.cssText = "background: green; width: 200px; height: 20px;"

select.onclick = function(){ alert('hello')};

//document.body.appendChild(select);
var target = document.getElementById('yellow');
document.body.insertBefore(select, target);

function set () {
    let elements = document.getElementsByName('param');
    console.log(elements)
}
document.getElementById('set').addEventListener('click', set);


//FINAL PROJECT

function set() {
    let element = document.getElementsByName('property');
    for (let index = 0; index < element.length; index++){
        let cssProperty = element[index].getAttribute('id');
        let cssValue = element[index].value;
        console.log(cssProperty, cssValue);
        let div = document.getElementById('modify');
        div.style[cssProperty] = cssValue;
    }

}
document.getElementById('set').addEventListener('click', set);
*/

function set() {
    let element = document.getElementsByName('property');
    for (let index = 0; index < element.length; index++) {
        let cssProperty = element[index].getAttribute('id');
        let cssValue = element[index].value;
        console.log(cssProperty, cssValue);
        let div = document.getElementById('modify');
        div.style[cssProperty] = cssValue;
    }

}
document.getElementById('set').addEventListener('click', set);

function setcolor (){
    let elem = document.getElementsByClassName('background');
    let colorAtr = elem[0].getAttribute('class');
    let colorValue = elem[0].value;
    let div = document.getElementById('modcolor');
    console.log(colorAtr, colorValue);
    div.style[colorAtr] = colorValue;

}
document.getElementById('getColor').addEventListener('click', setcolor);

// I HAVE DONE IT!!!
