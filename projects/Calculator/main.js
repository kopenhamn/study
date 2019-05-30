let setValue = '';
let calcValue = '';
let memory = '';
let point = '';
let symbol = '';
let i;

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
    if(display.innerText == '0') {
        setValue = this.innerText;
        display.innerText = setValue;

        console.log('setValue = ' + setValue);
        console.log('memory = ' + memory);
        console.log('point = ' + point);
        console.log('symbol = ' + symbol);

        return setValue;
    } else if(display.innerText.length < 10) {
        setValue += this.innerText;
        display.innerText = setValue;


        console.log('setValue = ' + setValue);
        console.log('memory = ' + memory);
        console.log('point = ' + point);
        console.log('symbol = ' + symbol);

        return setValue;
    }
};


function manipulate() {
    if (setValue != '' && display.innerText.length < 11){
        if(memory != '') {
            if(this.innerText == '+' || this.innerText == '-') {
                if(calcValue != '') {
                    memory = eval(calcValue);
                    calcValue = '';
                } else {
                    memory = eval(memory + symbol + setValue);
                    display.innerText = memory;
                }
            } else if(calcValue != ''){
                memory = eval(calcValue);
                calcValue = '';
            }
            else {
                memory = memory + symbol + setValue;
            }
        } else {
            memory = setValue;
        }
    }
    setValue = '';
    symbol = this.innerText;
    /*if(memory == '' && symbol == '' || calcValue != '') {
        symbol = this.innerText;
        memory = display.innerText;
        calcValue = '';
    } else if(symbol != '' && memory == '') {
        memory += symbol + setValue;
        symbol = this.innerText;
    } else if(this.innerText == '+' || this.innerText == '-') {
        if(setValue != '') {
            memory = eval(memory + symbol + setValue);
            symbol = this.innerText;
            display.innerText = memory;
        }
    }
    else if(symbol != '' && setValue != '') {
        memory += symbol + setValue;
        symbol = this.innerText;
    }
    else {
        symbol = this.innerText;
    }

    setValue = '';
    point = '';
    */
    console.log('setValue = ' + setValue);
    console.log('memory = ' + memory);
    console.log('point = ' + point);
    console.log('symbol = ' + symbol);
};

function calculate() {
    if (symbol != '') {
        if (display.innerText.length >11) {
            display.innerText = 'ERROR';
            return display.innerText
        } else if (display.innerText == 'ERROR') {
            re();
        } else if(setValue != '') {
            memory = memory + symbol + setValue;
            display.innerText = eval(memory);
        } else {
            setValue = display.innerText;
            display.innerText = eval(memory + symbol + setValue);
        }
    }

    calcValue = eval(memory);
    /*
    if(setValue == '' && display.innerText.length < 15) {
        memory = eval(memory);
        calcValue = display.innerText + symbol + memory;

    } else if (display.innerText.length < 15){
        memory = eval(memory);
        memory = memory + symbol + setValue;
        calcValue = memory;
        memory = eval(memory);
    }

    display.innerText = eval(calcValue);

    point = '';
*/
    console.log('setValue = ' + setValue);
    console.log('memory = ' + memory);
    console.log('point = ' + point);
    console.log('symbol = ' + symbol);
}
