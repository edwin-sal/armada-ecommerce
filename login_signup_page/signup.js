import { accounts, signup } from "../account.js";

let timeoutId;
const warningMsg = document.getElementById('warning-msg');

const user = JSON.parse(localStorage.getItem('user'));
if(user) {	
	window.location.href = '../../index.html';
}

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
		showWarning('Please fill out the form!')
		return;
	}

	if(password !== confirmPassword) {
		showWarning(`Passwords don't match!`);
		console.error(`Passwords don't match!`);
		return;
	}

	const user = signup({firstName, lastName, email, password});

	// Save to new account to localStorage and sign in the user
	localStorage.setItem('accounts', JSON.stringify(accounts));
	localStorage.setItem('user', JSON.stringify(user));

	// Move to home page
	window.location.href = '../../index.html';
});

function showWarning(msg) {
	warningMsg.innerText = msg;
	warningMsg.classList.add('show');

	clearTimeout(timeoutId);

	timeoutId = setTimeout(function() {
		warningMsg.classList.remove('show');
	}, 3000);
}