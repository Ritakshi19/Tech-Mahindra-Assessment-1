const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const subtractButton = document.getElementById('sub');
const addButton = document.getElementById('add');
const equalsButton = document.getElementById('equals');
const zeroButton = document.getElementById('zero');
const oneButton = document.getElementById('one');
const twoButton = document.getElementById('two');
const threeButton = document.getElementById('three');
const fourButton = document.getElementById('four');
const fiveButton = document.getElementById('five');
const sixButton = document.getElementById('six');
const sevenButton = document.getElementById('seven');
const eightButton = document.getElementById('eight');
const nineButton = document.getElementById('nine');

let currentInput = '';
let previousInput = '';
let operation = '';

clearButton.addEventListener('click', clearCalculator);
divideButton.addEventListener('click', () => {
    operation = 'divide';
    previousInput = currentInput;
    currentInput = '';
});
multiplyButton.addEventListener('click', () => {
    operation = 'multiply';
    previousInput = currentInput;
    currentInput = '';
});
subtractButton.addEventListener('click', () => {
    operation = 'subtract';
    previousInput = currentInput;
    currentInput = '';
});
addButton.addEventListener('click', () => {
    operation = 'add';
    previousInput = currentInput;
    currentInput = '';
});
equalsButton.addEventListener('click', calculateResult);
zeroButton.addEventListener('click', () => {
    currentInput += '0';
    updateDisplay();
});

oneButton.addEventListener('click', () => {
    currentInput += '1';
    updateDisplay();
});
twoButton.addEventListener('click', () => {
    currentInput += '2';
    updateDisplay();
});
threeButton.addEventListener('click', () => {
    currentInput += '3';
    updateDisplay();
});
fourButton.addEventListener('click', () => {
    currentInput += '4';
    updateDisplay();
});
fiveButton.addEventListener('click', () => {
    currentInput += '5';
    updateDisplay();
});
sixButton.addEventListener('click', () => {
    currentInput += '6';
    updateDisplay();
});
sevenButton.addEventListener('click', () => {
    currentInput += '7';
    updateDisplay();
});
eightButton.addEventListener('click', () => {
    currentInput += '8';
    updateDisplay();
});
nineButton.addEventListener('click', () => {
    currentInput += '9';
    updateDisplay();
});

document.addEventListener('keydown', (event) => {
    if (event.key === '0') {
        currentInput += '0';
        updateDisplay();
    } else if (event.key === '.') {
        currentInput += '.';
        updateDisplay();
    } else if (event.key === '/') {
        operation = 'divide';
        previousInput = currentInput;
        currentInput = '';
    } else if (event.key === '*') {
        operation = 'multiply';
        previousInput = currentInput;
        currentInput = '';
    } else if (event.key === '-') {
        operation = 'subtract';
        previousInput = currentInput;
        currentInput = '';
    } else if (event.key === '+') {
        operation = 'add';
        previousInput = currentInput;
        currentInput = '';
    } else if (event.key === 'Enter') {
        calculateResult();
    }
});

function clearCalculator() {
    currentInput = '';
    previousInput = '';
    operation = '';
    updateDisplay();
}

function calculateResult() {
    if (operation === 'divide' && currentInput === '0') {
        display.value = 'Error: Division by zero!';
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = parseInt(previousInput) + parseInt(currentInput);
            break;
        case 'subtract':
            result = parseInt(previousInput) - parseInt(currentInput);
            break;
        case 'multiply':
            result = parseInt(previousInput) * parseInt(currentInput);
            break;
        case 'divide':
            result = parseInt(previousInput) / parseInt(currentInput);
            break;
        default:
            result = parseInt(currentInput);
    }

    display.value = result.toString();
    currentInput = result.toString();
    previousInput = '';
    operation = '';
}

function updateDisplay() {
    display.value = currentInput;
}

