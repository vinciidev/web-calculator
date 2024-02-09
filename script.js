let display = document.getElementById('resultDisplay')
let currentNumber = ''
let operator = ''
let previousNumber = ''

function appendNumber(number) {
    currentNumber += number;
    display.textContent = currentNumber;
}

function clearDisplay() {
    currentNumber = ''
    operator = ''
    previousNumber = ''
    display.textContent = '0'
}

function appendOperator(op) {
    operator = op;
    previousNumber = currentNumber;
    currentNumber = ''
}

function calculateNegative() {
    if (parseFloat(currentNumber) !== 0) {
        currentNumber = (-parseFloat(currentNumber)).toString();
        display.textContent = currentNumber;
    }
}

function appendDecimal() {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        display.textContent = currentNumber;
    }
}

function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        case '%':
            result = (parseFloat(previousNumber) * parseFloat(currentNumber)) / 100;
            break;
        case '+/-':
            result = -parseFloat(currentNumber);
            break;
        
    }
    display.textContent = result;
    currentNumber = result.toString();
    operator = '';
    previousNumber = '';
}



