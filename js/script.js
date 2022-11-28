const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

headerScroll();
function headerScroll() {
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 0 && $(this).scrollTop() < windowHeight) {
			const translateDifference = 30;
			const translateDefault = 40;
			const translate = translateDefault - (translateDifference / windowHeight * $(window).scrollTop());
			$('.header').css('top', translate);
		};
		if ($(this).scrollTop() >= 0 && $(this).scrollTop() < windowHeight / 2.3) {
			const opacityDifference = 1;
			const opacityDefault = 1;
			const opacity = opacityDefault - (opacityDifference / windowHeight * 2.3 * $(window).scrollTop());
			$('.main-screen__text').css('opacity', opacity);
		};
	})
	if ($(window).scrollTop() >= 0 && $(window).scrollTop() < windowHeight) {
		const topDifference = 30;
		const topDefault = 40;
		const translate = topDefault - (topDifference / windowHeight * $(window).scrollTop());
		$('.header').css('top', translate);
	} else {
		$('.header').css('top', '10px');
	};
	if ($(this).scrollTop() >= 0 && $(this).scrollTop() < windowHeight / 2.3) {
		const opacityDifference = 1;
		const opacityDefault = 1;
		const opacity = opacityDefault - (opacityDifference / windowHeight * 2.3 * $(window).scrollTop());
		$('.main-screen__text').css('opacity', opacity);
	};
};

function burgerMenuToggle() {
	burgerButton.classList.toggle('active');
	burgerBody.classList.toggle('active');
	bodyLock.classList.toggle('lock');
	if (header.style.top == '15px') {
		$('.header__burger').css('left', 15);
		headerScroll();
		$('.header__logo, .header__bag').css('opacity', '1');
	} else {
		$('.header__burger').css('left', windowWidth - 15 - 30);
		header.style.top = '15px';
		$('.header__logo, .header__bag').css('opacity', '0');
	};
};
function burgerMenuRemove() {
	burgerButton.classList.remove('active');
	burgerBody.classList.remove('active');
	bodyLock.classList.remove('lock');
	header.classList.remove('active');
	$('.header__burger').css('left', 15);
	headerScroll();
	$('.header__logo, .header__bag').css('opacity', '1');

};
const burgerButton = document.querySelector('.header__burger');
const burgerBody = document.querySelector('.header__row');
const bodyLock = document.querySelector('body');
const header = document.querySelector('.header');
burgerButton.onclick = burgerMenuToggle;
$('.header__link').click(burgerMenuRemove);

if (windowWidth < 767) {
	$('.slider').slick({
		arrows: false,
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		waitForAnimate: false,
		autoplay: true,
		autoplaySpeed: 3500,
	});
};