import getStars from './get-stars.js';
import products from './products.js'

let selectedCategory = 'all';
let selectedPriceOrder = 'random-price';
let searchKeyword = '';
let notifTimeoutId;

/* 
	This should be useful if the user used search bar outside the homepage.
	The user will be redirected back to the homepage including the search keyword as params.
*/
const params = new URLSearchParams(window.location.search);
const paramsValue = params.get('search');
if(paramsValue) searchKeyword = paramsValue; // If there was a search params, then assign it to the searchKeyword.

function renderProductsContainer() {
	const productContainer = document.querySelector('.products-container');
	let filteredProducts = [...products];

	// Filter products based on category
	if(selectedCategory !== 'all') {
		filteredProducts = filteredProducts.filter(product => (product.category === selectedCategory));
	}

	// Sort products by price
	if(selectedPriceOrder !== 'random-price') {
		if(selectedPriceOrder === 'low-to-high') {
			filteredProducts.sort((a, b) => a.price - b.price);
		} else {
			filteredProducts.sort((a, b) => b.price - a.price);
		}
	}

	// Filter products by keyword
	if(searchKeyword !== '') {
		filteredProducts = filteredProducts.filter(product => product.name.toLocaleLowerCase().includes(searchKeyword.toLocaleLowerCase()));
	} else {
		filteredProducts = [...filteredProducts];
	}

	// console.error(filteredProducts);

	// Render the products
	let productElements = '';
	filteredProducts.forEach(product => {

		// Get the star elements of the product
		const starElements = getStars('./images/icons/', product.ratings);

		productElements += `
			<li>
				<a href="./product_view_page/product.html?id=${product.id}" class="product">
					<img class="product-img" src="${product.imageURL}" alt="Product image">

					<div class="product-info">
						<h4>${product.name}</h4>

						<span class="price">₱${product.price.toLocaleString()}</span>

						<div class="price-rating-container">
							<div class="stars-container">
								${starElements}
							</div>

							<span class="sold">${product.sold} sold</span>
						</div>
					</div>
				</a>
				<button class="quick-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
			</li>
		`;
	});

	productContainer.innerHTML = productElements;

	/* 
		Apply few-item styling to the products container when there is only 1-3 product(s) rendered .
		This prevents the item from occupying the entire container's width due to the default grid template used.
	*/
	if(filteredProducts.length >= 1 && filteredProducts.length <= 3) {
		productContainer.classList.add('few-item');
	} else {
		productContainer.classList.remove('few-item');
	}


	/* Display the add to cart button for each product */
	productContainer.querySelectorAll('li').forEach(product => {
		const quickAddButton = product.querySelector('.quick-add-to-cart');

		product.addEventListener('mouseover', function() {
			quickAddButton.style.display = 'block';
		});

		product.addEventListener('mouseout', function() {
			quickAddButton.style.display = 'none';
		});
	});

	console.log(selectedCategory);
	console.log(selectedPriceOrder);
	console.log(searchKeyword);
	// console.log(filteredProducts)
};

/* Show/Hide dropdown containers by pressing the dropdown button */
document.querySelectorAll('.dropdown-button').forEach(button => {
	button.addEventListener('click', function() {
		const currentMode = this.getAttribute('data-current-mode');
		const type = this.getAttribute('data-type');
		const addSrc = this.getAttribute('data-add-src');
		const removeSrc = this.getAttribute('data-remove-src');
		const buttonIcon = this.querySelector('img');

		// Display/Hide either category/color list depending on the current status of the button 
		document.querySelector(`.${type}-items`).style.display = `${currentMode === 'hide' ? 'block' : 'none'}`;
		this.setAttribute('data-current-mode', `${currentMode === 'hide' ? 'show' : 'hide'}`);

		// Replace the dropdown button as well. Plus to show and minus to hide
		buttonIcon.src = `./images/icons/${currentMode === 'hide' ? removeSrc : addSrc}`

	});
});

/* Sort the products by category */
document.querySelector('.category-items').querySelectorAll('label input').forEach(input => {
	input.addEventListener('change', function(event) {
		const category = event.target.value;
		// console.log(`Selected value: ${category}`);

		// Update the selectedCategory
		selectedCategory = category;
		renderProductsContainer()
	});
})

