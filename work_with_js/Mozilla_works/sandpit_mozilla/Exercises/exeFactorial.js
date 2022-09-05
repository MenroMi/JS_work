// how we search factorial


function factorial(n) {
    if (!Number.isInteger(n) || typeof(n) === 'string' || n < 0) {
        return 'Error';
    } else {
        return (n === 0 || n < 0) ? 1 : n * factorial(n - 1);
    }
}

console.log(factorial(5));
