function sliderSwitcher() {
	const insideBtnEl = document.querySelector('.aboutUs__inside-btn');
	const outsideBtnEl = document.querySelector('.aboutUs__outside-btn');

	const insideSlider = document.querySelector('.aboutUs__slider-inside-container');
	const outsideSlider = document.querySelector('.aboutUs__slider-outside-container');
	// const outsideSliderMini = document.querySelector('.aboutUs__slider-outside-mini');

		// outsideSlider.classList.add('none');
	
	insideBtnEl.addEventListener('click', () => {
		outsideSlider.classList.add('none');
		// outsideSliderMini.classList.add('visually-hidden');
		insideSlider.classList.remove('none');

	});

	outsideBtnEl.addEventListener('click', () => {
		insideSlider.classList.add('none');
		outsideSlider.classList.remove('none');
		// outsideSliderMini.classList.remove('visually-hidden');
	});
}
export default sliderSwitcher;
