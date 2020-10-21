
function getNumber(numberNum) {
    let num;
    do {
        num = prompt(`Enter your ${numberNum} number, please`, num)
    } while(!Number.isInteger(+num));

    return +num;
}


function isOperator(operator){
    return operator == '+' ||
        operator == '-' ||
        operator == '*' ||
        operator == '/';
}

function getOperator() {
    let operator = '';

    while(!isOperator(operator)) {
        operator = prompt("Enter your operator", "+, -, *, /, **");
    }
    return operator;
}


function calc(firstNum, secondNum, operator) {

    switch(operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
    }
	
}

console.log(calc(getNumber('first'), getNumber('second'), getOperator()));
 