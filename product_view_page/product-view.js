import products from '../products.js';
import { accounts } from '../account.js'
import getStars from '../get-stars.js';

let searchKeyword = '';

console.log(accounts);

/* Get the product from products array */
const params = new URLSearchParams(window.location.search);
const productId = Number(params.get('id')); // Need to convert to number since product.id is also a number

let productData = null;
for(let i = 0; i < products.length; i++) {
	if(products[i].id === productId) {
		productData = products[i];
		break
	}
}
console.log(productData)

/* Get the number of star rating the product has */
const starElements = getStars('../images/icons/', productData.ratings);
// console.log(starElements);

/* Render product view container */
const mainElement = document.querySelector('main');
const productViewSection = document.getElementById('product-view-section');
const productViewContainer = `
	<div class="product-img-container">
		<img id="main-img" class="main-img" src="${productData.imageURL}" alt="Product thumbnail">

		<div class="other-images-container">
			<img src="${productData.imageURL}" alt="Product image">
			<img src="${productData.otherImages[0]}" alt="Product image">
			<img src="${productData.otherImages[1]}" alt="Product image">
			<img src="${productData.otherImages[2]}" alt="Product image">
		</div>
	</div>

	<div class="product-info-container">
		<h1>${productData.name}</h1>

		<div class="stars-sold-container">
			<div class="stars-container">
				${starElements}
			</div>

			<span>${productData.sold} sold</span>
		</div>

		<span class="price">₱${productData.price.toLocaleString()}</span>
		
		<p class="description">${productData.description}</p>

		<form id="add-to-cart-form" class="product-control-container">
			<div class="quantity-container">
				<button class="quantity-control" data-mode="reduce">-</button>
				<input id="product-quantity" type="text" class="product-quantity" name="product-quantity" id="product-quantity" value="1">
				<button class="quantity-control" data-mode="add">+</button>
			</div>

			<button id="add-to-cart" type="submit" class="add-to-cart">
				<img src="../images/icons/cart.svg" alt="Cart icon">
				Add to Cart
			</button>
		</form>
	</div>
`;
productViewSection.innerHTML = productViewContainer;

/* 
Render Similar items  
Store the 4 random objects in arrays then render them as HTML
*/
let itemContainer = [];
while(itemContainer.length !== 4) {
	const randomIndex = Math.floor(Math.random() * products.length);
	const randomItem = products[randomIndex];

	if(randomItem.id !== productData.id) {
		itemContainer.push(randomItem);
	}
}

let itemElements = '';
itemContainer.forEach(item => {
	const miniStarElements = getStars('../images/icons/', item.ratings);

	itemElements += `
		<li>
			<a href=".././product_view_page/product.html?id=${item.id}" class="product">
				<img class="product-img" src="${item.imageURL}" alt="Product image">

				<div class="product-info">
					<h4>${item.name}</h4>

					<span class="small-price">₱${item.price.toLocaleString()}</span>

					<div class="price-rating-container">
						<div class="stars-container">
							${miniStarElements}
						</div>

						<span class="sold">${item.sold} sold</span>
					</div>
				</div>
			</a>
		</li>
	`;
});

document.querySelector('.similar-items-container').innerHTML = itemElements;

// console.log(itemElements);

/* Define global variables */
const maingImg = document.getElementById('main-img');
const productQuantityInput = document.getElementById('product-quantity');
const addToCartForm = document.getElementById('add-to-cart-form');

/* Disable default submit behavior of form */
addToCartForm.addEventListener('submit', function(event) {
	event.preventDefault();
});

/* Replace main thumbnail when hovering over the other product images */
document.querySelectorAll('.other-images-container img').forEach(img => {
	img.addEventListener('mouseover', function() {
		maingImg.src = img.src;
	});
});

/* Increase quantity count for order */
document.querySelectorAll('.quantity-control').forEach(button => {
	button.addEventListener('click', function() {
		let currentQuantity = Number(productQuantityInput.value);
		const mode = this.getAttribute('data-mode');
		
		switch(mode) {
			case 'add':
				currentQuantity++;
				break;
			case 'reduce':
				if(currentQuantity > 1) currentQuantity--;
				break;
			default:
				console.log('Invalid mode value!');
		}

		productQuantityInput.value = currentQuantity;
	});
});

/* Add event listener to the search input */
document.getElementById('search-input').addEventListener('input', function(event) {
	searchKeyword = event.target.value;
	console.log(searchKeyword);
});

/* 
	Add search functionality within product view. 
	Redirects back to home page.
*/
document.getElementById('search-form').addEventListener('submit', function(event) {
	event.preventDefault(); // Disable default behavior
	if(!searchKeyword) return;

	const homePageUrl = `../../index.html?search=${searchKeyword}`;
	window.location.href = homePageUrl;
});

/* Add item to cart */
document.getElementById('add-to-cart').addEventListener('click', function() {
	console.log('hey')
	// Get the quantity
	const itemCount = Number(productQuantityInput.value);

	// Get the userInfo
	const userInfo = JSON.parse(localStorage.getItem('user'));
	const itemToAdd = {...productData, itemCount: itemCount};

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
				userInfo.cart[i].itemCount += itemCount;
				isAlreadyAdded = true;
				console.log('Item already added!');
				break;
			}
		}

		if(!isAlreadyAdded) {
			userInfo.cart.push(itemToAdd);
			console.log('Item added');
		}

	} else {
		if(userInfo.cart.length === 0) {
			userInfo.cart.push(itemToAdd);
			console.log('Item added');
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