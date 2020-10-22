function getNumber() {
    let num;
    do {
        num = prompt('Enter your number, please', num);
    } while(!Number.isInteger(+num));

    return +num;
}

function fib(f0, f1, n) {
    if(n === 0) {
        return f0;
    }
    if(n === 1) {
        return f1;
    }

    return (n > 1) ? fib(f1, f0 + f1, n - 1) : fib(f1, f0 - f1, n + 1);
}

console.log(fib(0,1, getNumber()));