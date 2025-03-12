const maingImg = document.getElementById('main-img');

/* Replace main thumbnail when hovering over the other product images */
document.querySelectorAll('.other-images-container img').forEach(img => {
	img.addEventListener('mouseover', function() {
		maingImg.src = img.src;
	});
});