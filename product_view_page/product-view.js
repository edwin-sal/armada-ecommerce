import products from '../products.js'
import getStars from '../get-stars.js';

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
console.log(starElements);

/* Render product view container */
const mainElement = document.querySelector('main');
const productViewContainer = `
	<div class="product-img-container">
		<img id="main-img" class="main-img" src="${productData.imageURL}" alt="Product thumbnail">

		<div class="other-images-container">
			<button>
				<img src="${productData.imageURL}" alt="Product image">
			</button>	
			<button>
				<img src="${productData.otherImages[0]}" alt="Product image">
			</button>
			<button>
				<img src="${productData.otherImages[1]}" alt="Product image">
			</button>
			<button>
				<img src="${productData.otherImages[2]}" alt="Product image">
			</button>
		</div>
	</div>

	<div class="product-info-container">
		<h1>${productData.name}</h1>

		<div class="stars-sold-container">
			<div class="stars-container">
				${starElements}
			</div>

			<span>8 sold</span>
		</div>

		<span class="price">₱${productData.price.toLocaleString()}</span>
		
		<p class="description">${productData.description}</p>

		<form id="add-to-cart-form" class="product-control-container">
			<div class="quantity-container">
				<button class="quantity-control" data-mode="reduce">-</button>
				<input id="product-quantity" type="text" class="product-quantity" name="product-quantity" id="product-quantity" value="1">
				<button class="quantity-control" data-mode="add">+</button>
			</div>

			<button type="submit" class="add-to-cart">
				<img src="../images/icons/cart.svg" alt="Cart icon">
				Add to Cart
			</button>
		</form>
	</div>
`;
mainElement.innerHTML = productViewContainer;

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