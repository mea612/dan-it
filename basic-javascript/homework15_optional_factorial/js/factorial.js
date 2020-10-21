 function getNumber() {
    let num;
    do {
        num = prompt(`Enter your number, please`, num)
    } while(!Number.isInteger(+num));

    return +num;
}

 

 function factorial(num) {
	
    return (num <= 1) ? 1 : num * factorial(num - 1);
	
}

console.log(factorial(getNumber()));

