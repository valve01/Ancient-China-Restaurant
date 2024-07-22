const counters = document.querySelectorAll('.dish-card__counter-block');

counters.forEach((counter) => {
	let count = 0;
    const incrementBtn = counter.querySelector('.dish-card__plus');
    const decrementBtn = counter.querySelector('.dish-card__minus');

    incrementBtn.addEventListener('click', (e) => {
		e.preventDefault()
        count++;
        counter.querySelector('.dish-card__counter').value = count;
    });

    decrementBtn.addEventListener('click', (e) => {
		e.preventDefault()
        if (count > 0) {
            count--;
            counter.querySelector('.dish-card__counter').value = count;
        }
    });
    counter.querySelector('.dish-card__counter').value = count;
})