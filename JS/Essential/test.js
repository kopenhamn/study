let x = 15;
let y = 'World Of Warcraft';
var obj;

var second = (e) => {
    return e;
}

var first = (key, value) => {
    return obj = {
        name: value,
        years: key
    }
}

function event(e) {
    return e;
}
var car = {
    color: 'red',
    speed: 200,
    drive: function() {
        return "drive";
    }
};

var shoppingList = [
    'apple',
    'orange',
    'pear'
]






window.onload = function canAnime(){
    let btn = document.getElementById('btn');
    let can = document.getElementById('canvas');

    let rect = can.getContext('2d');
    let circle = can.getContext('2d');
    let circle2 = can.getContext('2d');
    let posX = 100;
    let speedX = 10;
    let FPS = 30;


    btn.addEventListener('click', function (event) {
        if(can.width == 300) {
            can.width = 500;
        } else {
            can.width = 300;
        }
    })


    setInterval(function(){draw(), animate()}, 1000/FPS);

    function draw() {
        rect.fillStyle = 'rgb(0,0,0)';
        rect.fillRect(0, 0, can.width, can.height);

        rect.fillStyle = 'rgb('+
      Math.floor(Math.random()*256)+',255,255)';
        rect.fillRect(50, 100, 50, 50);

        circle.beginPath();
        circle.arc(posX, 250, 20, 0, 2*Math.PI, false);
        circle.fillStyle = 'yellow';
        circle.fill();
    }

    function animate() {
        posX += speedX;

        if (posX > can.width) {
            speedX = -speedX;
        }
        if (posX < 0) {
            speedX = -speedX;
        }
    }



};
