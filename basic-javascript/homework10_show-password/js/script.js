const password = document.querySelectorAll('input')[0];
const repeatPassword = document.querySelectorAll('input')[1];
const warning = document.createElement('span');
warning.innerText = 'Please enter identical values';
warning.className = 'warning';

document.querySelector('.password-form').addEventListener('click', (e) => {
	if(e.target.tagName === 'I') {
		switchControlType(e.target);
	}
});

function switchControlType(iconEl) {
	iconEl.classList.toggle('fa-eye-slash');

	const inputEl = iconEl.previousElementSibling;
	inputEl.type = inputEl.type == 'password'
		? 'text'
		: 'password';

	warning.remove();
}

document.querySelector('.btn').addEventListener('click', event => {
	event.preventDefault();
	
	if(
		password.value &&
		password.value === repeatPassword.value
	) {
		warning.remove();
		alert('You are welcome');
		
	} else if(!password.value) {
		alert('Please fill in password field');
	} else {
		repeatPassword.after(warning);
	}
});
