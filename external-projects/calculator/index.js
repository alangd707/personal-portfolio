const display = document.getElementById('display'); // Display element which shows the user input.
let expression = [] // Array that is used for storing the entire equation which is edited through the user's input of buttons, which eventually is calculated using PEMDAS (parenthesis not added however possible addition in future!)
let positive = true; // Checks if the number that is being edited within the array is positive or negative.
let decimal = false; // Checks if the number that is being edited has a decimal point, changes how the number is edited.


function changeValue(value) {
    if (Number(expression[expression.length - 1])) {
        expression[expression.length - 1] += value
    } else {
        expression.push(value)
    }
    updateInterface()
} // Function called for if the user is adding a number to add digits.

function addDecimalPoint() {
    if (Number(expression[expression.length - 1]) && !(expression[expression.length - 1].includes('.'))) {expression[expression.length - 1] += '.'}
    else {

    }
    updateInterface()
} // Adds a decimal point to the number,

function addOperator(operator) {
    if (Number(expression[expression.length - 1])) {
        expression.push(operator);
        updateInterface();
    }
} // Pushes the specific operator clicked onto the array.

function squareRoot() {
    if (Number(expression[expression.length - 1])) {
        expression[expression.length - 1] = Math.sqrt(expression[expression.length - 1])
    }
    updateInterface();
} // Due to it being guaranteed to be square root, it square roots the currently being operated number.

function deleteInput(type) {
    if (type) {expression.pop()} else {expression = []}
    updateInterface();
} // Called for both delete buttons, if it's AC it clears entire user input, if not it clears only the number that is being operated on.

function negative() {
    if (Number(expression[expression.length - 1])) {expression[expression.length - 1] = '' + (0 - expression[expression.length - 1])}
    updateInterface()
} // Makes the currently being operated number a negative.

function equals() {
    if (Number(expression[expression.length - 1])) {
        expression.forEach((y) => {
            let initialIndex = expression.indexOf(y)
            if (y === '^') {
                expression[initialIndex] = "" + (Number(expression[initialIndex - 1]) ** Number(expression[initialIndex + 1]))
                clearOperatedNumbers(initialIndex)
            }
        })
        expression.forEach((y) => {
            let initialIndex = expression.indexOf(y)
            if (y === 'x') {
                expression[initialIndex] = "" + (Number(expression[initialIndex - 1]) * Number(expression[initialIndex + 1]))
                clearOperatedNumbers(initialIndex)
            } else if (y === '/') {
                expression[initialIndex] = "" + (Number(expression[initialIndex - 1]) / Number(expression[initialIndex + 1]))
                clearOperatedNumbers(initialIndex)
            }
        })
        expression.forEach((y) => {
            let initialIndex = expression.indexOf(y)
            if (y === '+') {
                expression[initialIndex] = "" + (Number(expression[initialIndex - 1]) + Number(expression[initialIndex + 1]))
                clearOperatedNumbers(initialIndex)
            } if (y === '-') {
                expression[initialIndex] = "" + (Number(expression[initialIndex - 1]) - Number(expression[initialIndex + 1]))
                clearOperatedNumbers(initialIndex)
            }
        })
        function clearOperatedNumbers(x) {
            expression.splice(x + 1, 1)
            expression.splice(x - 1, 1)
        }
    }
    updateInterface()
} // Using PEMDAS, changes the value of the user input which can contain multiple operators to calculate in a single time each expression using PEMDAS.

function updateInterface() {
    display.innerHTML = expression.join(' ')
} // Updates the display.

