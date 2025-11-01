// src/index.js
const readline = require('readline');

// Create interface for user input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform arithmetic operations
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': 
            if (num2 === 0) return '❌ Cannot divide by zero';
            return num1 / num2;
        default: return '❌ Invalid operator';
    }
}

// Step-by-step user input
rl.question('Enter first number: ', (first) => {
    rl.question('Enter second number: ', (second) => {
        rl.question('Enter operator (+, -, *, /): ', (operator) => {

            const num1 = parseFloat(first);
            const num2 = parseFloat(second);

            if (isNaN(num1) || isNaN(num2)) {
                console.log('❌ Please enter valid numbers.');
            } else {
                const result = calculate(num1, num2, operator);
                console.log(`✅ Result: ${num1} ${operator} ${num2} = ${result}`);
            }

            rl.close();
        });
    });
});
