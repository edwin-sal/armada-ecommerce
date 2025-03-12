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