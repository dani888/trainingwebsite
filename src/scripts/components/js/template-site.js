$(function () {
	$('.veggie-hamburger-menu').on('click',function () {
		$(this).parent().toggleClass('open');
	});
	$(document).on('click','li',function () {
		if($(this).find('a').length){
			document.location.hash = $(this).find('a').attr('href');
		}
	})
});