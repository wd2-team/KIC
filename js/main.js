$(function(){

    // 動画再生後フェード
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
            $('#mainvideowrapper').addClass('showvideo');
            let mainvideowrap = document.getElementById('mainvideowrapper');
            mainvideowrap.insertAdjacentHTML('beforeend', '<video id="mainvideo01" playsinline muted autoplay><source src="images/start.mp4"></video>');
        },3000);
        setTimeout(function(){
            let mainvideowrap = document.getElementById('mainvideowrapper');
            mainvideowrap.insertAdjacentHTML('beforeend', '<video id="mainvideo02" playsinline muted autoplay loop><source src="images/loop.mp4"></video>');
        },3500);
        setTimeout(function(){
            $('#topheader h1').fadeIn(1000);
            $('#topheader ul').fadeIn(1000);
            $('#mobiletopheader ul').fadeIn(1000);
            $('#mainlogo').fadeIn(1000);
            $('#footerleft').fadeIn(1000);
            $('#footerright').fadeIn(1000);
            $('#topopenbtn').fadeIn(1000);
        },6000);
        setTimeout(function(){
            $('#topleft').fadeIn();
            $('#topleft').addClass('active');
        },7000);
        setTimeout(function(){
            $('#topright').fadeIn();
            $('#topright').addClass('active');
        },8000);
        setTimeout(function(){
            $('#main a.displaysp').fadeIn(1000);
        },8500);
        setTimeout(function(){
            $('#topright p').fadeIn();
            $('#topright p').addClass('active');
        },9000);
        setTimeout(function(){
            $('#main a.nondisplaysp').fadeIn(1000);
        },10300);
    });
    btn_topskip.addEventListener("click", (e) => {
        video.currentTime += 999;
    });

    // mainvideo01挿入し終了後非表示
    var mainvideowrapper = document.getElementById('mainvideowrapper');
    function example() {
        var mainvideo = document.getElementById('mainvideo01');
        mainvideo.addEventListener("ended", function() {
            $('#mainvideo01').css({display: 'none'});
        });
    }
    var mo = new MutationObserver(example);
    mo.observe(mainvideowrapper, {childList: true});

});

// モーダルウィンドウを開く
$('.js-modal-open').on('click', function(){
    var target = $(this).data('target');
    var modal = document.getElementById(target);
    winScrollTop = $(window).scrollTop();
    $(modal).fadeIn();
    $('#topopenbtn').fadeOut();
    return false;
});
// モーダルウィンドウを閉じる
$('.js-modal-close').on('click', function(){
    $('body,html').stop().animate({scrollTop:winScrollTop}, 100);
    $('.js-modal').fadeOut();
    $('#topopenbtn').fadeIn();
    return false;
});

// menu
$("#topopenbtn").click(function () {
    $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
    $("#navleftnumber").toggleClass('panelactive');
    $('#navleftnumber img').fadeToggle();
    $("#navlogo").toggleClass('panelactive');
    $('#navlogowrapper').fadeToggle();
    $("#navleft").toggleClass('panelactive');
    $('#navleft a').fadeToggle();
    $("#navright").toggleClass('panelactive');
    $('#navright li').fadeToggle().css('display','inline-block');
    $(".circle-bg").toggleClass('circleactive');
});
$("#openbtn").click(function () {
    $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
    $("#navleftnumber").toggleClass('panelactive');
    $('#navleftnumber img').fadeToggle();
    $("#navlogo").toggleClass('panelactive');
    $('#navlogowrapper').fadeToggle();
    $("#navleft").toggleClass('panelactive');
    $('#navleft a').fadeToggle();
    $("#navright").toggleClass('panelactive');
    $('#navright li').fadeToggle().css('display','inline-block');
    $(".circle-bg").toggleClass('circleactive');
});
// $("#g-nav a").click(function () {
//     $("#topopenbtn").removeClass('active');
//     $("#openbtn").removeClass('active');
//     $("#g-nav").removeClass('panelactive');
//     $("#navleftnumber").removeClass('panelactive');
//     $('#navleftnumber img').fadeToggle();
//     $("#navlogo").removeClass('panelactive');
//     $('#navlogowrapper').fadeToggle();
//     $("#navleft").removeClass('panelactive');
//     $('#navleft a').fadeToggle();
//     $("#navright").removeClass('panelactive');
//     $('#navright li').fadeToggle().css('display','inline-block');
//     $(".circle-bg").removeClass('circleactive');
// });

