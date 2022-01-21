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
try {
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
        var page00p02Position = $('#page00innerscroll-p02').offset().top;
        if (scroll > page00p02Position - windowHeight + 150) {
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
} catch {}

try {
    var page01innerscroll = document.getElementById( 'page01innerscroll' );
    page01innerscroll.onscroll = function(){
        $(".page01innerscroll-p01").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            if (scroll > blockPosition - windowHeight + 150) {
                $(this).css('opacity', '1');
                $(this).addClass("active");
            }
        });
        $(".page01innerscroll-p02").each(function() {
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
        var page01imgbottompPosition = $('#page01innerscroll-imgbottomp').offset().top;
        if (scroll > page01imgbottompPosition - windowHeight + 150) {
            $('#page01back').addClass('showvideo');
            let page01back = document.getElementById('page01back');
            if (document.getElementById("topvideo") == null) {
                page01back.insertAdjacentHTML('beforeend', '<video id="topvideo" src="images/car02.mp4" autoplay muted playsinline></video>');
            }
        }
        var page01imgtopleftPosition = $('#page01innerscroll-imgtopleft').offset().top;
        if (scroll > page01imgtopleftPosition - windowHeight + 150) {
            setTimeout(function(){
                $('#page01innerscroll-imgtopleft img:nth-child(1)').css('opacity', '1');
                $('#page01innerscroll-imgtopleft img:nth-child(1)').addClass("active");
                $('#page01innerscroll-imgtopleft img:nth-child(3)').css('opacity', '1');
                $('#page01innerscroll-imgtopleft img:nth-child(3)').addClass("active");
            },500);
            setTimeout(function(){
                $('#page01innerscroll-imgtopleft img:nth-child(2)').attr('src', 'images/levin_logo_animated.svg');
                $('#page01innerscroll-imgtopcarline').attr('src', 'images/carline.svg');
            },1000);
        }
        var page01label01Position = $('#page01innerscroll-label01').offset().top;
        if (scroll > page01label01Position - windowHeight + 150) {
            $('#page01innerscroll-label01').addClass('boxactive');
            setTimeout(function(){
                $('#page01innerscroll-label01 span:nth-child(3)').css('opacity', '1');
                $('#page01innerscroll-label01 span:nth-child(3)').addClass("active");
            },500);
            setTimeout(function(){
                $('#page01innerscroll-label01 span:nth-child(1)').css('opacity', '1');
                $('#page01innerscroll-label01 span:nth-child(1)').addClass("active");
            },1000);
        }
        var page01p0103Position = $('#page01innerscroll-p01-03').offset().top;
        if (scroll > page01p0103Position - windowHeight + 150) {
            setTimeout(function(){
                $('#page01innerscroll-p01line').fadeIn(3000);
            },1500);
        }
        var page01centerPosition = $('#page01innerscroll-center').offset().top;
        if (scroll > page01centerPosition - windowHeight + 150 + 200) {
            $('#page01innerscroll-centercar').fadeIn(3000);
        }
        var page01centerpPosition = $('#page01innerscroll-centerp').offset().top;
        if (scroll > page01centerpPosition - windowHeight + 150 + 600) {
            $('#page01innerscroll-centerp').css('opacity', '1');
            $('#page01innerscroll-centerp').addClass("active");
        }
        var page01centerpmobilePosition = $('#page01innerscroll-centerpmobile').offset().top;
        if (scroll > page01centerpmobilePosition - windowHeight + 150) {
            $('#page01innerscroll-centerpmobile').css('opacity', '1');
            $('#page01innerscroll-centerpmobile').addClass("active");
        }
        var fadedelaySpeed = 300;
        $(".fade_trigger1 .fade_image_effect").each(function(i){
            var element = $(".fade_trigger1").offset().top;
            if (scroll > element - windowHeight + windowHeight / 5){
                $(this).delay(i*(fadedelaySpeed)).queue(function(){
                    $(this).addClass("fadeactive");
                });
            }
        });
        var page01centerfadePosition = $('#page01innerscroll-fade').offset().top;
        if (scroll > page01centerfadePosition - windowHeight) {
            $('#page01innerscroll-centerline01').fadeIn(3000);
        }
        if (scroll > page01centerfadePosition - windowHeight + 150) {
            setTimeout(function(){
                $('#page01innerscroll-fade .fade_image_effect span').css('opacity', '1');
                $('#page01innerscroll-fade .fade_image_effect span').addClass("active");
            },1500);
        }
        if (scroll > page01centerfadePosition - windowHeight + 300) {
            $('#page01innerscroll-centerline02').fadeIn(3000);
        }
        var page01label02Position = $('#page01innerscroll-label02').offset().top;
        if (scroll > page01label02Position - windowHeight + 150) {
            $('#page01innerscroll-label02').addClass('boxactive');
            // setTimeout(function(){
            //     $('#page01innerscroll-label02 span:nth-child(3)').fadeIn(1500);
            // },500);
            // setTimeout(function(){
            //     $('#page01innerscroll-label02 span:nth-child(1)').fadeIn(1500);
            // },2000);
            setTimeout(function(){
                $('#page01innerscroll-label02 span:nth-child(1)').fadeIn(1500);
            },500);
        }
        $('#page01innerscroll-imgscroll .js-slick').not('.slick-initialized').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next')
        });

        var page01imgscrollsliderinnerPosition = $('#page01innerscroll-imgscroll .section-slider-inner').offset().top;
        if (scroll > page01imgscrollsliderinnerPosition - windowHeight + 150) {
            $('#page01innerscroll-imgscroll .section-slider-inner-box img').fadeIn(1500);
            setTimeout(function(){
                $('#page01innerscroll-imgscroll .section-slider-inner-box span').css('opacity', '1');
                $('#page01innerscroll-imgscroll .section-slider-inner-box span').addClass("active");
            },1500);
        }

        var page01imgbottomPosition = $('#page01innerscroll-imgbottom').offset().top;
        if (scroll > page01imgbottomPosition - windowHeight + 150) {
            $('#page01innerscroll-imgbottomcar').fadeIn(1500);
            setTimeout(function(){
                $('#page01innerscroll-imgbottomline').fadeIn(3000);
            },1500);
        }
        var page01imgbottompPosition = $('#page01innerscroll-imgbottomp').offset().top;
        if (scroll > page01imgbottompPosition - windowHeight + 150) {
            $('#page01innerscroll-imgbottomp').css('opacity', '1');
            $('#page01innerscroll-imgbottomp').addClass("active");
            $('#pageleftnumber img:nth-child(3)').css('opacity', '0');
        } else {
            $('#pageleftnumber img:nth-child(3)').css('opacity', '0.3');
        }
        var page01bluePosition = $('#pageblue').offset().top;
        if(scroll > page01bluePosition - 150) {
            $('#pagescroll').fadeOut();
        } else {
            $('#pagescroll').fadeIn();
        }
    };
} catch {}

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
  if( !angle.isPortrait ) {
    $('#norotate').css('display', 'block');
    $('#wrapper').css('display', 'none');
  } else {
    $('#norotate').css('display', 'none');
    $('#wrapper').css('display', 'block');
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