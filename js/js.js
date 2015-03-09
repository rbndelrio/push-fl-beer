$(document).ready(function () {
	var $bg          = $(".bgcoverize > .imgwrap > img"),
		imgContainer = $('.bgcoverize'),
	    yolo,
	    aspectRatio;


	function resizeBg() {
		$bg.each(function () {
			yolo = $(this);
		    aspectRatio  = yolo.width() / yolo.height();
		    imgContainer = $(this).parent().parent();
		    console.log(imgContainer);
			if ( (imgContainer.width() / imgContainer.height()) < aspectRatio ) {
			    $(this)
			    	.removeClass('img-cover-w')
			    	.addClass('img-cover-l');
			} else {
			    $(this)
			    	.removeClass('img-cover-l')
			    	.addClass('img-cover-w');
			}
		});

	}


	resizeBg();
	$(window).resize(function () {resizeBg();});
	$('.menu').click(function () {
		$('header').toggleClass('open collapsed');
	});
});