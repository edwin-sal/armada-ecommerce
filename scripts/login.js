import { accounts, login } from "./account.js";

let timeoutId; 

/* Prevent user from accessing this side if they are logged in */
const user = JSON.parse(localStorage.getItem('user'));
if(user) {
	window.location.href = '../index.html';
}

/* Show warning message for invalid credentials */
const warningMsg = document.getElementById('warning-msg');

/* Login using user credentials */
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
	event.preventDefault();

	const userEmail = document.getElementById('user-email').value;
	const userPassword = document.getElementById('user-password').value;

	if(!userPassword || !userEmail) return;

	const account = login(userEmail, userPassword);

	if(!account) {
		console.log('Invalid credentials!');
		warningMsg.classList.add('show');

		clearTimeout(timeoutId);

		timeoutId = setTimeout(function() {
			warningMsg.classList.remove('show');
		}, 3000);

		localStorage.removeItem('user');

		return
	}

	localStorage.setItem('user', JSON.stringify(account));
	window.location.href = '../index.html';
});