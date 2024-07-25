function mobileNav() {

	// Mobile nav button
	const navBtn = document.querySelector('.mobile-burger-btn');
	const nav = document.querySelector('.mobile-nav__inner');
	const closeBtn = document.querySelector('.mobile-nav__close');
	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--active');
		document.body.classList.toggle('no-scroll');
	};
	closeBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--active');
		document.body.classList.toggle('no-scroll');
	};
}
export default mobileNav;
