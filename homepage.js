import getStars from './get-stars.js';
import products from './products.js'

let selectedCategory = 'all';
let selectedPriceOrder = 'random-price';
let searchKeyword = '';

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

	console.error(filteredProducts);

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
				<button class="quick-add-to-cart">Add to Cart</button>
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
	console.log(filteredProducts)
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

/* Sort the products based on keyword searches */
document.getElementById('search-input').addEventListener('input', function(event) {
	searchKeyword = event.target.value;

	renderProductsContainer();
});

renderProductsContainer(products);