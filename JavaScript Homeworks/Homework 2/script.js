let number = prompt('Enter your number');
while (number === null || number.trim() === '' || isNaN(number) || !Number.isInteger(+number)) {
    number = prompt('Enter correct INTEGER number')
}
for (let i = 0; i <= number; i++) {
    if (i % 5 === 0) {
        console.log(`Числа кратные 5: ${i}`);
    }
}
if (Math.sign(number) === -1) {
    console.log(`Sorry, no numbers`);
}

let n = prompt(`Enter first number`);
while (n === null || n.trim() === '' || isNaN(n) || !Number.isInteger(+n)) {
    n = prompt(`Enter correct first INTEGER number`);
}
let m = prompt(`Enter second number`);
while (m === null || m.trim() === '' || isNaN(m) || !Number.isInteger(+m)) {
    m = prompt(`Enter correct second INTEGER numbers`);
}
let min = Math.min(n, m);
let max = Math.max(n, m);

for (let i = min; i <= max; i++) {
    let counter = 0;
    for (j = 1; j <= max; j++) {
        if (i % j === 0) {
            counter++;
        }
    }
    if (counter === 2) {
        console.log(`Простые числа в диапазоне от ${min} до ${max} : ${i}`);
    }
}

