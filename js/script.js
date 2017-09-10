$(document).ready(function(){
	function setBannerHeight(selector){
		var bannerWidth = selector.width();
		selector.height(bannerWidth);
	}
	
	function getTopIndent(indent){
		return $('.wrap').width()/100*indent;
	}
	
	
	setBannerHeight($('.work-process li'));
	setBannerHeight($('.featured-work li'));
	$('.services li').height($('.services li').width()/100*90);
	$('.btn').height($('.btn').width()/100*20.833333333);
	
	$('.work-process').css('top', getTopIndent(63.888888888));
	$('.featured-work').css('top', getTopIndent(117.361111111));
	$('header').height(getTopIndent(63.888888888));
	$('form').height($('form').width()/100*105.405405405);
	
	
	$( window ).resize(function() {
		setBannerHeight($('.work-process li'));
		setBannerHeight($('.featured-work li'));
		$('.services li').height($('.services li').width()/100*90);
		$('.btn').height($('.btn').width()/100*20.833333333);
		
		$('.work-process').css('top', getTopIndent(63.888888888));
		$('.featured-work').css('top', getTopIndent(117.361111111)); /* 1690px */
		$('.services').css('top', getTopIndent(231.458333333));
		
		$('header').height(getTopIndent(63.888888888));
		$('form').height($('form').width()/100*105.405405405);
	});
});