/* Toggle show/hide logout button when pressing profile name */
const profileName = document.getElementById('profile-name');
const logoutButton = document.getElementById('logout');

profileName.addEventListener('click', function() {
	logoutButton.classList.toggle('hide');
});