// ロード
$(window).on('load', function(){
    // ユーザーエージェント
    // if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0) {
    //     $('#css_link').attr("href", "css/mobile.css");
    // } else if (navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    //     $('#css_link').attr("href", "css/tablet.css");
    // } else {
    //     $('#css_link').attr("href", "css/style.css");
    // }

    $('#page00').css('pointer-events', 'none');
    $('#page01').css('pointer-events', 'none');
    $('#pageheaderline').fadeIn();
    $('#pageleftnumber img:first-child').fadeIn();
    $('#pageleftnumber img:first-child').addClass('active');
    $('#pageleftnumber img:nth-child(3)').fadeIn();
    $('#pageleftnumber img:nth-child(3)').addClass('active');
    setTimeout(function(){
        $('#pageleftnumber img:nth-child(2)').css('opacity', '1');
    }, 500);
    setTimeout(function(){
        $('#pageleftnumber img:first-child').css('opacity', '0.3');
        $('#pageleftnumber img:nth-child(3)').css('opacity', '0.3');
    },2300);
    setTimeout(function(){
        $('#pageleftnumber img:nth-child(2)').css('opacity', '0.3');
    },2800);
    setTimeout(function(){
        $('#pageheader').fadeIn(1000);
        $('#mobileheader ul').fadeIn(1000);
        $('#openbtn').fadeIn(1000);
        $('#slidemenu').css('margin-right', '50px');
    },3800);
    setTimeout(function(){
        $('#page00innerscroll #pageright').fadeIn();
        $('#page00innerscroll #pageright').addClass('active');
        $('#page01innerscroll #pageright').fadeIn();
        $('#page01innerscroll #pageright').addClass('active');
    },4400);
    setTimeout(function(){
        $('#page00innerscroll #pageright p').fadeIn();
        $('#page00innerscroll #pageright p').addClass('active');
        $('#page01innerscroll #pageright p').fadeIn();
        $('#page01innerscroll #pageright p').addClass('active');
    },5400);
    setTimeout(function(){
        $('#pagescroll').fadeIn();
        $('#page00').css('pointer-events', 'all');
        $('#page01').css('pointer-events', 'all');
    },6900);

});

// スクロールで表示
var page00innerscroll = document.getElementById( 'page00innerscroll' );
page00innerscroll.onscroll = function(){
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
        $('#page00back').addClass('showvideo');
        let page00back = document.getElementById('page00back');
        if (document.getElementById("topvideo") == null) {
            page00back.insertAdjacentHTML('beforeend', '<video id="topvideo" src="images/car02.mp4" autoplay muted playsinline></video>');
        }
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

// 画像読み込み
if(window.navigator.userAgent.indexOf("Chrome") >= 0 && window.navigator.userAgent.indexOf("Edge") == -1){
}else{
    APNG.ifNeeded().then(function () {
        var images = document.querySelectorAll(".apng-image");
        for (var i = 0; i < images.length; i++){ APNG.animateImage(images[i]); }
    });
}

// スマホ横向き禁止
window.onload = ()=>{
  setResult();
}
var orientationtimer = 0;
window.onresize = function () {
  if (orientationtimer > 0) {
    clearTimeout(orientationtimer);
  }
  orientationtimer = setTimeout(function () {
    setResult();
  }, 200);
};
window.addEventListener("orientationchange", ()=>{
  setResult();
});
function setResult(){
  const angle = getAngle();
  if( angle.isPortrait ) {
    console.log('縦向き');
  }
  else{
    console.log('横向き');
    alert('画面を縦にしてください');
  }
}
function getAngle(){
  let angle = screen && screen.orientation && screen.orientation.angle;
  if ( angle === undefined ) {
    angle = window.orientation;
  }
  const isPortrait = (angle === 0);
  return({
    value: angle,
    isPortrait: isPortrait,
    isLandscape: ! isPortrait,
  });
}