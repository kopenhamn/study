/*var canvas;
var canvasContext;
window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(70, 110, 50, 20);
    console.log(canvas, canvasContext);
}

var canvas;
var canvasContext;
window.onload = function(){
    canvas = document.getElementById('gameCanvas');

    canvasContext = canvas.getContext('2d');

    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(40, 60, 20, 20);

    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(100, 60, 80, 20);

    console.log(canvas, canvasContext,canvasContext.fillStyle);
}


//ver. 3

var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 10;

window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var FramesPerSecond = 30;

    setInterval(function(){moveEverything(); drawEverything()},
    1000/FramesPerSecond);
}

function moveEverything(){
    ballX = ballX + ballSpeedX;
    if(ballX > canvas.width){
        ballSpeedX = -ballSpeedX;
    }
    if(ballX < 0){
        ballSpeedX = -ballSpeedX;
    }
}

function drawEverything(){
    //next line blanks out the screen with black
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    //this is left player paddle
    colorRect(ballX, 60, 20, 20, 'red');
    //next line draws the ball
    colorRect(0, 180, 10, 80, 'white');

}

function colorRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}


//ver. 4 (my ver!)

var canvas;
var canvasContext;
ballX = 50;
ballSpeedX = 10;
var framesPerSecond = 30;

window.onload = function (){
    canvas = document.getElementById('gameCanvas');
    setInterval(function(){moveEverything(); drawEverything()}, 1000/framesPerSecond)
}

function moveEverything() {
    ballX = ballX + ballSpeedX;
    if(ballX > canvas.width){
        ballSpeedX = -ballSpeedX;
    }
    if(ballX < 0){
        ballSpeedX = -ballSpeedX;
    }
    console.log(ballX);
}
function drawEverything() {

    canvasContext = canvas.getContext('2d');

    colorRect(0, 0, canvas.width, canvas.height, 'black');

    colorRect(ballX, 100, 20, 20, 'green');

    colorRect(0, 150, 10, 80, 'white');
}
function colorRect(x, y, w, h, c) {
    canvasContext.fillStyle = c;
    canvasContext.fillRect(x, y, w, h);
}


//ver. 5 (myver!)
var canvas;
var canvasContext;
var ballX = 5;
var ballSpeedX = 10;
var FramesPerSecond = 30;

window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    setInterval(function(){moveEverything (); drawEverything ()}, 1000/FramesPerSecond);
}

function moveEverything (){
    ballX = ballX + ballSpeedX;
    if(ballX > canvas.width){
        ballSpeedX = -ballSpeedX;
    }
    if(ballX < 0){
        ballSpeedX = -ballSpeedX;
    }
}

function drawEverything () {
    canvasContext = canvas.getContext('2d');
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    colorRect(ballX, 60, 20, 20, 'green');
    colorRect(0, 80, 10, 80, 'white');
}


function colorRect(x, y, w, h, c){
    canvasContext.fillStyle = c;
    canvasContext.fillRect(x, y, w, h);
}



//ver. 6 (next state Circle!)

var canvas = document.getElementById('gameCanvas');
var canvasContext = canvas.getContext('2d');
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 10;
var FramesPerSecond = 30;

window.onload = function(){
    setInterval(function(){moveEverything(); drawEverything()}, 1000/FramesPerSecond);
}
function moveEverything(){
    ballX = ballX + ballSpeedX;
    if(ballX > canvas.width){
        ballSpeedX = -ballSpeedX;
    }
    if(ballX < 0){
        ballSpeedX = -ballSpeedX;
    }
    ballY = ballY + ballSpeedY;
    if(ballY > canvas.height){
        ballSpeedY = -ballSpeedY;
    }
    if(ballY < 0){
        ballSpeedY = -ballSpeedY;
    }
}
function drawEverything(){
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    colorRect(0, 160, 10, 80, 'white');
    colorCircle(ballX, ballY, 10, 'white');
}
/*
function colorCircle(x, y, r, c){
    canvasContext.fillStyle = c;
    canvasContext.beginPath();
    canvasContext.arc(x, y, r, 0,Math.PI*2,true);
    canvasContext.fill();
}
//my try

function colorCircle(x, y, r, c){
    canvasContext.fillStyle = c;
    canvasContext.beginPath();
    canvasContext.arc(x, y, r, 0,Math.PI*2,true);
    canvasContext.fill();
}


function colorRect(x, y, w, h, c){
    canvasContext.fillStyle = c;
    canvasContext.fillRect(x, y, w, h);
}

//next is going to be hard one (mouse position and rect movment)

var canvas = document.getElementById('gameCanvas');
var canvasContext = canvas.getContext('2d');
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 10;
var FramesPerSecond = 1000;

window.onload = function(){
    setInterval(function(){moveEverything(); drawEverything()}, 1000/FramesPerSecond);

}

function moveEverything(){
    ballX = ballX + ballSpeedX;
    if(ballX > canvas.width){
        ballSpeedX = - ballSpeedX;
    }
    if(ballX < 0){
        ballSpeedX = - ballSpeedX;
    }
    ballY = ballY + ballSpeedY;
    if(ballY > canvas.height){
        ballSpeedY = - ballSpeedY;
    }
    if(ballY < 0){
        ballSpeedY = - ballSpeedY;
    }
}

function drawEverything(){
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    colorCircle(ballX, ballY, 10, 'white');
    colorRect(0, 100, 10, 80, 'white');
}

function colorRect(x, y, w, h, c) {
    canvasContext.fillStyle = c;
    canvasContext.fillRect(x, y, w, h);
}

function colorCircle(x, y, r, c) {
    canvasContext.fillStyle = c;
    canvasContext.beginPath();
    canvasContext.arc(x, y, r, 0,Math.PI*2,true);
    canvasContext.fill();
}
*/
//once again repeat the script

