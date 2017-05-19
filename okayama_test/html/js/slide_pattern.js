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
    });
	
	
	var obj = $('#topPickupBox .bxslider').bxSlider({
        auto: true,
		speed: 800,
		easing: 'ease',
		infiniteLoop: true,
		pause: 6000,
		controls: false,
		onSlideAfter: function () { obj.startAuto(); },<!--停止後自動再生-->
    });
});