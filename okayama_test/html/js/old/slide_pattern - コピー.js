// 【JS_slider】SETTING
$(document).ready(function(){
    var obj = $('#topMainBlock .bxslider').bxSlider({
        auto: true,
		mode: 'fade',
		speed: 800,
		easing: 'ease',
		infiniteLoop: true,
		pause: 5000,
		controls: false,
		onSlideAfter: function () { obj.startAuto(); },<!--停止後自動再生-->
		<!--startSlide: 9-->
		<!--pager: true,-->
		<!--pagerType: 'full',-->
    });
	
	
	var obj = $('#topPickupBlock .bxslider').bxSlider({
        auto: true,
		mode: '•horizontal',
		speed: 800,
		easing: 'ease',
		infiniteLoop: true,
		pause: 3000,
		controls: false,
		onSlideAfter: function () { obj.startAuto(); },<!--停止後自動再生-->
		<!--startSlide: 9-->
		<!--pager: true,-->
		<!--pagerType: 'full',-->
    });
});


$(function () {
    $('#topMainBlock .bxslider').bxSlider();
    $('#topPickupBlock .bxslider').bxSlider({
        pagerCustom: '#bx-pager',
		startSlide: 1
		/*mode: '•horizontal',
		speed: 800,
		easing: 'ease',
		infiniteLoop: true,
		pause: 3000,
		controls: false,
		onSlideAfter: function () { obj.startAuto(); }*/
    });
});