var canvas = document.getElementById('gameCanvas');
var canvasContext = canvas.getContext('2d');
var ballX = 50;
var ballY = 50;
var ballSpeedX = 20;
var ballSpeedY = 10;
var FPS = 30;
var paddle1Y;
var paddle2Y = 250;
var paddleHeight = 100;
var paddleWidth = 10;
var player1Score = 0;
var player2Score = 0;
var winningScore = 3;

var showingWinScreen = false;

function handleMouseClick() {
    if (showingWinScreen) {
        player1Score = 0;
        player2Score = 0;
        showingWinScreen = false;
    }
}

window.onload = function() {
    setInterval(function() {
        moveEverything();
        drawEverything()
    }, 1000 / FPS);

    canvas.addEventListener('mousedown', handleMouseClick);

    canvas.addEventListener('mousemove', function() {
        var mousePos = calcMousePos(event);
        paddle1Y = mousePos.y - (paddleHeight / 2)
    });
}

function drawNet() {
    for(var i=0; i<canvas.height; i+=40){
        colorRect(canvas.width/2-1, i, 2, 20, 'white');
    }
}

function drawEverything() {
    if (showingWinScreen) {
        canvasContext.fillStyle = 'white';

        if (player1Score >= winningScore) {
            canvasContext.fillText("Right Player Won!!!", 350, 200);
        } else if (player2Score >= winningScore) {
            canvasContext.fillText("Left Player Won!!!", 350, 200);
        }
        canvasContext.fillText("Click to continue", 350, 500);
        return;
    }

    colorRect(0, 0, canvas.width, canvas.height, 'black');

    colorCircle(ballX, ballY, 10, 'white');

    colorRect(0, paddle1Y, paddleWidth, paddleHeight, 'white');

    colorRect(canvas.width - paddleWidth, paddle2Y, paddleWidth, paddleHeight, 'white');
    canvasContext.fillText(player1Score, 100, 100);
    canvasContext.fillText(player2Score, canvas.width - 100, 100);
    drawNet();
}

function computerMovement() {
    var paddle2Center = paddle2Y + (paddleHeight / 2);
    if (paddle2Center < ballY - 35) {
        paddle2Y += 15;
    } else if (paddle2Center > ballY + 35) {
        paddle2Y -= 15;
    }
}

function moveEverything() {
    if (showingWinScreen) {
        return;
    }
    computerMovement();

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballX > canvas.width) {
        if (ballY > paddle2Y && ballY < (paddle2Y) + paddleHeight) {
            ballSpeedX = -ballSpeedX;

            var deltaY = ballY - (paddle2Y + paddleHeight / 2);
            ballSpeedY = deltaY * 0.35;
        } else {
            player2Score++;
            ballReset()
        }
    }
    if (ballX < 0) {
        if (ballY > paddle1Y && ballY < (paddle1Y) + paddleHeight) {
            ballSpeedX = -ballSpeedX;

            var deltaY = ballY - (paddle1Y + paddleHeight / 2);
            ballSpeedY = deltaY * 0.35;
        } else {
            player1Score++;
            ballReset()
        }

    }

    if (ballY > canvas.height) {
        ballSpeedY = -ballSpeedY;
    }
    if (ballY < 0) {
        ballSpeedY = -ballSpeedY;
    }
}

function colorRect(x, y, w, h, c) {
    canvasContext.fillStyle = c;
    canvasContext.fillRect(x, y, w, h);
}

function colorCircle(x, y, r, c) {
    canvasContext.fillStyle = c;
    canvasContext.beginPath();
    canvasContext.arc(x, y, r, 0, Math.PI * 2, true);
    canvasContext.fill();
}
// next script is hard to logic understand, lets try - mouse following
/*
function calcMousePos() {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = event.clientX - rect.left - root.scrollLeft;
    var mouseY = event.clientY - rect.top - root.scrollTop;
    return {
        x:mouseX,
        y:mouseY,
    }
}

*/
//rewriting mouseListening part of code


function calcMousePos() {
    let rect = canvas.getBoundingClientRect();
    let root = document.documentElement;
    let mouseX = event.clientX - rect.left - root.scrollLeft;
    let mouseY = event.clientY - rect.top - root.scrollTop;
    return {
        x: mouseX,
        y: mouseY
    }
}

function ballReset() {
    if (player1Score >= winningScore ||
        player2Score >= winningScore) {
        showingWinScreen = true;
    }

    ballSpeedX = -ballSpeedX;
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
}

//I have done it, but still i need to repeat it several times!!!
