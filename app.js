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
let firstNumber = 0, secondNumber = null
let interimNum1, interimNum2, interimNum3

const numbers = document.getElementsByClassName("number")
const display = document.querySelector("h3")
const clear = document.querySelector("#clear")
const equals = document.querySelector("#result")
const operators = document.getElementsByClassName('operator')


// Go through number buttons and and click event to check whether to add to first or second number and display
for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', () => {
        if(!firstNumber && !secondNumber) {
            display.textContent = ""
        }
        if(!firstNumber || !operator){
            
            firstNumber += numbers[i].name;
            display.textContent += numbers[i].name;
            console.log("Storing first number: ", firstNumber)
        }
        else {
            if(!secondNumber) {
                display.textContent = ""
                secondNumber = numbers[i].name;
            }
            else {
                secondNumber += numbers[i].name;
            };
            display.textContent += numbers[i].name;
            console.log("Storing second number: ", secondNumber)
        };
    });
};

// Go through operators and add click event to check if operation needs to be performed
for(let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', () => {

        displayValue = operators[i].id
        checkForOperation(operators[i].name)

        // checks for division by zero and returns error
        
    })
};


// equals.addEventListener("click", () => {
//     if(operator === 'divide' && secondNumber==0) {
//         display.textContent = "5318008"
//         return alert('5318008')
//         // make it return 5318008
//     }
//     if(firstNumber && secondNumber && operator) {
//         checkForOperation()
//     };
// })

clear.addEventListener('click', cleared);

function cleared() {
    display.textContent = null;
    displayValue = "";
    firstNumber = 0;
    secondNumber = null;
    interimNum1 = 0;
    operator = null;
};

function checkForOperation(operation) {
    if(operator === "equals") {
        
        interimNum1 = operate(firstNumber, secondNumber, operator)
        display.textContent = interimNum1
        operator = null
        secondNumber = null
        return
    };
    if(operator && secondNumber== "0") {
        console.log('its true its true')
        display.textContent = "5318008"
        return alert('5318008')
        // it would be cool to flip the calculator upside down like kids back in the day
    }

    if(firstNumber && secondNumber && operator) {
        console.log('yerrp')
        interimNum1 = operate(firstNumber, secondNumber, operator)
        // operator = null;
        firstNumber = interimNum1;
        secondNumber = null;
        display.textContent = interimNum1
        // return
    };

    if(!operator || operation !==operator) {
        console.log("Storing Operator = ", operation)
        operator = operation
    };   
};