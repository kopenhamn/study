let setValue = '';
let calcValue = '';
let memory = '';
let point = '';
let i;
let symbol = '';

let button = document.getElementsByClassName('btn');
let display = document.getElementById('input');

let reload = document.getElementById('reload');
let slice = document.getElementById('popUp');
let comma = document.getElementById('comma');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multi = document.getElementById('multi');
let divide = document.getElementById('divide');
let equal = document.getElementById('equal');

display.innerText = 0;

window.onload = setOnclick();

function setOnclick() {
    for (i = 0; i < button.length; i++) {
        button[i].onclick = getValue;
    }
    reload.onclick = re;
    slice.onclick = sliceMe;
    comma.onclick = setPoint;
    plus.onclick = manipulate;
    minus.onclick = manipulate;
    multi.onclick = manipulate;
    divide.onclick = manipulate;
    equal.onclick = calculate;
};

function setPoint() {
    if(point === '') {
        display.innerText += '.';
        setValue = display.innerText;
        point = '.';
    }

    console.log('setValue = ' + setValue);
    console.log('memory = ' + memory);
    console.log('point = ' + point);
    console.log('symbol = ' + symbol);
}

function sliceMe() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0,-1);
        setValue = display.innerText;
    } else if (display.innerText.length < 2) {
        display.innerText = 0;
        setValue = display.innerText;
    }


    console.log('setValue = ' + setValue);
    console.log('memory = ' + memory);
    console.log('point = ' + point);
    console.log('symbol = ' + symbol);
}

function re() {
    setValue = '';
    calcValue = '';
    memory = '';
    point = '';
    symbol = '';
    display.innerText = '0';

    console.log('setValue = ' + setValue);
    console.log('memory = ' + memory);
    console.log('point = ' + point);
    console.log('symbol = ' + symbol);
}

function getValue() {
    if(display.innerText == 0) {
        setValue = this.innerText;
        display.innerText = setValue;

        symbol = '';

        console.log('setValue = ' + setValue);
        console.log('memory = ' + memory);
        console.log('point = ' + point);
        console.log('symbol = ' + symbol);

        return setValue;
    } else if(display.innerText.length < 16) {
        setValue += this.innerText;
        display.innerText = setValue;

        symbol = '';

        console.log('setValue = ' + setValue);
        console.log('memory = ' + memory);
        console.log('point = ' + point);
        console.log('symbol = ' + symbol);

        return setValue;
    }
};


function manipulate() {
    if(memory == '' && symbol == '') {
        symbol = this.innerText;
        memory = display.innerText + symbol;
    } else if(symbol == '') {
        symbol = this.innerText;
        memory += display.innerText + symbol;
    } else {
        symbol = this.innerText;
    }

    setValue = '';
    point = '';

    console.log('setValue = ' + setValue);
    console.log('memory = ' + memory);
    console.log('point = ' + point);
    console.log('symbol = ' + symbol);
};

function calculate() {
    memory += display.innerText;
    memory = eval(memory);
    display.innerText = memory;

    setValue = '';
    point = '';

    console.log('setValue = ' + setValue);
    console.log('memory = ' + memory);
    console.log('point = ' + point);
    console.log('symbol = ' + symbol);
}
