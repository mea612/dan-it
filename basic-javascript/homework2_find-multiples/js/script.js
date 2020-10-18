let num;
while(!Number.isInteger(num)){
	num = +prompt("Enter your number", 0);
	
}

if(num < 5 || num % 5 != 0) {
	console.log('Sorry, no numbers');
} else {
	for(let i = 1; i <= num; i++) {
		if(i % 5 == 0) {
			console.log(i);
		}
		
	}
} 