const burgerButton = document.querySelector(".burger");
const burgerMenu = document.querySelector(".menu__list");

burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("burger__active");
    burgerMenu.classList.toggle("active");
});

$(function(){
	$('.slider__bottom').slick({
		dots: true,
		sliderToShow: 3,
		variableWidth: true,
		arrows: false
	});
});

$(function(){
    $('.popup-link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
});