let display = document.getElementById('display');
let currentInput = '';

function appendValue(value) {
    currentInput += value;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function deleteLast() {
    // Remove the last character from the current input
    currentInput = currentInput.slice(0, -1);
    // Update display, showing '0' if current input is empty
    display.innerText = currentInput || '0';
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString(); // Evaluates the expression
        display.innerText = currentInput;
    } catch (error) {
        display.innerText = 'Error';
        currentInput = '';
    }
}
