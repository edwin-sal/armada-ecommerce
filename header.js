const profileName = document.getElementById('profile-name');
const logoutButton = document.getElementById('logout');
const loginButton = document.getElementById('login-button');
const signupButton = document.getElementById('signup-button');

/* Control the display of User control */
const user = JSON.parse(localStorage.getItem('user'));
console.log(user);

if(user) {
	// Set the rounded profile name
	const nameContainer = `${user.firstName} ${user.lastName}`.split(' ');
	const firstInitial = nameContainer[0][0];
	const secondInitial = nameContainer[nameContainer.length - 1][0]
	
	profileName.innerText = firstInitial + secondInitial;

	// Hide login/signup button
	loginButton.style.display = 'none';
	signupButton.style.display = 'none';

	// Show cart count only on pages outside cart page
	const currentPage = window.location.href;
	if(!currentPage.includes('cart.html')) {	
		document.getElementById('cart-count').innerText = user.cart.length;
	}
	
} else {
	profileName.style.display = 'none';
}

/* Toggle show/hide logout button when pressing profile name */
profileName.addEventListener('click', function() {
	logoutButton.classList.toggle('hide');
});

/* Navigate to Login page after logout */
logoutButton.addEventListener('click', function() {
	localStorage.removeItem('user');

	// Check if user is in product view or home page
	const currentLocation = window.location.href;
	if(currentLocation.includes('index.html')) {
		window.location.href= './login_signup_page/login.html';
	}
	else if(currentLocation.includes('product.html')) {
		window.location.href= '../../login_signup_page/login.html';
	}
	else if(currentLocation.includes('cart.html')) {
		window.location.href= '../../login_signup_page/login.html';
	}
	
});

