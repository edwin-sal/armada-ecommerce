`
	<img src="../images/icons/star-solid.svg" alt="Star icon">
	<img src="../images/icons/star-solid.svg" alt="Star icon">
	<img src="../images/icons/star-solid.svg" alt="Star icon">
	<img src="../images/icons/star-solid.svg" alt="Star icon">
	<img src="../images/icons/star-solid.svg" alt="Star icon">
`

function getStars(src, rating) {
	let stars = '';
	const roundedRating = Math.floor(rating);
	const containHalfStar = rating % 1 === 0.5
	const halfStarMark = containHalfStar ? roundedRating + 1 : roundedRating;

	for(let i = 1; i <= 5; i++) {
		let file = 'star-solid.svg';
		if(i === halfStarMark && containHalfStar) {
			file = 'half-star.svg';
		} else if(i > halfStarMark) {
			file = 'empty-star.svg'
		}

		stars += `<img src="${src}${file}" alt="Star icon">`;
	}	

	// console.log(stars);
	return stars;
};

export default getStars;