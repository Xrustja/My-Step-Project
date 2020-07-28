let firstNumber = prompt(`Enter first number`);
while (firstNumber === null || firstNumber.trim() === '' || isNaN(firstNumber)) {
    firstNumber = prompt(`Enter correct first number`, firstNumber);
}
let secondNumber = prompt(`Enter second number`);
while (secondNumber === null || secondNumber.trim() === '' || isNaN(secondNumber)) {
    secondNumber = prompt(`Enter correct second number`, secondNumber);
}
let action = prompt("Enter the arithmetic operation?");

function calculator(firstNumber, secondNumber, action) {
    let result;
    switch (action) {
        case '+':
            result = +firstNumber + +secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        default:
            alert('Такої дії не існує');
            result = 0;
    }
    return result;
}

console.log(`${firstNumber} ${action} ${secondNumber} = ${calculator(firstNumber, secondNumber, action)}`);