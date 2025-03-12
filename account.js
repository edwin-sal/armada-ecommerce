export const accounts = [
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