/* Sort the products by price */
document.querySelector('.price-items').querySelectorAll('label input').forEach(input => {
	input.addEventListener('change', function(event) {
		const priceOrder = event.target.value;
		// console.log(`Selected value: ${priceOrder}`);

		selectedPriceOrder = priceOrder;
		renderProductsContainer();
	});
});

/* Filter the products based on keyword searches */
document.getElementById('search-input').addEventListener('input', function(event) {
	searchKeyword = event.target.value;

	renderProductsContainer();
});

/* Enable search functionality through the form submission */
document.getElementById('search-form').addEventListener('submit', function(event) {
	event.preventDefault();

	const searchInput = document.getElementById('search-input');
	searchKeyword = searchInput.value;

	renderProductsContainer();
});

/* Show/hide sidebar by pressing the sidebar button */
document.getElementById('sidebar-button').addEventListener('click', function() {
	const sidebar = document.getElementById('sidebar');
	const state = sidebar.getAttribute('data-state');
	// sidebar.classList.toggle('hide'); // Hides/show the sidebar 

	sidebar.style.display = state === 'show' ? 'none' : 'block';
	sidebar.setAttribute('data-state', `${state === 'show' ? 'hide' : 'show'}`);
});

/* Dybamically Show/hide sidebar screen size */
window.addEventListener('resize', function() {
	const sidebar = document.getElementById('sidebar');
	const screenWidth = window.innerWidth;

	if(screenWidth <= 627) {
		sidebar.style.display = 'none';
		sidebar.setAttribute('data-state', 'hide');
	} else {
		sidebar.style.display = 'block';
		sidebar.setAttribute('data-state', 'show');
	}
});

renderProductsContainer();

/* Add to cart using the quick add to cart button  */
document.querySelectorAll('.quick-add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
		const productId = Number(this.getAttribute('data-product-id'));

		// Get the item to add
		let itemToAdd = null;
		for(let i = 0; i < products.length; i++) {
			if(products[i].id === productId) {
				itemToAdd = {...products[i], itemCount: 1};
				break;
			}
		}

		console.log(itemToAdd);
		
		// Get the userInfo
		const userInfo = JSON.parse(localStorage.getItem('user'));

		if(!userInfo) {
			console.error('Not logged in');
			window.location.href = '../login_signup_page/login.html' // Navigate user to login page
			return;
		}

		// Check if user already has the item in their cart
		if(userInfo.cart.length > 0) {
			let isAlreadyAdded = false;

			for(let i = 0; i < userInfo.cart.length; i++) {
				if(userInfo.cart[i].id === itemToAdd.id) {
					userInfo.cart[i].itemCount++;
					isAlreadyAdded = true;
					console.log('Item already added!');
					showNotification('Item already added!');
					break;
				}
			}

			if(!isAlreadyAdded) {
				userInfo.cart.push(itemToAdd);
				console.log('Item added');
				showNotification('Item added');
			}

		} else {
			if(userInfo.cart.length === 0) {
				userInfo.cart.push(itemToAdd);
				console.log('Item added');
				showNotification('Item added');
			}
		}

		// Update user object
		localStorage.setItem('user', JSON.stringify(userInfo));

		// Update accounts object
		let accounts = JSON.parse(localStorage.getItem('accounts'));
		for(let i = 0; i < accounts.length; i++) {
			if(accounts[i].id === userInfo.id) {
				accounts[i] = {...userInfo};
				break;
			}
		}
		localStorage.setItem('accounts', JSON.stringify(accounts));


		// Update cart count
		document.getElementById('cart-count').innerText = userInfo.cart.length;
	});
});

/* Show notification for 2 seconds */
function showNotification(message) {
	const notification = document.getElementById('notification');
	notification.innerHTML = `${message}`;
	notification.style.display = 'block';

	clearTimeout(notifTimeoutId);

	notifTimeoutId = setTimeout(function() {
		notification.style.display = 'none';
	}, 500);
}