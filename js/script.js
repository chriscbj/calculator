const numberButtons = document.querySelector('.numberButtons');
const display = document.querySelector('.display');
const operators = document.querySelector('.operators');

let firstNum = "";
let secondNum = "";
let nextNum = "";
let operator = "";
let finalSum = "";

function reset(){
    return secondNum = '';
}

function add(firstNum, secondNum){
    return firstNum + secondNum;
};

function subtract(firstNum, secondNum){
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum){
    return firstNum * secondNum;
}

function divide(firstNum, secondNum){
    return firstNum / secondNum;
}

function operate(firstNum, secondNum, operator){
    switch (operator){
        case "+": return add(parseInt(firstNum), parseInt(secondNum));
        break;
        case "-": return subtract(parseInt(firstNum), parseInt(secondNum));
        break;
        case "*": return multiply(parseInt(firstNum), parseInt(secondNum));
        break;
        case "/": return divide(parseInt(firstNum), parseInt(secondNum));
        break;
    default:
        return null;
    }
};

numberButtons.addEventListener('click', (e) => {
    // console.log(e) to view e's attribute
    if (e.target.matches('button')){ // checks if e.target is a button
        if (operator === ""){ // if operator and firstNum is empty
        firstNum += e.target.innerText; // set firstNum to button clicked
        display.innerHTML = firstNum;
        } else {
            secondNum += e.target.innerText;
            display.innerHTML = secondNum;
        }
        }
    });
/*     if (firstNum !== "" && secondNum !== "" && finalSum !== "" && operator !== ""){ // if finalSum exists
        operator = "";
        secondNum = "";
        firstNum = finalSum;
        secondNum = e.target.innerText; // set secondNum as button innerText
        finalSum = operate(firstNum, secondNum, operator);
    }
        }
    }
}); */

operators.addEventListener('click', (e) => {
    if (e.target.innerText !== "="){
        operator = e.target.innerText;
    } else if (firstNum !== '' && secondNum !== '' && operator !== '') {
        finalSum = operate(firstNum, secondNum, operator);
        display.innerHTML = finalSum;
    } else {
        finalSum = operate(firstNum, nextNum, operator);
        display.innerHTML = finalSum;
    }
});