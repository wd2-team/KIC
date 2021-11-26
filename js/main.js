$(function(){

    // // 動画再生後フェード
    var video = document.getElementById('topvideo');
    var btn_topskip = document.getElementById("btn_topskip");
    video.addEventListener("ended", function() {
        $('#topvideowrapper').fadeOut();
        setTimeout(function(){
            $('header').fadeIn();
            $('footer').fadeIn();
            $('#topheader').fadeIn();
        },200);
        setTimeout(function(){
            $('#mainvideowrapper').fadeIn();
        },3000);
        setTimeout(function(){
            $('#topheader h1').fadeIn(1000);
            $('#topheader ul').fadeIn(1000);
            $('#mainlogo').fadeIn(1000);
            $('#footerleft').fadeIn(1000);
            $('#footerright').fadeIn(1000);
        },6000);
        setTimeout(function(){
            $('#topleft').fadeIn();
            $('#topleft').addClass('active');
        },8000);
        setTimeout(function(){
            $('#topright').fadeIn();
            $('#topright').addClass('active');
        },9000);
        setTimeout(function(){
            $('#main a#mainlink').fadeIn(1000);
        },10000);
    });
    btn_topskip.addEventListener("click", (e) => {
        video.currentTime += 999;
    });

    var mainvideo = document.getElementById('mainvideo01');
    mainvideo.addEventListener("ended", function() {
        $('#mainvideo01').fadeOut();
    });

});

    // スクロールで表示
    var box = document.getElementById( 'pageinnerscroll' );
    box.onscroll = function(){
        $(".page00innerscroll-p").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            if (scroll > blockPosition - windowHeight + 150) {
                $(this).css('opacity', '1');
                $(this).addClass("active");
            }
        });
        var scroll = $(window).scrollTop();
        var page00p03Position = $('#page00innerscroll-p03').offset().top;
        var windowHeight = $(window).height();
        if (scroll > page00p03Position - windowHeight + 150) {
            $('#page00back video').fadeIn();
        }
    };

// ロード
$(window).on('load', function(){

    $('#page00').css('pointer-events', 'none');
    $('#pageheaderline').fadeIn();
    $('#pageleftnumber img:nth-child(1)').fadeIn();
    $('#pageleftnumber img:nth-child(1)').addClass('active');
    $('#pageleftnumber img:nth-child(3)').fadeIn();
    $('#pageleftnumber img:nth-child(3)').addClass('active');
    setTimeout(function(){
        $('#pageleftnumber img:nth-child(2)').fadeIn();
    }, 500);
    setTimeout(function(){
        $('#pageleftnumber img').css('opacity', '0.3');
    },3000);
    setTimeout(function(){
        $('#pageheader').fadeIn(1000);
        $('#slidemenu').css('margin-right', '50px');
    },4500);
    setTimeout(function(){
        $('#pageinnerscroll #pageright a #pagerightbg').fadeIn();
        $('#pageinnerscroll #pageright a #pagerightbg').addClass('active');
    },6000);
    setTimeout(function(){
        $('#pageinnerscroll #pageright p').fadeIn();
        $('#pageinnerscroll #pageright p').addClass('active');
    },7000);
    setTimeout(function(){
        $('#pagescroll').fadeIn();
        $('#page00').css('pointer-events', 'all');
    },9000);

});

if(window.navigator.userAgent.indexOf("Chrome") >= 0 && window.navigator.userAgent.indexOf("Edge") == -1){
    // Chrome の場合は WebP ファイルが表示される
  }else{
    // Chrome 以外の場合は APNG 利用可否を判定する
    APNG.ifNeeded().then(function () {
      // APNG に未対応のブラウザ(例：IE, Edge)では、JSライブラリ「apng-canvas」により表示可能にする
      var images = document.querySelectorAll(".apng-image");
      for (var i = 0; i < images.length; i++){ APNG.animateImage(images[i]); }
    });
  }