$(document).ready(function () {
	var imgContainer = $('.bgcoverize'),
	    $bg          = $(".bgcoverize > .imgwrap > img"),
	    yolo         = $bg,
	    aspectRatio  = yolo.width() / yolo.height();

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
	$(window).resize(function () {
		resizeBg();
	});
	// function imageFun(wrapper) {
	// 	var img = $("img", wrapper);
	// 	console.log($(wrapper));
	// }
	// imageFun();
	// $(window).resize(function () {
	// 	$('.imgwrap').each(function () {
	// 		imageFun(this);
	// 	});
	// });
});