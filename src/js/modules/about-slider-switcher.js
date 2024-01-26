function sliderSwitcher() {
	const insideBtnEl = document.querySelector('.aboutUs__inside-btn');
	const outsideBtnEl = document.querySelector('.aboutUs__outside-btn');

	const insideSlider = document.querySelector('.aboutUs__slider-inside-container');
	const outsideSlider = document.querySelector('.aboutUs__slider-outside-container');
	// const outsideSliderMini = document.querySelector('.aboutUs__slider-outside-mini');

		// outsideSlider.classList.add('none');
	
	insideBtnEl.addEventListener('click', () => {
		outsideSlider.classList.add('visually-hidden');
		// outsideSliderMini.classList.add('visually-hidden');
		insideSlider.classList.remove('visually-hidden');

	});

	outsideBtnEl.addEventListener('click', () => {
		insideSlider.classList.add('visually-hidden');
		outsideSlider.classList.remove('visually-hidden');
		// outsideSliderMini.classList.remove('visually-hidden');
	});
}
export default sliderSwitcher;
