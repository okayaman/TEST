// モーダルウィンドウ
//LANGUAGE
/*
$(document).ready(function(){
				$(".inline").colorbox({inline:true, width:"50%"});
				//Example of preserving a JavaScript event for inline calls.
				$("#click").click(function(){ 
					$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
					return false;
				});
			});*/
/*
$(document).ready(function(){
    $(".inline").colorbox({
    inline:true,
    maxWidth:"90%",
    maxHeight:"90%",
    opacity: 0.7
  });
});*/

//MOVIE
$(document).ready(function(){
	$(".youtube").colorbox({
		iframe:true,
		innerWidth:640,
		innerHeight:360
	});
	$(".inline").colorbox({inline:true, width:"50%"});
	$(function() {
		$('a[rel^=lightbox]').colorbox({maxWidth:'100%',maxHeight:'100%',speed:'200'});
	});
});

// 【LINK】スムーズスクロール
(function($) {
	$(function() {
// for rollover
	var postfix = '_on';
	$('img.rollover').not('[src*="'+ postfix +'."]').each(function() {
		var img = $(this);
		var src = img.attr('src');
		var src_on = src.substr(0, src.lastIndexOf('.'))
		           + postfix
		           + src.substring(src.lastIndexOf('.'));
		$('<img>').attr('src', src_on);
		img.hover(function() {
			img.attr('src', src_on);
		}, function() {
			img.attr('src', src);
		});
	});

// スムーズスクロール部分の記述 -->
	$(function(){
	   // #で始まるアンカーをクリックした場合に処理
	   $('a[href^=#]').click(function() {
	      // スクロールの速度
	      var speed = 1000; // ミリ秒
	      // アンカーの値取得
	      var href= $(this).attr("href");
	      // 移動先を取得
	      var target = $(href == "#" || href == "" ? 'html' : href);
	      // 移動先を数値で取得
	      var position = target.offset().top - 10;   
	      //SP-TBの場合調整値0に
	      var WinW = $(window).width();
	      if(WinW < 768) {
		      //var position = target.offset().top;//調整値（数値）;
			  var position = target.offset().top - 50;  
	      }
	      // スムーススクロール
	      $('body,html').animate({scrollTop:position}, speed, 'swing');
	      return false;
	   });
	});

	//pageTopボタン
	$(function() {
	    var topBtn = $('#page-top');    
	    topBtn.hide();
	    //スクロールが100に達したらボタン表示
	    $(window).scroll(function () {
	        if ($(this).scrollTop() > 100) {
	            topBtn.fadeIn();
	        } else {
	            topBtn.fadeOut();
	        }
	    });
	    //スクロールしてトップ
	    topBtn.click(function () {
	        $('body,html').animate({
	            scrollTop: 0
	        }, 500);
	        return false;
	    });
	});	
	
	//LIVE ZIPANGUタイトル(SPのみスクロールで表示)
	$(function() {
	    var ttlSP = $('#ttl-sp');    
	    ttlSP.hide();
		var WinW = $(window).width();    
	    //スクロールが100に達したらボタン表示
	    $(window).scroll(function () {
			if(WinW < 760) {
				if ($(this).scrollTop() > 100) {
	            	ttlSP.fadeIn();
	        	} else {
	            	ttlSP.fadeOut();
	        	}
			}
	    });
	    //スクロールしてトップ
	    ttlSP.click(function () {
	        $('body,html').animate({
	            scrollTop: 0
	        }, 500);
	        return false;
	    });
	});	
	});

})(jQuery);







// 【MENU】現在のページ(カレントページ)に合わせて画像を変更する
$(function(){
	$('#mNavi li a').each(function(){
		var $href = $(this).attr('href');
		if(location.href.match('news.html#ticket')) {
			$('#mNavi li#navi_ticket a').addClass('selected');
			$('[id$=HBlock]').hide();
			$('#ticketHBlock').show();
		} else if(location.href.match($href)) {
			$(this).addClass('selected');
		} else {
			$(this).removeClass('selected');
		}
	});
});


// 【小MENU】コンテンツ切替
$(document).ready(function(){
	if (location.hash == '#sizelist' && location.pathname.indexOf('goods.html') != -1) {
        $("#link_information").removeClass("selected");
        $("#link_lineup").addClass("selected");
    	$("#information").hide();
	} else {
    	$("#lineup").hide();
	}



//    $("#information").hide();
    $("#link_lineup").click(function(){
        if($(this).not(".selected")){
            $("#link_information").removeClass("selected");
            $(this).addClass("selected");
            $("#information").fadeOut("fast",function(){
                $("#lineup").fadeIn("fast");
            });
        }
        return false;
    });


    $("#link_information").click(function(){
        if($(this).not(".selected")){
            $("#link_lineup").removeClass("selected");
            $(this).addClass("selected");
            $("#lineup").fadeOut("fast",function(){
                $("#information").fadeIn("fast");
            });
        }
        return false;
    });


	/*GOODSページ下ボタン*/
    $("#link_lineup2").click(function(){
        if($(this).not(".selected")){
            $("#link_information").removeClass("selected");
            $("#link_lineup").addClass("selected");
            $("#information").fadeOut("fast",function(){
                $("#lineup").fadeIn("fast");
            });
			$('body,html').animate({
	            scrollTop: 0
	        }, 500);
        }
        return false;
    });

    $("#link_info2").click(function(){
        if($(this).not(".selected")){
            $("#link_lineup").removeClass("selected");
            $("#link_information").addClass("selected");
            $("#lineup").fadeOut("fast",function(){
                $("#information").fadeIn("fast");
            });
			$('body,html').animate({
	            scrollTop: 0
	        }, 500);
        }
        return false;
    });
});


// フレームアニメーション
(function($){
	$.fn.frameAnimation = function(options){
		var setElm = this,
		defaults = {
			setWidth: 160, // フレーム幅
			frameSpeed: 70, // フレームスピード
			maxFrame: 17, // 最大コマ数
			loop: true // ループ再生
		};
		var setting = $.extend(defaults,options);

		var frameTime = 0,
		setTimer = function(){
			var left = -(frameTime) * setting.setWidth;
			setElm.css({backgroundPosition: left + 'px' + ' 0'});
			frameTime++;
			if(frameTime >= setting.maxFrame){
				if(setting.loop){
					frameTime = 0;
					setTimeout(setTimer, setting.frameSpeed);
				}
			} else {
				setTimeout(setTimer, setting.frameSpeed);
			}
		}
		setTimer();
	}
})(jQuery);






// PC/SP 画像切り替え
$(function() {
  var $elem = $('.js-image-switch');
  var sp = '_sp.';
  var pc = '_pc.';
  // 画像を切り替えるウィンドウサイズ。
  var replaceWidth = 760;

  function imageSwitch() {
    var windowWidth = parseInt($(window).width());

    $elem.each(function() {
      var $this = $(this);
      if(windowWidth >= replaceWidth) {
        $this.attr('src', $this.attr('src').replace(sp, pc));
      } else {
        $this.attr('src', $this.attr('src').replace(pc, sp));
      }
    });
  }
  imageSwitch();
  // 0秒後処理を実行
  var resizeTimer;
  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      imageSwitch();
    }, 0);
  });

});







/*

$(document).ready(function(){
				$(".inline").colorbox({inline:true, width:"50%"});
				//Example of preserving a JavaScript event for inline calls.
				$("#click").click(function(){ 
					$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
					return false;
				});
			});
*/


// フッターコピーライト西暦自動表示
function year() {  
	var data = new Date();  
	var now_year = data.getFullYear();  
	document.write(now_year);  
} 



