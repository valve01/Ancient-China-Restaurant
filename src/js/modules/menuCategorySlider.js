import $ from 'jquery';
import 'slick-slider';

$('.menu-categories__list').slick({
	// dots: true,
	// infinite: false,
	focusOnSelect: true,
	initialSlide:2,
	speed: 300,
	slidesToShow: 4,
	centerMode: true,
	swipeToSlide:true,
	variableWidth: true,
	prevArrow:
		'<button type="button" class="slick-prev slick-arrow menu-categories__menu-arrow-btn" style="background-image: url(img/sprite.svg#main--menu--arrow);"></button>',
	nextArrow:
		'<button type="button" class="slick-next slick-arrow menu-categories__menu-arrow-btn" style="background-image: url(img/sprite.svg#main--menu--arrow);"></button>',
});
// $('.menu-categories__link').preventDefault(e);
// $('.menu-categories__link').stopPropagation(e);



$('.menu-categories__link').on('click', (e) => {
	e.preventDefault();
	// $(this).siblings().removeClass('menu-categories__link--active');
	// $(this).addClass('menu-categories__link--active');
});
