$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger,.menu__list').toggleClass('active');
        $('body').toggleClass('lock')
    })
})

$(function(){
	$('.slider__top').slick({
		dots: true,
		sliderToShow: 4,
		variableWidth: true,
		arrows: false,
		responsive: [
			{
			  breakpoint: 1300,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				variableWidth: false
			  }
			},
			{
				breakpoint: 768,
				settings: {
					sliderToShow: 1,
					variableWidth: false
				}
			}
		]
	});
});

$(function(){
	$('.slider__bottom').slick({
		dots: true,
		sliderToShow: 3,
		variableWidth: true,
		arrows: false,
		responsive: [
			{
			  breakpoint: 1300,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				variableWidth: false
			  }
			},
			{
				breakpoint: 576,
				settings: {
					sliderToShow: 1,
					variableWidth: false
				}
			}
		]
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