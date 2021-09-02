function add(a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};


function operate(a, b, operator){
    return this[operator](parseInt(a), parseInt(b));
};


function getName() {
    console.log(this.id)
};

let displayValue = 0
let operator
let firstNumber = 0, secondNumber = 0
let interimNum1, interimNum2, interimNum3

const numbers = document.getElementsByClassName("number")
const display = document.querySelector("h3")
const clear = document.querySelector("#clear")
const equals = document.querySelector("#result")
const operators = document.getElementsByClassName('operator')

for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', () => {
        display.textContent += numbers[i].name;
        displayValue += numbers[i].name
        if(!operator) {
            firstNumber += numbers[i].name
        }
        else{
            secondNumber += numbers[i].name
        }
        
    });
    
};

for(let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', () => {
        display.textContent += operators[i].id;
        displayValue += operators[i].id
        operator = operators[i].name
        // if operator pressed automatically perform function and 
        //store it in a variable keep doing this with separate variables 
        //until equals is hit
    })
};

clear.addEventListener('click', cleared);
equals.addEventListener("click", () => {
    if(firstNumber && secondNumber && operator) {
        interimNum1 = operate(firstNumber, secondNumber, operator)
        firstNumber = interimNum1;
        secondNumber = 0;
        operator = null;
        display.textContent = interimNum1
    };
})


function cleared() {
    display.textContent = null;
    displayValue = "";
    firstNumber = 0;
    secondNumber = 0;
    interimNum1 = 0;
    operator = null;
};