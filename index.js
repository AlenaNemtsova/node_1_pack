const { version } = require('./package.json');

console.log(`Hello! This is the version ${version}`);

function calculateRPN(expression) {
    const stack = [];
    const tokens = expression.split(' ');

    for (let token of tokens) {
        if (isNaN(token)) {
            const b = stack.pop();
            const a = stack.pop();

            switch (token) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(a / b);
                    break;
                default:
                    throw new Error(`Unknown operator: ${token}`);
            }
        } else {
            stack.push(Number(token));
        }
    }

    if (stack.length !== 1) {
        throw new Error('Invalid expression');
    }

    return stack.pop();
}

module.exports = calculateRPN;