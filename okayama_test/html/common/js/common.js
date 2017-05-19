
function moduloMenu(){
	setTimeout(function(){
		var repeat = 158;
	
		var content = $("#menu_content").height();
		var div = content / repeat;
		var modulo = content % repeat;
		if(modulo > 0){
			var newvalue = $("#menu_content").height() + (repeat - modulo) - 70; /*(40 = margin)*/
			$("#menu_content").css("height", newvalue);
		}													
	}, 300);
}


/* Set min-height to wrapper if menu is longer than container */
function wrapperAdjustment(){
	moduloMenu();
	var menu = $("#menu").height()+350; /* + roughly container oversize */
	
	if(menu > $("#container").height()){	
		$("#wrapper").css("min-height", menu);
		moduloMenu();
		indexFooter();
	}else{
		$("#wrapper").css("min-height", "inherit");
		moduloMenu();
		indexFooter();
	}
}

/* bring front/back #goth depending on the height of the page. */
function indexFooter(){
	if($("#main").height() > 1800)
		$("#goth").css("z-index", 0);
	else
		$("#goth").css("z-index", -5);
}


/* IE8 PNG fix */
function hidePNG(zone){
	if($.browser.msie && jQuery.browser.version <= 8.0)
		zone.css("background-position", "10000px 10000px");	
}
function showPNG(zone, value){
	if($.browser.msie && jQuery.browser.version <= 8.0)
		zone.css("background-position", value);	
}

/* POPUP */
function popitup(url) {
		var height= 700;
		var width = 825;
	if ($.browser.mozilla) {
		newwindow=window.open(url,'NANA_MIZUKI_special','height='+height+',width='+width+',scrollbars=1,resizable=0,toolbar=0,status=0, location=0');
	}
	else {
		newwindow=window.open(url,'NANA_MIZUKI_special','height='+height+',width='+width+',scrollbars=yes,resizable=no,toolbar=no,status=no, location=no');
	}
	if (window.focus) {newwindow.focus()}
	return false;
}

$(document).ready(function(){
	/*  prevent click */
	$("#container img").bind("contextmenu",function(e){ return false; }).bind('dragstart', function(){ return false;});
	/*
	$("#container img").bind("contextmenu",function(e){
        return false;
    }).bind('click', function(){
        return false;
  }).bind('dragstart', function(){
        return false;
  });
	*/
	
//スマホ用アラート
var interval = 300;
$("#container img").bind("touchstart",function(){timer = setTimeout( function(){alert( "画像の保存はできません" );}, interval );
function clearFunction(){ clearTimeout( timer );}
$("#container img").bind("touchend touchmove touchcancel",clearFunction );});
	
	/* add back to top button in NEWS and PROFILE */
	$("#page.news #content > div, #page.profile #content > div")
		.append('<p class="pageTop"><a href="#body">ページTOPに戻る</a></p>');
	
	$("#page .pageTop").bind('click', function(event){
		$.smoothScroll({
			offset: 0,
                        direction: 'top'
                });
		event.preventDefault();
	});
	
	indexFooter();
        $('#header li.fanclub a').attr('href', 'http://fanclub.mizukinana.jp/');
        $('li.contact a').attr('href', 'https://cart.mizukinana.jp/help/fc_contact.aspx?ccode=CMOS');
});



