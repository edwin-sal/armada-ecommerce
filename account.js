export let accounts = [
	{
		id: 0,
		firstName: 'admin',
		lastName: 'admin',
		email: 'admin123@gmail.com',
		password: '123',
		cart: [
			{
				productId: 0,
				quantity: 11
			}
		],
	}
];

export function login(userEmail, userPassword) {
	updateAccounts();
	let matchedAccount = null;

	for(let i = 0; i < accounts.length; i++) {
		const account = accounts[i];
		if(account.email === userEmail && account.password === userPassword) {
			matchedAccount =  account;
			break;
		}
 	}

	return matchedAccount;
}

export function signup(userInfo) {
	updateAccounts();

	const newAccount = {
		id: accounts.length + 1,
		firstName: userInfo.firstName,
		lastName: userInfo.lastName,
		email: userInfo.email,
		password: userInfo.password,
		cart: [],
	};

	accounts.push(newAccount);

	localStorage.setItem('accounts', JSON.stringify(accounts));
	console.log(accounts);
	return newAccount;
}

export function updateAccounts() {
	const updatedAccounts = JSON.parse(localStorage.getItem('accounts'));
	accounts = [...updatedAccounts];

	// console.log(accounts);
}



// Use default accounts if localStorage is empty
const savedAccounts =  JSON.parse(localStorage.getItem('accounts'));
if(!savedAccounts) {
	localStorage.setItem('accounts', JSON.stringify(accounts));
}

updateAccounts();