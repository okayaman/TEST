// モーダルウィンドウ
//LANGUAGE/MOVIE
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
	
	//タイトル(SPのみスクロールで表示)
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




// フッターコピーライト西暦自動表示
function year() {  
	var data = new Date();  
	var now_year = data.getFullYear();  
	document.write(now_year);  
} 



