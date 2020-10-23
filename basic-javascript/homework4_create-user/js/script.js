function getName(userName) {
    let str;
    do {
        str = prompt(`Enter your ${userName}, please`, str)
    } while(!str || !isNaN(str));

    return str;
}

function createNewUser(firstName, lastName) {
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

	newUser.getLogin = function() {
		return newUser.firstName[0].toLowerCase() + newUser.lastName.toLowerCase();
	};
	
	return newUser;
	
}

const user = createNewUser(getName('first name'), getName('last name'));
console.log(user);
console.log(user.getLogin());
