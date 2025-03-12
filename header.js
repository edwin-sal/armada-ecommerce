document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login');
    const signupButton = document.getElementById('signup');
    const logoutButton = document.getElementById('logout');
	const profileName = document.getElementById('profile-name');
    const authModal = document.getElementById('auth-modal');
    const closeModalButton = document.getElementById('close-modal');
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');
    const loginContent = document.getElementById('login-content');
    const signupContent = document.getElementById('signup-content');
    const switchToSignup = document.getElementById('switch-to-signup');
    const switchToLogin = document.getElementById('switch-to-login');

    // Function to update UI based on login state
    function updateUI() {
        if (localStorage.getItem('loggedIn') === 'true') {
            loginButton.style.display = 'none';
            signupButton.style.display = 'none';
            logoutButton.style.display = 'block'; // Show logout button
			profileName.style.display = 'block'; // Show profile-name button
        } else {
            loginButton.style.display = 'block';
            signupButton.style.display = 'block';
            logoutButton.style.display = 'none'; // Hide logout button
			profileName.style.display = 'none'; // Hide profile-name-button
        }
    }

    // Call updateUI on page load
    updateUI();

    // Show modal with login tab active when login button is clicked
    loginButton?.addEventListener('click', function() {
        authModal.classList.add('show');
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginContent.classList.add('active');
        signupContent.classList.remove('active');
    });

    // Show modal with signup tab active when signup button is clicked
    signupButton?.addEventListener('click', function() {
        authModal.classList.add('show');
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        signupContent.classList.add('active');
        loginContent.classList.remove('active');
    });

    // Close modal when close button is clicked
    closeModalButton?.addEventListener('click', function() {
        authModal.classList.remove('show');
    });

    // Close modal when clicking outside
    authModal?.addEventListener('click', function(event) {
        if (event.target === authModal) {
            authModal.classList.remove('show');
        }
    });

    // Switch between login and signup tabs
    loginTab?.addEventListener('click', function() {
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginContent.classList.add('active');
        signupContent.classList.remove('active');
    });

    signupTab?.addEventListener('click', function() {
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        signupContent.classList.add('active');
        loginContent.classList.remove('active');
    });

    // Link switches between tabs
    switchToSignup?.addEventListener('click', function(e) {
        e.preventDefault();
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        signupContent.classList.add('active');
        loginContent.classList.remove('active');
    });

    switchToLogin?.addEventListener('click', function(e) {
        e.preventDefault();
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginContent.classList.add('active');
        signupContent.classList.remove('active');
    });

    // Handle Login Form Submission
    document.getElementById('login-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Login form submitted');

        // Store login state
        localStorage.setItem('loggedIn', 'true');

        // Update UI
        updateUI();

        // Redirect to index.html
        window.location.href = 'index.html';
    });

    // Handle Signup Form Submission
    document.getElementById('signup-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Signup form submitted');

        // Store login state
        localStorage.setItem('loggedIn', 'true');

        // Update UI
        updateUI();

        // Redirect to index.html
        window.location.href = 'index.html';
    });

    // Logout Functionality
    logoutButton?.addEventListener('click', function() {
        localStorage.removeItem('loggedIn'); // Remove login state
        updateUI(); // Refresh UI
    });
});
