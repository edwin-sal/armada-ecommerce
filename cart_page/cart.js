const user = JSON.parse(localStorage.getItem('user'));
console.log(user.cart);



/* Render the 2 main secetions of cart page */
function renderCartSections() {
	let cartItemElements = '';
	let itemPrice = 0;
	let shippingFee = 0;
	let totalCost = 0;
	
	// Get the cart item Elements
	if(user.cart.length > 0) {
		user.cart.forEach(item => {
			itemPrice += item.price * item.itemCount;
			shippingFee += 58;

			cartItemElements += `
				<li class="cart-item">
					<div class="image-container">
						<img src="${item.imageURL}" alt="Product thumbnail">

						<span class="cart-item-name">${item.name}</span>
					</div>
					

					<div class="quantity-container">
						<button class="quantity-control" data-mode="reduce">-</button>
						<input id="product-quantity" type="text" class="product-quantity" name="product-quantity" id="product-quantity" value="${item.itemCount}">
						<button class="quantity-control" data-mode="add">+</button>
					</div>
					
					<span class="cart-item-price">₱${item.price.toLocaleString()}</span>

					<span class="cart-item-final-price">₱${(item.price*item.itemCount).toLocaleString()}</span>

					<button class="delete-cart-item"><img src="../images/icons/trash.svg" alt="Trash icon"></button>
				</li>
			`
		});

		totalCost = itemPrice + shippingFee;
		console.log(totalCost)
	} else {
		cartItemElements = `<h4>No items</h4>`;
	}

	// Insert the items to the cart items wrapper
	document.getElementById('cart-item-wrapper').innerHTML = cartItemElements;

	// Update the summary content
	document.getElementById('items').innerText = `₱${itemPrice.toLocaleString()}` 
	document.getElementById('shipping-fee').innerText = `₱${shippingFee.toLocaleString()}` 
	document.getElementById('total-cost').innerText = `₱${totalCost.toLocaleString()}` 
}

renderCartSections();