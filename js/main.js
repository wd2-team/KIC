$(function(){

    // // 動画再生後フェード
    var video = document.getElementById('topvideo');
    var btn_topskip = document.getElementById("btn_topskip");
    video.addEventListener("ended", function() {
        $('#topvideowrapper').fadeOut();
        $('#index #mainwrapper').css('display','block');
        setTimeout(function(){
            $('header').fadeIn();
            $('footer').fadeIn();
            $('#topheader').fadeIn();
        },500);
        setTimeout(function(){
            // $('#mainvideowrapper').fadeIn();
            $('#mainvideowrapper').css({
                display: 'block',
                opacity: '1'
            });
        },3000);
        setTimeout(function(){
            $('#topheader h1').fadeIn(1000);
            $('#topheader ul').fadeIn(1000);
            $('#mobileheader ul').fadeIn(1000);
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
            $('#topright p').fadeIn();
            $('#topright p').addClass('active');
        },10000);
        setTimeout(function(){
            $('#main a#mainlink').fadeIn(1000);
        },11500);
    });
    btn_topskip.addEventListener("click", (e) => {
        video.currentTime += 999;
    });

    var mainvideo = document.getElementById('mainvideo01');
    mainvideo.addEventListener("ended", function() {
        $('#mainvideo01').fadeOut();
    });

});

    // モーダルウィンドウを開く
    $('.js-modal-open').on('click', function(){
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      // scrollPosition = $(window).scrollTop();
      // $('body').addClass('fixed').css({'top': -scrollPosition});
      winScrollTop = $(window).scrollTop();
      $(modal).fadeIn();
      return false;
    });

    // モーダルウィンドウを閉じる
    $('.js-modal-close').on('click', function(){
      // $('body').removeClass('fixed');
      // window.scrollTo( 0 , scrollPosition );
      $('body,html').stop().animate({scrollTop:winScrollTop}, 100);
      $('.js-modal').fadeOut();
      return false;
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
        var windowHeight = $(window).height();
        var page00p03Position = $('#page00innerscroll-p03').offset().top;
        if (scroll > page00p03Position - windowHeight + 150) {
            // $('#page00back').fadeIn();
            $('#page00back').css({
                display: 'block',
                opacity: '1'
            });
        }
        var page00underlogoPosition = $('#pageunderlogo').offset().top;
        if (scroll > page00underlogoPosition - windowHeight + 150) {
            $('#pageunderlogo img').fadeIn(1500);
            $('#pageleftnumber img:nth-child(3)').css('opacity', '0');
        } else {
            $('#pageleftnumber img:nth-child(3)').css('opacity', '0.3');
        }
        var page00bluePosition = $('#pageblue').offset().top;
        if(scroll > page00bluePosition - 150) {
            $('#pagescroll').fadeOut();
        } else {
            $('#pagescroll').fadeIn();
        }
    };

    // // vh
    // const setVh = () => {
    //   const vh = window.innerHeight * 0.01;
    //   document.documentElement.style.setProperty('--vh', `${vh}px`);
    //   console.log(vh);
    // };
     
    // window.addEventListener('load', setVh);
    // window.addEventListener('resize', setVh);
    // window.addEventListener('resize', resizealert);

    // function resizealert() {
    //   //リサイズ時に実行する処理
    //   alert("スクロールされた？");
    // }

// ロード
$(window).on('load', function(){

    $('#page00').css('pointer-events', 'none');
    $('#pageheaderline').fadeIn();
    $('#pageleftnumber img:first-child').fadeIn();
    $('#pageleftnumber img:first-child').addClass('active');
    $('#pageleftnumber img:nth-child(3)').fadeIn();
    $('#pageleftnumber img:nth-child(3)').addClass('active');
    setTimeout(function(){
        // $('#pageleftnumber img:nth-child(2)').fadeIn();
        $('#pageleftnumber img:nth-child(2)').css('opacity', '1');
    }, 500);
    setTimeout(function(){
        $('#pageleftnumber img').css('opacity', '0.3');
    },3000);
    setTimeout(function(){
        $('#pageheader').fadeIn(1000);
        $('#mobileheader ul').fadeIn(1000);
        $('#slidemenu').css('margin-right', '50px');
    },4500);
    setTimeout(function(){
        $('#pageinnerscroll #pageright').fadeIn();
        $('#pageinnerscroll #pageright').addClass('active');
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
}else{
    APNG.ifNeeded().then(function () {
        var images = document.querySelectorAll(".apng-image");
        for (var i = 0; i < images.length; i++){ APNG.animateImage(images[i]); }
    });
}