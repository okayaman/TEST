$(document).ready(function(){
	wrapperAdjustment();							 
	$("#menu ul ul a").click(function(event){
		$("#menu ul ul a").removeClass('select');
		$(this).addClass('select');
		
		hidePNG($("#content > div"));
		$("#content > div:not(."+$(this).parent('li').attr("class")+")")
		.fadeOut(500, function(){
			wrapperAdjustment();
			showPNG($(this), "bottom right");
		});
		$("#content > div."+$(this).parent('li').attr("class"))
		.delay(400).fadeIn(500, function(){
			showPNG($(this), "bottom right");																																													
		});
		event.preventDefault();
	});
});
