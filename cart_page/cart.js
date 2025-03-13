// Prevents unsigned users form entering the cart page
const user = JSON.parse(localStorage.getItem('user'));
if(!user) {
	window.location.href = '../index.html'
}



/* Render the 2 main secetions of cart page */
function renderCartSections() {
	const user = JSON.parse(localStorage.getItem('user'));

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
						<button class="quantity-control" data-mode="reduce" data-item-id="${item.id}">-</button>
						<input type="text" class="product-quantity" name="product-quantity" id="product-quantity${item.id}" value="${item.itemCount}">
						<button class="quantity-control" data-mode="add" data-item-id="${item.id}">+</button>
					</div>
					
					<span class="cart-item-price">₱${item.price.toLocaleString()}</span>

					<span class="cart-item-final-price">₱${(item.price*item.itemCount).toLocaleString()}</span>

					<button data-item-id="${item.id}" class="delete-cart-item"><img src="../images/icons/trash.svg" alt="Trash icon"></button>
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
	
	// Update the shopping cart header items
	document.getElementById('cart-items-count').innerText = `${user.cart.length} items`;


	// Evenet listener for adding/reducing cart items
	const quantityButtonElements = document.querySelectorAll('.quantity-control');
	quantityButtonElements.forEach(button => {
		button.addEventListener('click', function() {
			const user = JSON.parse(localStorage.getItem('user'));
			const accounts = JSON.parse(localStorage.getItem('accounts'));
			const mode = this.getAttribute('data-mode');
			const itemId = this.getAttribute('data-item-id');

			// Update user object
			for(let i = 0; i < user.cart.length; i++) {
				if(user.cart[i].id == Number(itemId)) {
					if(mode === 'add') {
						user.cart[i].itemCount++;
					} else if(mode === 'reduce' && (user.cart[i].itemCount > 1	)) {
						user.cart[i].itemCount--;
					}
					localStorage.setItem('user', JSON.stringify(user));
					break;
				}
			}

			// Update the accounts array
			for(let i = 0; i < accounts.length; i++) {
				if(accounts[i].id === user.id) {
					accounts[i] = {...user};
					localStorage.setItem('accounts', JSON.stringify(accounts));
					break;
				}
			}

			renderCartSections();
		});
	});

	// Event listener for removing cart item
	document.querySelectorAll('.delete-cart-item').forEach(deleteButton => {
		deleteButton.addEventListener('click', function() {
			const user = JSON.parse(localStorage.getItem('user'));
			const accounts = JSON.parse(localStorage.getItem('accounts'));
			const itemId = Number(this.getAttribute('data-item-id'));
			console.log(itemId);

			const filteredCart = user.cart.filter(item => item.id !== itemId);
			user.cart = [...filteredCart];

			// Update user object
			localStorage.setItem('user', JSON.stringify(user));

			// Update accounts array
			localStorage.setItem('accounts', JSON.stringify(accounts));

			// Re-render with updated values
			renderCartSections();
		});
	});
}

renderCartSections();