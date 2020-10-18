let num;
while(!Number.isInteger(num)){
	num = +prompt("Enter your number", 0);
	
}

if(num < 5) { // no (|| num % 5 != 0)
	console.log('Sorry, no numbers');
} else {
	for(let i = 1; i <= num; i++) { //  One more solution for(let i = 5; i <= num; i+5) { console.log(i);}
		if(i % 5 == 0) {
			console.log(i);
		}
		
	}
} 