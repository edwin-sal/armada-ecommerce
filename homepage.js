import products from './products.js'

let selectedCategory = 'all';
let selectedPriceOrder = 'random-price';

function renderProductsContainer() {
	const productContainer = document.querySelector('.products-container');
	let filteredProducts = [...products];

	// Filter products based on category
	if(selectedCategory !== 'all') {
		filteredProducts = filteredProducts.filter(product => (product.category === selectedCategory));
	}

	if(selectedPriceOrder !== 'random-price') {
		if(selectedPriceOrder === 'low-to-high') {
			filteredProducts.sort((a, b) => a.price - b.price);
		} else {
			filteredProducts.sort((a, b) => b.price - a.price);
		}
	}

	// Render the products
	let productElements = '';
	filteredProducts.forEach(product => {
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
})

renderProductsContainer(products);