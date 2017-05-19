
var fadeout;
	
function home_image(idx){	
	if(!$("#home_images > img:eq("+idx+")").length) /* if current idx image does not exist, restart to first image */
		idx = 0;
		
	next = idx+1;
	if(!$("#home_images > img:eq("+next+")").length) /* if next index does not exist, reset to first image */
		next = 0;
	
	fadeout = setTimeout(
		function(){
			$("#navigation img").removeClass('select');
			$("#navigation img:eq("+next+")").addClass('select');
			$("#home_images > img:eq("+next+")").fadeIn(1000);
			$("#home_images > img:eq("+idx+")").fadeOut(1000, function(){home_image(next);});
		},5000);
	
}
			
$(document).ready(function(){
	var html = $("#navigation").html();
	
	// hide all image but first + add nav
	$("#home_images > img").not(':eq(0)').each(function(){
		$(this).hide();
		$("#navigation").html($("#navigation").html()+html); // add navigation buttons
	});
	
	/* start AUTO MODE */
	home_image(0);
	
	/* MANUAL MODE */
	/* if more than one image, show navigation */
	if($("#home_images > img").length > 1){
		$("#navigation").show();
		$("#navigation img:eq(0)").addClass('select');
	}
	
	$("#navigation img").bind('click', function(event){
		if($("#home_images img").is(":animated")){
			return;
		}
		$("#navigation img").removeClass('select');
		$(this).addClass('select');
		
		clearTimeout(fadeout);
		$("#home_images > img:not('eq("+$(this).index()+")')").stop().fadeOut(1000);
		$("#home_images > img:eq("+$(this).index()+")").stop().fadeIn(1000, function(){
			$("#home_images > img:not(:visible)").css("opacity", "1");																																	 
		});
		
	});
	
});
