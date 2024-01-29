import $ from 'jquery';
import 'slick-slider';

$('.reviews__slider-list').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: '<button type="button" class="header__slider-prev header__slider-arrows"></button>',
	nextArrow: '<button type="button" class="header__slider-next header__slider-arrows"></button>',
	adaptiveHeight: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {},
		},
		{
			breakpoint: 600,
			settings: {
				arrows: false,
			},
		},
		{
			breakpoint: 360,
			settings: {
				arrows: false,
			},
		},
	],
});
