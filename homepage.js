import products from './products.js'

const productContainer = document.querySelector('.products-container');

// Render the products
function renderProductElements() {
let productElements = '';
	products.forEach(product => {
		productElements += `
			<li>
				<a href="#" class="product">
					<img class="product-img" src="${product.imageURL}" alt="Product image">

					<div class="product-info">
						<h4>${product.name}</h4>

						<span class="price">₱${product.price}</span>

						<div class="price-rating-container">
							<div class="stars-container">
								<img src="./images/icons/star-solid.svg" alt="Star icon">
								<img src="./images/icons/star-solid.svg" alt="Star icon">
								<img src="./images/icons/star-solid.svg" alt="Star icon">
								<img src="./images/icons/star-solid.svg" alt="Star icon">
								<img src="./images/icons/star-solid.svg" alt="Star icon">
							</div>

							<span class="sold">${product.sold} sold</span>
						</div>
					</div>
				</a>
				<button class="quick-add-to-cart">Add to Cart</button>
			</li>
		`;
	});

	productContainer.innerHTML = productElements;
};


/* Display the add to cart button for each product */
productContainer.querySelectorAll('li').forEach(product => {
	// console.log(product);
	const quickAddButton = product.querySelector('.quick-add-to-cart');

	product.addEventListener('mouseover', function() {
		quickAddButton.style.display = 'block';
	});

	product.addEventListener('mouseout', function() {
		quickAddButton.style.display = 'none';
	});
});

/* Add event listener for the sidebar dropdown buttons */
document.querySelectorAll('.dropdown-button').forEach(button => {
	button.addEventListener('click', function() {
		const currentMode = this.getAttribute('data-current-mode');
		const type = this.getAttribute('data-type');
		const addSrc = this.getAttribute('data-add-src');
		const removeSrc = this.getAttribute('data-remove-src');
		const buttonIcon = this.querySelector('img');

		// Display/Hide either category/caliber list depending on the current status of the button 
		document.querySelector(`.${type}-items`).style.display = `${currentMode === 'hide' ? 'block' : 'none'}`;
		this.setAttribute('data-current-mode', `${currentMode === 'hide' ? 'show' : 'hide'}`);

		// Replace the dropdown button as well. Plus to show and minus to hide
		buttonIcon.src = `./images/icons/${currentMode === 'hide' ? removeSrc : addSrc}`

	});
});

renderProductElements();