function add(num1, num2){
    return num1+num2;
}

function subtract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return (num1/num2).toFixed(2);
}

function remainder(num1, num2){
    return num1%num2;
}

function operate(operator, num1, num2){
    if(operator=="add"){
        return add(num1, num2);
    }else if(operator=="subtract"){
        return subtract(num1, num2);
    }else if(operator=="multiply"){
        return multiply(num1, num2);
    }else if(operator=="divide"){
        return divide(num1, num2);
    }else if(operator=="percent"){
        return remainder(num1, num2);
    }
}


let firstValue = 0;
let secondValue = 0;
let currentSign = null;
let valueSwitch = true;

const display = document.querySelector("#display");
display.innerHTML = firstValue;

const clear = document.querySelector("#clear");
clear.addEventListener('click',() => {
    firstValue = 0;
    secondValue = 0;
    valueSwitch = true;
    display.innerHTML = firstValue;
})


const one = document.querySelector("#one");
one.addEventListener('click',() => {
    if(valueSwitch==true){
        if(firstValue.toString().length<10){
            firstValue = firstValue*10+1;
            display.innerHTML = firstValue;
        }
        
        
    }else if(valueSwitch==false){
        if(secondValue.toString().length<10){
            secondValue = secondValue*10+1;
            display.innerHTML = secondValue;
        } 
    }
})

const two = document.querySelector("#two");
two.addEventListener('click',() => {
    if(valueSwitch){
        if(firstValue.toString().length<10){
            firstValue = firstValue*10+2;
            display.innerHTML = firstValue;
        }
        
    }else if(valueSwitch==false){
        if(secondValue.toString().length<10){
            secondValue = secondValue*10+2;
            display.innerHTML = secondValue;
        } 
    }
})

const three = document.querySelector("#three");
three.addEventListener('click',() => {
    if(valueSwitch){
        if(firstValue.toString().length<10){
            firstValue = firstValue*10+3;
            display.innerHTML = firstValue;
        }
        
    }else if(valueSwitch==false){
        if(secondValue.toString().length<10){
            secondValue = secondValue*10+3;
            display.innerHTML = secondValue;
        } 
    }
})

const four = document.querySelector("#four");
four.addEventListener('click',() => {
    if(valueSwitch==true){
        if(firstValue.toString().length<10){
            firstValue = firstValue*10+4;
            display.innerHTML = firstValue;
        }
    }else if(valueSwitch==false){
        if(secondValue.toString().length<10){
            secondValue = secondValue*10+4;
            display.innerHTML = secondValue;
        }
    }
    
})

const five = document.querySelector("#five");
five.addEventListener('click',() => {
    if(valueSwitch==true){
        if(firstValue.toString().length<10){
            firstValue = firstValue*10+5;
            display.innerHTML = firstValue;
        }
    }else if(valueSwitch==false){
        if(secondValue.toString().length<10){
            secondValue = secondValue*10+5;
            display.innerHTML = secondValue;
        }
    }
    
})

const six = document.querySelector("#six");
six.addEventListener('click',() => {
    if(valueSwitch==true){
        if(firstValue.toString().length<10){
            firstValue = firstValue*10+6;
            display.innerHTML = firstValue;
        }
    }else if(valueSwitch==false){
        if(secondValue.toString().length<10){
            secondValue = secondValue*10+6;
            display.innerHTML = secondValue;
        }
    }
    
})

const seven = document.querySelector("#seven");
seven.addEventListener('click',() => {
    if(valueSwitch==true){
        if(firstValue.toString().length<10){
            firstValue = firstValue*10+7;
            display.innerHTML = firstValue;
        }
    }else if(valueSwitch==false){
        if(secondValue.toString().length<10){
            secondValue = secondValue*10+7;
            display.innerHTML = secondValue;
        }
    }
})

const eight = document.querySelector("#eight");
eight.addEventListener('click',() => {
    if(valueSwitch==true){
        if(firstValue.toString().length<10){
            firstValue = firstValue*10+8;
            display.innerHTML = firstValue;
        }
    }else if(valueSwitch==false){
        if(secondValue.toString().length<10){
            secondValue = secondValue*10+8;
            display.innerHTML = secondValue;
        }
    }
})

const nine = document.querySelector("#nine");
nine.addEventListener('click',() => {
    if(valueSwitch==true){
        if(firstValue.toString().length<10){
            firstValue = firstValue*10+9;
            display.innerHTML = firstValue;
        }
    }else if(valueSwitch==false){
        if(secondValue.toString().length<10){
            secondValue = secondValue*10+9;
            display.innerHTML = secondValue;
        }
    }
})

const zero = document.querySelector("#zero");
zero.addEventListener('click',() => {
    if(valueSwitch==true){
        if(firstValue.toString().length<10){
            firstValue = firstValue*10;
            display.innerHTML = firstValue;
        }
    }else if(valueSwitch==false){
        if(secondValue.toString().length<10){
            secondValue = secondValue*10;
            display.innerHTML = secondValue;
        }
    }
})

const addition = document.querySelector("#add");
addition.addEventListener('click',() => {
    if(currentSign==null){
        currentSign = "add";
        valueSwitch = false;
    }
})

const sub = document.querySelector("#subtract");
sub.addEventListener('click',() => {
    if(currentSign==null){
        currentSign = "subtract";
        valueSwitch = false;
    }
})

const times = document.querySelector("#multiply");
times.addEventListener('click',() => {
    if(currentSign==null){
        currentSign = "multiply";
        valueSwitch = false;
    }
})

const division = document.querySelector("#divide");
division.addEventListener('click',() => {
    if(currentSign==null){
        currentSign = "divide";
        valueSwitch = false;
    }
    
})

const percentage = document.querySelector("#percent");
percentage.addEventListener('click',() => {
    if(currentSign==null){
        currentSign = "percent";
        valueSwitch = false;
    }
    
})

const negative = document.querySelector("#negative");
negative.addEventListener('click',() => {
    if(valueSwitch==true){
        firstValue = firstValue*(-1);
        display.innerHTML = firstValue;
    }else if(valueSwitch==false){
        secondValue = secondValue*(-1);
        display.innerHTML = secondValue;
    }
})


const equal = document.querySelector("#equal");
equal.addEventListener('click',() => {
    if(currentSign!=null){
        firstValue = operate(currentSign, firstValue, secondValue);
        secondValue = 0;
        currentSign = null;
        valueSwitch = true;
        console.log(firstValue);
        display.innerHTML = firstValue;
    }
    
})