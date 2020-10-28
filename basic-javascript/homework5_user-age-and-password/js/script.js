function getName(userName) {
    let str;
    do {
        str = prompt(`Enter your ${userName}, please`, str)
    } while(!str || !isNaN(str));

    return str;
}

function getBirthday() {
	let dateStr = prompt('Enter your birthday date, please', 'dd.mm.yyyy');
    
	dateStr = dateStr.split('.');
	return new Date(`${dateStr[1]} . ${dateStr[0]} . ${dateStr[2]}`);
}


function createNewUser(firstName, lastName, birthDate) {
	const newUser = {};
	
	Object.defineProperty(newUser, "firstName", {
		value: firstName,
		writable: false,
		configurable: true
	});
	
	Object.defineProperty(newUser, "lastName", {
		value: lastName,
		writable: false,
		configurable: true
	});
	
	
	
	newUser.setFirstName = function(newFirstName) {
		Object.defineProperty(newUser, 'firstName', {
			value: newFirstName
		});

	}
	
	newUser.setLastName = function (newLastName) {
		Object.defineProperty(newUser, 'lastName', {
			value: newLastName
		});
	};
	
	
	
	newUser.birthday = birthDate;
	
	newUser.getAge = function() {
		
		const currentDate = new Date();
		
		let age = currentDate.getFullYear() - newUser.birthday.getFullYear();
		
		
		if (currentDate.getMonth() < newUser.birthday.getMonth() || 
		(currentDate.getMonth() === newUser.birthday.getMonth() && 
		currentDate.getDate() < newUser.birthday.getDate())) {
			age--;
		}
		
		return age;
	}
	
	
	newUser.getLogin = function() {
		return newUser.firstName[0].toLowerCase() + newUser.lastName.toLowerCase();
	};
	
	newUser.getPassword = function() {
		return newUser.firstName[0].toUpperCase() + newUser.lastName.toLowerCase() + newUser.birthday.getFullYear();
 	}
	
	return newUser;
	
}


const user = createNewUser(getName('first name'), getName('last name'), getBirthday());
console.log(user);
console.log(user.getAge());
console.log(user.getPassword());
