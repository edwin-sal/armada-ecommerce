import { accounts, signup } from "../account.js";

const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', function(event) {
	event.preventDefault();

	const firstName = document.getElementById('first-name').value;
	const lastName = document.getElementById('last-name').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const confirmPassword = document.getElementById('confirm-password').value;

	if(!firstName || !lastName || !email || !password || !confirmPassword) {
		console.error('Please fill out the form!');
		return;
	}

	if(password !== confirmPassword) {
		console.error(`Passwords don't match!`);
		return;
	}

	signup({firstName, lastName, email, password});

	localStorage.setItem('accounts', JSON.stringify(accounts));
});