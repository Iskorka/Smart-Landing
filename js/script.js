$(document).ready(function(){
	function setBannerHeight(selector){
		var bannerWidth = selector.width();
		selector.height(bannerWidth);
	}
	
	setBannerHeight($('.work-process li'));
	setBannerHeight($('.featured-work li'));
	
	$( window ).resize(function() {
		setBannerHeight($('.work-process li'));
		setBannerHeight($('.featured-work li'));
	});
});