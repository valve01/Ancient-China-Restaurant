const cards = document.querySelectorAll('.dish-card');
const inCartcount = document.querySelector('.header__cart-items-qauntity');

cards.forEach((card) => {
	let count = 0;
	const incrementBtn = card.querySelector('.dish-card__plus');
	const decrementBtn = card.querySelector('.dish-card__minus');
	const addToCartBtn = card.querySelector('.dish-card__add-to-cart-btn');
	const cardCounter = card.querySelector('.dish-card__counter');

	cardCounter.addEventListener('input', () => {
		if (!Number.isInteger(parseInt(cardCounter.value))) {
			cardCounter.value = count;
		} else {
			count = parseInt(cardCounter.value);
			cardCounter.value = count;
		}
	});

	cardCounter.addEventListener('keydown', (e) => {
		if (e.keyCode == 8 && e.target.value.length == 1) {
			count = 0;
			cardCounter.value = count;
		}
	});

	incrementBtn.addEventListener('click', (e) => {
		e.preventDefault();
		count++;
		cardCounter.value = count;
	});

	decrementBtn.addEventListener('click', (e) => {
		e.preventDefault();
		if (count > 0) {
			count--;
			cardCounter.value = count;
		}
	});
	addToCartBtn.addEventListener('click', (e) => {
		e.preventDefault();
		inCartcount.innerText = parseInt(inCartcount.innerText) + parseInt(cardCounter.value);
		if (cardCounter.value != 0) {
			addToCartBtn.classList.remove('dish-card__add-to-cart-btn');
			addToCartBtn.classList.add('dish-card__add-to-cart-btn--active');
		}
	});
	cardCounter.value = count;
});
