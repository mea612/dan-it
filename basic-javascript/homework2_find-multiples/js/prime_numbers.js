let minNum;
let maxNum;
let isNumsValid;

while(!isNumsValid) {
	minNum = +prompt("Enter your min number", 0);
	maxNum = +prompt("Enter your max number", 0);
	isNumsValid = Number.isInteger(minNum) && Number.isInteger(maxNum);
	if(!isNumsValid) {
		alert("Invalid data. Please, enter valid numbers")
	}
}


for(i = minNum; i <= maxNum; i++) {
	let isPrime = true;
	for(j = 2; j < i; j++) {
		if(i % j == 0) {
			isPrime = false;
			break;
		}
	}
	if(isPrime) {
		console.log(i);
	}
	
}