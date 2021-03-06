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

// ロード
$(window).on('load', function(){

    $('#page00').css('pointer-events', 'none');
    $('#page01').css('pointer-events', 'none');
    $('#page02').css('pointer-events', 'none');
    $('#page03').css('pointer-events', 'none');
    $('#page04').css('pointer-events', 'none');
    $('#page05').css('pointer-events', 'none');
    $('#page06').css('pointer-events', 'none');
    $('#page07').css('pointer-events', 'none');
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
        $('#page02innerscroll #pageright').fadeIn();
        $('#page02innerscroll #pageright').addClass('active');
        $('#page03innerscroll #pageright').fadeIn();
        $('#page03innerscroll #pageright').addClass('active');
        $('#page04innerscroll #pageright').fadeIn();
        $('#page04innerscroll #pageright').addClass('active');
        $('#page05innerscroll #pageright').fadeIn();
        $('#page05innerscroll #pageright').addClass('active');
        $('#page06innerscroll #pageright').fadeIn();
        $('#page06innerscroll #pageright').addClass('active');
        $('#page07innerscroll #pageright').fadeIn();
        $('#page07innerscroll #pageright').addClass('active');
    },4400);
    setTimeout(function(){
        $('#page00innerscroll #pageright p').fadeIn();
        $('#page00innerscroll #pageright p').addClass('active');
        $('#page01innerscroll #pageright p').fadeIn();
        $('#page01innerscroll #pageright p').addClass('active');
        $('#page02innerscroll #pageright p').fadeIn();
        $('#page02innerscroll #pageright p').addClass('active');
        $('#page03innerscroll #pageright p').fadeIn();
        $('#page03innerscroll #pageright p').addClass('active');
        $('#page04innerscroll #pageright p').fadeIn();
        $('#page04innerscroll #pageright p').addClass('active');
        $('#page05innerscroll #pageright p').fadeIn();
        $('#page05innerscroll #pageright p').addClass('active');
        $('#page06innerscroll #pageright p').fadeIn();
        $('#page06innerscroll #pageright p').addClass('active');
        $('#page07innerscroll #pageright p').fadeIn();
        $('#page07innerscroll #pageright p').addClass('active');
    },5400);
    setTimeout(function(){
        $('#pagescroll').fadeIn();
        $('#page00').css('pointer-events', 'all');
        $('#page01').css('pointer-events', 'all');
        $('#page02').css('pointer-events', 'all');
        $('#page03').css('pointer-events', 'all');
        $('#page04').css('pointer-events', 'all');
        $('#page05').css('pointer-events', 'all');
        $('#page06').css('pointer-events', 'all');
        $('#page07').css('pointer-events', 'all');
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
    var now = new Date().getTime();
    page01innerscroll.onscroll = function(){
        $(".page01innerscroll-p01").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            if (scroll > blockPosition - windowHeight + 170) {
                $(this).css('opacity', '1');
                $(this).addClass("active");
            }
        });
        $(".page01innerscroll-p02").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            if (scroll > blockPosition - windowHeight + 170) {
                $(this).css('opacity', '1');
                $(this).addClass("active");
            }
        });
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var page01imgbottompPosition = $('#page01innerscroll-imgbottomp').offset().top;
        if (scroll > page01imgbottompPosition - windowHeight + 170) {
            $('#page01back').addClass('showvideo');
            let page01back = document.getElementById('page01back');
            if (document.getElementById("topvideo") == null) {
                page01back.insertAdjacentHTML('beforeend', '<video id="topvideo" src="images/car02.mp4" autoplay muted playsinline></video>');
            }
            $('#page01back video').fadeIn();
        } else {
            $('#page01back video').fadeOut();
        }
        var page01imgtopleftPosition = $('#page01innerscroll-imgtopleft').offset().top;
        if (scroll > page01imgtopleftPosition - windowHeight + 170) {
            setTimeout(function(){
                $('#page01innerscroll-imgtopleft img:nth-child(1)').css('opacity', '1');
                $('#page01innerscroll-imgtopleft img:nth-child(1)').addClass("active");
            },500);
            setTimeout(function(){
                $('#page01innerscroll-imgtopleft img:nth-child(3)').css('opacity', '1');
                $('#page01innerscroll-imgtopleft img:nth-child(3)').addClass("active");
            },1000);
            setTimeout(function(){
                $('#page01innerscroll-imgtopleft img:nth-child(2)').show().attr('src', 'images/levin_logo_animated.svg'+'?'+''+now);
                $('#page01innerscroll-imgtopcarline').show().attr('src', 'images/carline.svg'+'?'+''+now);
            },1500);
        }
        var page01label01Position = $('#page01innerscroll-label01').offset().top;
        if (scroll > page01label01Position - windowHeight + 170) {
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
        if (scroll > page01p0103Position - windowHeight + 170) {
            setTimeout(function(){
                $('#page01innerscroll-p01line').css('opacity', '1');
                $('#page01innerscroll-p01line').addClass("active");
            },1500);
        }
        var page01centerPosition = $('#page01innerscroll-center').offset().top;
        if (scroll > page01centerPosition - windowHeight + 170 + 200) {
            $('#page01innerscroll-centercar').fadeIn(5000);
        }
        var page01centerpPosition = $('#page01innerscroll-centerp').offset().top;
        if (scroll > page01centerpPosition - windowHeight + 170 + 600) {
            $('#page01innerscroll-centerp').css('opacity', '1');
            $('#page01innerscroll-centerp').addClass("active");
        }
        var page01centerpmobilePosition = $('#page01innerscroll-centerpmobile').offset().top;
        if (scroll > page01centerpmobilePosition - windowHeight + 170) {
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
            $('#page01innerscroll-centerline01').css('opacity', '1');
            $('#page01innerscroll-centerline01').addClass("active");
        }
        if (scroll > page01centerfadePosition - windowHeight + 170) {
            setTimeout(function(){
                $('#page01innerscroll-fade .fade_image_effect span').css('opacity', '1');
                $('#page01innerscroll-fade .fade_image_effect span').addClass("active");
            },1500);
        }
        if (scroll > page01centerfadePosition - windowHeight + 300) {
            $('#page01innerscroll-centerline02').css('opacity', '1');
            $('#page01innerscroll-centerline02').addClass("active");
        }
        var page01label02Position = $('#page01innerscroll-label02').offset().top;
        if (scroll > page01label02Position - windowHeight + 170) {
            $('#page01innerscroll-label02').addClass('boxactive');
            setTimeout(function(){
                $('#page01innerscroll-label02 span:nth-child(1)').fadeIn(1500);
            },500);
        }
        $('#page01innerscroll-imgscroll .js-slick').not('.slick-initialized').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            // prevArrow: '<img src="images/arrow_left.svg" class="slide-arrow prev-arrow animation">',
            // nextArrow: '<img src="images/arrow_right.svg" class="slide-arrow next-arrow animation">'
        });
        var page01imgscrollsliderinnerPosition = $('#page01innerscroll-imgscroll .section-slider-inner').offset().top;
        if (scroll > page01imgscrollsliderinnerPosition - windowHeight + 170) {
            $('#page01innerscroll-imgscroll .section-slider-inner-box img').fadeIn(1500);
            // setTimeout(function(){
            //     $('#page01innerscroll-imgscroll .section-slider-inner-box img.slide-arrow').css('opacity', '1');
            //     $('#page01innerscroll-imgscroll .section-slider-inner-box img.slide-arrow').addClass("active");
            // },500);
            setTimeout(function(){
                $('#page01innerscroll-imgscroll .section-slider-inner-box span').css('opacity', '1');
                $('#page01innerscroll-imgscroll .section-slider-inner-box span').addClass("active");
            },1500);
        }
        var page01imgbottomPosition = $('#page01innerscroll-imgbottom').offset().top;
        if (scroll > page01imgbottomPosition - windowHeight + 170) {
            $('#page01innerscroll-imgbottomcar').show().attr('src', 'images/carline2.svg'+'?'+''+now);
            setTimeout(function(){
                $('#page01innerscroll-imgbottomline').css('opacity', '1');
                $('#page01innerscroll-imgbottomline').addClass("active");
            },1500);
        }
        var page01imgbottompPosition = $('#page01innerscroll-imgbottomp').offset().top;
        if (scroll > page01imgbottompPosition - windowHeight + 170) {
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

try {
    var page02innerscroll = document.getElementById( 'page02innerscroll' );
    var now = new Date().getTime();
    page02innerscroll.onscroll = function(){
        $(".page02innerscroll-p01").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            if (scroll > blockPosition - windowHeight + 170) {
                $(this).css('opacity', '1');
                $(this).addClass("active");
            }
        });
        $(".page02innerscroll-p02").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            if (scroll > blockPosition - windowHeight + 170) {
                $(this).css('opacity', '1');
                $(this).addClass("active");
            }
        });
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var page02imgbottompPosition = $('#page02innerscroll-imgbottomp').offset().top;
        if (scroll > page02imgbottompPosition - windowHeight + 170) {
            $('#page02back').addClass('showvideo');
            let page02back = document.getElementById('page02back');
            if (document.getElementById("topvideo") == null) {
                page02back.insertAdjacentHTML('beforeend', '<video id="topvideo" src="images/car02.mp4" autoplay muted playsinline></video>');
            }
            $('#page02back video').fadeIn();
        } else {
            $('#page02back video').fadeOut();
        }
        var page02imgtopPosition = $('#page02innerscroll-imgtop').offset().top;
        if (scroll > page02imgtopPosition + 170) {
            setTimeout(function(){
                // $('#page02innerscroll-imgtop #page02innerscroll-imgtopmain').css('filter', 'grayscale(0)');
                $('#page02innerscroll-imgtop #page02innerscroll-imgtopmaincover').css('opacity', '0');
            },1000);
        }
        var page02titlePosition = $('#page02innerscroll-title').offset().top;
        if (scroll > page02titlePosition - windowHeight + 170) {
            $('#page02innerscroll-titlep').css('opacity', '1');
            $('#page02innerscroll-titlep').addClass("active");
            setTimeout(function(){
                $('#page02innerscroll-titleline').css('opacity', '1');
                $('#page02innerscroll-titleline').addClass("active");
            },500);
        }
        var page02label01Position = $('#page02innerscroll-label01').offset().top;
        if (scroll > page02label01Position - windowHeight + 170) {
            $('#page02innerscroll-label01').addClass('boxactive');
            setTimeout(function(){
                $('#page02innerscroll-label01 span:nth-child(3)').css('opacity', '1');
                $('#page02innerscroll-label01 span:nth-child(3)').addClass("active");
            },500);
            setTimeout(function(){
                $('#page02innerscroll-label01 span:nth-child(1)').css('opacity', '1');
                $('#page02innerscroll-label01 span:nth-child(1)').addClass("active");
            },1000);
        }
        var fadedelaySpeed = 300;
        $("#page02 #page02innerscroll-fade.fade_trigger1 .fade_image_effect").each(function(i){
            var element = $("#page02 #page02innerscroll-fade.fade_trigger1").offset().top;
            if (scroll > element - windowHeight + windowHeight / 5){
                $(this).delay(i*(fadedelaySpeed)).queue(function(){
                    $(this).addClass("fadeactive");
                });
                setTimeout(function(){
                    $('#page02innerscroll-center .fade_image_effect.fadeactive img').css('filter', 'grayscale(0)');
                },1500);
            }
        });
        var fadedelaySpeed = 300;
        $("#page02 #page02innerscroll-imgbottomimg.fade_trigger1 .fade_image_effect").each(function(i){
            var element = $("#page02 #page02innerscroll-imgbottom").offset().top;
            if (scroll > element - windowHeight + windowHeight / 5 + 70){
                $(this).delay(i*(fadedelaySpeed)).queue(function(){
                    $(this).addClass("fadeactive");
                });
                setTimeout(function(){
                    $('#page02innerscroll-imgbottomimg .fade_image_effect.fadeactive img').css('filter', 'grayscale(0)');
                },1500);
            }
        });
        var fadedelaySpeed = 300;
        $("#page02 #page02innerscroll-imgbottomimgsp.fade_trigger1 .fade_image_effect").each(function(i){
            var element = $("#page02 #page02innerscroll-imgbottom").offset().top;
            if (scroll > element - windowHeight + windowHeight / 5 + 440){
                $(this).delay(i*(fadedelaySpeed)).queue(function(){
                    $(this).addClass("fadeactive");
                });
                setTimeout(function(){
                    $('#page02innerscroll-imgbottomimgsp .fade_image_effect.fadeactive img').css('filter', 'grayscale(0)');
                },1500);
            }
        });
        $('#page02innerscroll-imgscroll .js-slick').not('.slick-initialized').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            // prevArrow: '<img src="images/arrow_left.svg" class="slide-arrow prev-arrow animation">',
            // nextArrow: '<img src="images/arrow_right.svg" class="slide-arrow next-arrow animation">'
        });
        var page02imgscrollsliderinnerPosition = $('#page02innerscroll-imgscroll .section-slider-inner').offset().top;
        if (scroll > page02imgscrollsliderinnerPosition - windowHeight + 170) {
            // $('#page02innerscroll-imgscroll .section-slider-inner-box img').fadeIn(1500);
            $('#page02innerscroll-imgscroll .section-slider-inner-box img').css('filter', 'grayscale(0)');
            // setTimeout(function(){
            //     $('#page02innerscroll-imgscroll .section-slider-inner-box img.slide-arrow').css('opacity', '1');
            //     $('#page02innerscroll-imgscroll .section-slider-inner-box img.slide-arrow').addClass("active");
            // },500);
            setTimeout(function(){
                $('#page02innerscroll-imgscroll .section-slider-inner-box span').css('opacity', '1');
                $('#page02innerscroll-imgscroll .section-slider-inner-box span').addClass("active");
            },1500);
        }
        var page02centerPosition = $('#page02innerscroll-center').offset().top;
        if (scroll > page02centerPosition - windowHeight + 170) {
            setTimeout(function(){
                $('#page02innerscroll-centerline01').css('opacity', '1');
                $('#page02innerscroll-centerline01').addClass("active");
            },1000);
        }
        if (scroll > page02centerPosition - windowHeight + 470) {
            setTimeout(function(){
                $('#page02innerscroll-centerimg').fadeIn(1500);
            },1000);
        }
        var page02imgbottomPosition = $('#page02innerscroll-imgbottom').offset().top;
        if (scroll > page02imgbottomPosition - windowHeight + 170) {
            $('#page02innerscroll-imgbottomline01').css('opacity', '1');
            $('#page02innerscroll-imgbottomline01').addClass("active");
            setTimeout(function(){
                $('#page02innerscroll-imgbottomimg').fadeIn(1500);
            },500);
            setTimeout(function(){
                $('#page02innerscroll-label02').addClass('boxactive');
            },1000);
            setTimeout(function(){
                $('#page02innerscroll-label02 span:nth-child(3)').css('opacity', '1');
                $('#page02innerscroll-label02 span:nth-child(3)').addClass("active");
            },1500);
            setTimeout(function(){
                $('#page02innerscroll-label02 span:nth-child(1)').css('opacity', '1');
                $('#page02innerscroll-label02 span:nth-child(1)').addClass("active");
            },2000);
        }
        if (scroll > page02imgbottomPosition - windowHeight + 570) {
            // $('#page02innerscroll-imgbottomimgsp').fadeIn(1500);
            $('#page02innerscroll-imgbottomimgsp img').css('filter', 'grayscale(0)');
        }
        var page02imgbottompPosition = $('#page02innerscroll-imgbottomp').offset().top;
        if (scroll > page02imgbottompPosition - windowHeight - 170) {
            $('#page02innerscroll-imgbottomline02').css('opacity', '1');
            $('#page02innerscroll-imgbottomline02').addClass("active");
        }
        if (scroll > page02imgbottompPosition - windowHeight + 170) {
            $('#page02innerscroll-imgbottomp').css('opacity', '1');
            $('#page02innerscroll-imgbottomp').addClass("active");
            $('#pageleftnumber img:nth-child(3)').css('opacity', '0');
        } else {
            $('#pageleftnumber img:nth-child(3)').css('opacity', '0.3');
        }        
    };
} catch {}

try {
    var page03innerscroll = document.getElementById( 'page03innerscroll' );
    var now = new Date().getTime();
    page03innerscroll.onscroll = function(){
        $(".page03innerscroll-p01").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            if (scroll > blockPosition - windowHeight + 170) {
                $(this).css('opacity', '1');
                $(this).addClass("active");
            }
        });
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var page03imgbottompPosition = $('#page03innerscroll-imgbottomp').offset().top;
        if (scroll > page03imgbottompPosition - windowHeight + 170) {
            $('#page03back').addClass('showvideo');
            let page03back = document.getElementById('page03back');
            if (document.getElementById("topvideo") == null) {
                page03back.insertAdjacentHTML('beforeend', '<video id="topvideo" src="images/car02.mp4" autoplay muted playsinline></video>');
            }
            $('#page03back video').fadeIn();
        } else {
            $('#page03back video').fadeOut();
        }
        var page03imgtopPosition = $('#page03innerscroll-imgtop').offset().top;
        if (scroll > page03imgtopPosition + 170) {
            setTimeout(function(){
                $('#page03innerscroll-imgtop #page03innerscroll-imgtopmaincover').css('opacity', '0');
            },1000);
        }
        var page03titlePosition = $('#page03innerscroll-title').offset().top;
        if (scroll > page03titlePosition - windowHeight + 170) {
            $('#page03innerscroll-titlep').css('opacity', '1');
            $('#page03innerscroll-titlep').addClass("active");
        }
        var page03centerPosition = $('#page03innerscroll-center').offset().top;
        if (scroll > page03centerPosition - windowHeight + 170) {
            setTimeout(function(){
                $('#page03innerscroll-centerline01').css('opacity', '1');
                $('#page03innerscroll-centerline01').addClass("active");
            },1000);
        }
        var fadedelaySpeed = 300;
        $("#page03 #page03innerscroll-fade.fade_trigger1 .fade_image_effect").each(function(i){
            var element = $("#page03 #page03innerscroll-fade.fade_trigger1").offset().top;
            if (scroll > element - windowHeight + windowHeight / 5){
                $(this).delay(i*(fadedelaySpeed)).queue(function(){
                    $(this).addClass("fadeactive");
                });
                setTimeout(function(){
                    $('#page03innerscroll-fade .fade_image_effect.fadeactive img').css('filter', 'grayscale(0)');
                },1500);
            }
        });
        var page03fadespPosition = $('#page03innerscroll-fadesp').offset().top;
        if (scroll > page03fadespPosition - windowHeight + 170) {
            $('#page03innerscroll-fadesp img').css('filter', 'grayscale(0)');
        }
        if (scroll > page03centerPosition - windowHeight + 370) {
            $('#page03innerscroll-centerline02').css('opacity', '1');
            $('#page03innerscroll-centerline02').addClass("active");
        }
        var page03imgbottomPosition = $('#page03innerscroll-imgbottom').offset().top;
        if (scroll > page03imgbottomPosition - windowHeight + 170) {
            $('#page03innerscroll-imgbottomimg').fadeIn(1500);
        }
        if (scroll > page03imgbottomPosition + 170) {
            $('#page03innerscroll-imgbottomline01').css('opacity', '1');
            $('#page03innerscroll-imgbottomline01').addClass("active");
        }
        var page03imgbottompPosition = $('#page03innerscroll-imgbottomp').offset().top;
        if (scroll > page03imgbottompPosition - windowHeight + 170) {
            $('#page03innerscroll-imgbottomp').css('opacity', '1');
            $('#page03innerscroll-imgbottomp').addClass("active");
            $('#pageleftnumber img:nth-child(3)').css('opacity', '0');
        } else {
            $('#pageleftnumber img:nth-child(3)').css('opacity', '0.3');
        }        
    };
} catch {}

try {
    var page04innerscroll = document.getElementById( 'page04innerscroll' );
    var now = new Date().getTime();
    page04innerscroll.onscroll = function(){
        $(".page04innerscroll-p01").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            if (scroll > blockPosition - windowHeight + 170) {
                $(this).css('opacity', '1');
                $(this).addClass("active");
            }
        });
        $(".page04innerscroll-p02").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            if (scroll > blockPosition - windowHeight + 170) {
                $(this).css('opacity', '1');
                $(this).addClass("active");
            }
        });
        $(".page04innerscroll-imgbottomimg").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            if (scroll > blockPosition - windowHeight + 170) {
                $(this).css('opacity', '1');
            }
        });
        $(".page04innerscroll-imgbottomline").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            if (scroll > blockPosition - windowHeight + 170) {
                $(this).css('opacity', '1');
                $(this).addClass("active");
            }
        });
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var page04imgbottompPosition = $('#page04innerscroll-imgbottomp').offset().top;
        if (scroll > page04imgbottompPosition - windowHeight + 170) {
            $('#page04back').addClass('showvideo');
            let page04back = document.getElementById('page04back');
            if (document.getElementById("topvideo") == null) {
                page04back.insertAdjacentHTML('beforeend', '<video id="topvideo" src="images/car02.mp4" autoplay muted playsinline></video>');
            }
            $('#page04back video').fadeIn();
        } else {
            $('#page04back video').fadeOut();
        }
        var page04imgtopPosition = $('#page04innerscroll-imgtop').offset().top;
        if (scroll > page04imgtopPosition + 170) {
            setTimeout(function(){
                $('#page04innerscroll-imgtop #page04innerscroll-imgtopmaincover').css('opacity', '0');
            },1000);
        }
        var page04titlePosition = $('#page04innerscroll-title').offset().top;
        if (scroll > page04titlePosition - windowHeight + 170) {
            $('#page04innerscroll-titlep').css('opacity', '1');
            $('#page04innerscroll-titlep').addClass("active");
            setTimeout(function(){
                $('#page04innerscroll-titleline01').css('opacity', '1');
                $('#page04innerscroll-titleline01').addClass("active");
            },500);
        }
        var page04titlebackPosition = $('#page04innerscroll-titleback').offset().top;
        if (scroll > page04titlebackPosition - windowHeight + 170) {
            setTimeout(function(){
                $('#page04innerscroll-titleback p').css('opacity', '1');
                $('#page04innerscroll-titleback p').addClass("active");
            },1000);
            setTimeout(function(){
                $('#page04innerscroll-titleline02').css('opacity', '1');
                $('#page04innerscroll-titleline02').addClass("active");
            },1500);
        }
        var fadedelaySpeed = 300;
        $("#page04 #page04innerscroll-title #page04innerscroll-titlebackfade.fade_trigger1 .fade_image_effect").each(function(i){
            var element = $("#page04 #page04innerscroll-title #page04innerscroll-titlebackfade").offset().top;
            if (scroll > element - windowHeight + windowHeight / 5 + 70){
                $(this).delay(i*(fadedelaySpeed)).queue(function(){
                    $(this).addClass("fadeactive");
                });
            }
        });
        var page04label01Position = $('#page04innerscroll-label01').offset().top;
        if (scroll > page04label01Position - windowHeight + 170) {
            $('#page04innerscroll-label01').addClass('boxactive');
            setTimeout(function(){
                $('#page04innerscroll-label01 span:nth-child(3)').css('opacity', '1');
                $('#page04innerscroll-label01 span:nth-child(3)').addClass("active");
            },500);
            setTimeout(function(){
                $('#page04innerscroll-label01 span:nth-child(1)').css('opacity', '1');
                $('#page04innerscroll-label01 span:nth-child(1)').addClass("active");
            },1000)
        };
        var page04videoPosition = $('#page04innerscroll-video').offset().top;
        if (scroll > page04videoPosition - windowHeight + 170) {
            setTimeout(function(){
                $('#page04innerscroll-video').addClass('showvideo');
            },1500)
        }
        var fadedelaySpeed = 300;
        $("#page04 .fade_trigger1 .fade_image_effect").each(function(i){
            var element = $("#page04 .fade_trigger1").offset().top;
            if (scroll > element){
                $(this).delay(i*(fadedelaySpeed)).queue(function(){
                    $(this).addClass("fadeactive");
                });
            }
        });
        var page04centerPosition = $('#page04innerscroll-center').offset().top;
        if (scroll > page04centerPosition - windowHeight) {
            setTimeout(function(){
                $('#page04pointer').css('opacity', '1');
                $('#page04pointer').addClass("active");
            },1000)
        }
        $('#page04innerscroll-center .accordion_one .accordion_header').off('click');
        $('#page04innerscroll-center .accordion_one .accordion_header').click(function(){
            $(this).next().animate({width:'toggle'});
            $(this).toggleClass("open");
            $('#page04innerscroll-center .accordion_one .accordion_header').not($(this)).next().animate({width:'hide'});
            $('#page04innerscroll-center .accordion_one .accordion_header').not($(this)).removeClass("open");
            $('#page04innerscroll-center .accordion_one .accordion_header.stay').not($(this)).toggleClass("open");
        });
        $('#page04accordionheader01').click(function(){
            $(this).toggleClass("page04accordion01on");
            $('#page04innerscroll-center .accordion_one .accordion_header').not($(this)).toggleClass("page04accordion01on");
            $('#page04pointer').css('display', 'none');
        });
        $('#page04accordionheader02').click(function(){
            $(this).toggleClass("page04accordion02on");
            $('#page04innerscroll-center .accordion_one .accordion_header').not($(this)).toggleClass("page04accordion02on");
            $('#page04pointer').css('display', 'none');
        });
        $('#page04accordionheader03').click(function(){
            $(this).toggleClass("page04accordion03on");
            $('#page04innerscroll-center .accordion_one .accordion_header').not($(this)).toggleClass("page04accordion03on");
            $('#page04pointer').css('display', 'none');
        });
        $('#page04accordionheader04').click(function(){
            $(this).toggleClass("page04accordion04on");
            $('#page04innerscroll-center .accordion_one .accordion_header').not($(this)).toggleClass("page04accordion04on");
            $('#page04pointer').css('display', 'none');
        });
        $('#page04accordionheader05').click(function(){
            $(this).toggleClass("page04accordion05on");
            $('#page04innerscroll-center .accordion_one .accordion_header').not($(this)).toggleClass("page04accordion05on");
            $('#page04pointer').css('display', 'none');
        });
        var page04label02Position = $('#page04innerscroll-label02').offset().top;
        if (scroll > page04label02Position - windowHeight + 170) {
            $('#page04innerscroll-label02').addClass('boxactive');
            setTimeout(function(){
                $('#page04innerscroll-label02 span:nth-child(3)').css('opacity', '1');
                $('#page04innerscroll-label02 span:nth-child(3)').addClass("active");
            },500);
            setTimeout(function(){
                $('#page04innerscroll-label02 span:nth-child(1)').css('opacity', '1');
                $('#page04innerscroll-label02 span:nth-child(1)').addClass("active");
            },1000);
        }
        var page04imgbottompPosition = $('#page04innerscroll-imgbottomp').offset().top;
        if (scroll > page04imgbottompPosition - windowHeight + 170) {
            $('#page04innerscroll-imgbottomp').css('opacity', '1');
            $('#page04innerscroll-imgbottomp').addClass("active");
            $('#pageleftnumber img:nth-child(3)').css('opacity', '0');
        } else {
            $('#pageleftnumber img:nth-child(3)').css('opacity', '0.3');
        }
    };
} catch {}

try {
    var page05innerscroll = document.getElementById( 'page05innerscroll' );
    var now = new Date().getTime();
    page05innerscroll.onscroll = function(){
        $(".page05innerscroll-p01").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            if (scroll > blockPosition - windowHeight + 170) {
                $(this).css('opacity', '1');
                $(this).addClass("active");
            }
        });
        $(".page05innerscroll-p02").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            if (scroll > blockPosition - windowHeight + 170) {
                $(this).css('opacity', '1');
                $(this).addClass("active");
            }
        });
        $(".page05innerscroll-p03").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            if (scroll > blockPosition - windowHeight + 170) {
                $(this).css('opacity', '1');
                $(this).addClass("active");
            }
        });
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var page05imgbottompPosition = $('#page05innerscroll-imgbottomp').offset().top;
        if (scroll > page05imgbottompPosition - windowHeight + 170) {
            $('#page05back').addClass('showvideo');
            let page05back = document.getElementById('page05back');
            if (document.getElementById("topvideo") == null) {
                page05back.insertAdjacentHTML('beforeend', '<video id="topvideo" src="images/car02.mp4" autoplay muted playsinline></video>');
            }
            $('#page05back video').fadeIn();
        } else {
            $('#page05back video').fadeOut();
        }
        var page05imgtopPosition = $('#page05innerscroll-imgtop').offset().top;
        if (scroll > page05imgtopPosition + 170) {
            setTimeout(function(){
                $('#page05innerscroll-imgtop #page05innerscroll-imgtopmaincover').css('opacity', '0');
            },1000);
        }
        var page05titlePosition = $('#page05innerscroll-title').offset().top;
        if (scroll > page05titlePosition - windowHeight + 170) {
            $('#page05innerscroll-titlep').css('opacity', '1');
            $('#page05innerscroll-titlep').addClass("active");
            setTimeout(function(){
                $('#page05innerscroll-titleline').css('opacity', '1');
                $('#page05innerscroll-titleline').addClass("active");
            },500);
        }
        var page05centerPosition = $('#page05innerscroll-center').offset().top;
        if (scroll > page05centerPosition - windowHeight + 170) {
            setTimeout(function(){
                $('#page05innerscroll-centerimg').fadeIn(1500);
            },1000);
        }
        var page05label01Position = $('#page05innerscroll-label01').offset().top;
        if (scroll > page05label01Position - windowHeight + 170) {
            $('#page05innerscroll-label01').addClass('boxactive');
            setTimeout(function(){
                $('#page05innerscroll-label01 span:nth-child(3)').css('opacity', '1');
                $('#page05innerscroll-label01 span:nth-child(3)').addClass("active");
            },500);
            setTimeout(function(){
                $('#page05innerscroll-label01 span:nth-child(1)').css('opacity', '1');
                $('#page05innerscroll-label01 span:nth-child(1)').addClass("active");
            },1000);
        }
        var page05label02Position = $('#page05innerscroll-label02').offset().top;
        if (scroll > page05label02Position - windowHeight - 100) {
            $('#page05innerscroll-imgbottomline01').css('opacity', '1');
            $('#page05innerscroll-imgbottomline01').addClass("active");
            $('#page05innerscroll-imgbottomline02').css('opacity', '1');
            $('#page05innerscroll-imgbottomline02').addClass("active");
        }
        if (scroll > page05label02Position - windowHeight + 170) {
            $('#page05innerscroll-label02').addClass('boxactive');
            setTimeout(function(){
                $('#page05innerscroll-label02 span:nth-child(3)').css('opacity', '1');
                $('#page05innerscroll-label02 span:nth-child(3)').addClass("active");
            },500);
            setTimeout(function(){
                $('#page05innerscroll-label02 span:nth-child(1)').css('opacity', '1');
                $('#page05innerscroll-label02 span:nth-child(1)').addClass("active");
            },1000);
        }
        var fadedelaySpeed = 300;
        $("#page05 #page05innerscroll-imgbottom #page05innerscroll-fade01.fade_trigger1 .fade_image_effect").each(function(i){
            var element = $("#page05 #page05innerscroll-imgbottom #page05innerscroll-fade01").offset().top;
            if (scroll > element - windowHeight + windowHeight / 5 + 70){
                $(this).delay(i*(fadedelaySpeed)).queue(function(){
                    $(this).addClass("fadeactive");
                });
                setTimeout(function(){
                    $('#page05innerscroll-fade01 .fade_image_effect.fadeactive img').css('filter', 'grayscale(0)');
                },1500);
            }
        });
        var fadedelaySpeed = 300;
        $("#page05 #page05innerscroll-imgbottom #page05innerscroll-fade02.fade_trigger1 .fade_image_effect").each(function(i){
            var element = $("#page05 #page05innerscroll-imgbottom #page05innerscroll-fade02").offset().top;
            if (scroll > element - windowHeight + windowHeight / 5 + 70){
                $(this).delay(i*(fadedelaySpeed)).queue(function(){
                    $(this).addClass("fadeactive");
                });
                setTimeout(function(){
                    $('#page05innerscroll-fade02 .fade_image_effect.fadeactive img').css('filter', 'grayscale(0)');
                },1500);
            }
        });
        var page05imgbottomimgsp01Position = $('#page05innerscroll-imgbottomimgsp01').offset().top;
        if (scroll > page05imgbottomimgsp01Position - windowHeight + 170) {
            $('#page05innerscroll-imgbottomimgsp01 img').css('filter', 'grayscale(0)');
        }
        var page05imgbottomimgsp02Position = $('#page05innerscroll-imgbottomimgsp02').offset().top;
        if (scroll > page05imgbottomimgsp02Position - windowHeight + 170) {
            $('#page05innerscroll-imgbottomimgsp02 img').css('filter', 'grayscale(0)');
        }
        var page05imgbottompPosition = $('#page05innerscroll-imgbottomp').offset().top;
        if (scroll > page05imgbottompPosition - windowHeight + 170) {
            $('#page05innerscroll-imgbottomp').css('opacity', '1');
            $('#page05innerscroll-imgbottomp').addClass("active");
            $('#pageleftnumber img:nth-child(3)').css('opacity', '0');
        } else {
            $('#pageleftnumber img:nth-child(3)').css('opacity', '0.3');
        }
        var page05bluePosition = $('#pageblue').offset().top;
        if(scroll > page05bluePosition - 150) {
            $('#pagescroll').fadeOut();
        } else {
            $('#pagescroll').fadeIn();
        }
    };
} catch {}

try {
    var page06innerscroll = document.getElementById( 'page06innerscroll' );
    var now = new Date().getTime();
    page06innerscroll.onscroll = function(){
        $(".page06innerscroll-p01").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            if (scroll > blockPosition - windowHeight + 170) {
                $(this).css('opacity', '1');
                $(this).addClass("active");
            }
        });
        $(".page06innerscroll-p02").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            if (scroll > blockPosition - windowHeight + 170) {
                $(this).css('opacity', '1');
                $(this).addClass("active");
            }
        });
        $(".page06innerscroll-p03").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            if (scroll > blockPosition - windowHeight + 170) {
                $(this).css('opacity', '1');
                $(this).addClass("active");
            }
        });
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var page06imgbottompPosition = $('#page06innerscroll-imgbottomp').offset().top;
        if (scroll > page06imgbottompPosition - windowHeight + 170) {
            $('#page06back').addClass('showvideo');
            let page06back = document.getElementById('page06back');
            if (document.getElementById("topvideo") == null) {
                page06back.insertAdjacentHTML('beforeend', '<video id="topvideo" src="images/car02.mp4" autoplay muted playsinline></video>');
            }
            $('#page06back video').fadeIn();
        } else {
            $('#page06back video').fadeOut();
        }
        var page06imgtopPosition = $('#page06innerscroll-imgtop').offset().top;
        if (scroll > page06imgtopPosition + 170) {
            setTimeout(function(){
                $('#page06innerscroll-imgtop #page06innerscroll-imgtopmaincover').css('opacity', '0');
            },1000);
        }
        var page06titlePosition = $('#page06innerscroll-title').offset().top;
        if (scroll > page06titlePosition - windowHeight + 170) {
            $('#page06innerscroll-titlep').css('opacity', '1');
            $('#page06innerscroll-titlep').addClass("active");
            setTimeout(function(){
                $('#page06innerscroll-titleline').css('opacity', '1');
                $('#page06innerscroll-titleline').addClass("active");
            },500);
        }
        var page06centerPosition = $('#page06innerscroll-center').offset().top;
        if (scroll > page06centerPosition - windowHeight + 170) {
            setTimeout(function(){
                $('#page06innerscroll-centerimg').fadeIn(1500);
            },1000);
        }
        var page06label01Position = $('#page06innerscroll-label01').offset().top;
        if (scroll > page06label01Position - windowHeight + 170) {
            $('#page06innerscroll-label01').addClass('boxactive');
            setTimeout(function(){
                $('#page06innerscroll-label01 span:nth-child(3)').css('opacity', '1');
                $('#page06innerscroll-label01 span:nth-child(3)').addClass("active");
            },500);
            setTimeout(function(){
                $('#page06innerscroll-label01 span:nth-child(1)').css('opacity', '1');
                $('#page06innerscroll-label01 span:nth-child(1)').addClass("active");
            },1000);
        }
        var page06label02Position = $('#page06innerscroll-label02').offset().top;
        if (scroll > page06label02Position - windowHeight - 100) {
            $('#page06innerscroll-imgbottomline01').css('opacity', '1');
            $('#page06innerscroll-imgbottomline01').addClass("active");
            $('#page06innerscroll-imgbottomline02').css('opacity', '1');
            $('#page06innerscroll-imgbottomline02').addClass("active");
        }
        if (scroll > page06label02Position - windowHeight + 170) {
            $('#page06innerscroll-label02').addClass('boxactive');
            setTimeout(function(){
                $('#page06innerscroll-label02 span:nth-child(3)').css('opacity', '1');
                $('#page06innerscroll-label02 span:nth-child(3)').addClass("active");
            },500);
            setTimeout(function(){
                $('#page06innerscroll-label02 span:nth-child(1)').css('opacity', '1');
                $('#page06innerscroll-label02 span:nth-child(1)').addClass("active");
            },1000);
        }
        var fadedelaySpeed = 300;
        $("#page06 #page06innerscroll-imgbottom #page06innerscroll-fade01.fade_trigger1 .fade_image_effect").each(function(i){
            var element = $("#page06 #page06innerscroll-imgbottom #page06innerscroll-fade01").offset().top;
            if (scroll > element - windowHeight + windowHeight / 5 + 70){
                $(this).delay(i*(fadedelaySpeed)).queue(function(){
                    $(this).addClass("fadeactive");
                });
                setTimeout(function(){
                    $('#page06innerscroll-fade01 .fade_image_effect.fadeactive img').css('filter', 'grayscale(0)');
                },1500);
            }
        });
        var fadedelaySpeed = 300;
        $("#page06 #page06innerscroll-imgbottom #page06innerscroll-fade02.fade_trigger1 .fade_image_effect").each(function(i){
            var element = $("#page06 #page06innerscroll-imgbottom #page06innerscroll-fade02").offset().top;
            if (scroll > element - windowHeight + windowHeight / 5 + 70){
                $(this).delay(i*(fadedelaySpeed)).queue(function(){
                    $(this).addClass("fadeactive");
                });
                setTimeout(function(){
                    $('#page06innerscroll-fade02 .fade_image_effect.fadeactive img').css('filter', 'grayscale(0)');
                },1500);
            }
        });
        var page06imgbottomimgsp01Position = $('#page06innerscroll-imgbottomimgsp01').offset().top;
        if (scroll > page06imgbottomimgsp01Position - windowHeight + 170) {
            $('#page06innerscroll-imgbottomimgsp01 img').css('filter', 'grayscale(0)');
        }
        var page06imgbottomimgsp02Position = $('#page06innerscroll-imgbottomimgsp02').offset().top;
        if (scroll > page06imgbottomimgsp02Position - windowHeight + 170) {
            $('#page06innerscroll-imgbottomimgsp02 img').css('filter', 'grayscale(0)');
        }
        var page06imgbottompPosition = $('#page06innerscroll-imgbottomp').offset().top;
        if (scroll > page06imgbottompPosition - windowHeight + 170) {
            $('#page06innerscroll-imgbottomp').css('opacity', '1');
            $('#page06innerscroll-imgbottomp').addClass("active");
            $('#pageleftnumber img:nth-child(3)').css('opacity', '0');
        } else {
            $('#pageleftnumber img:nth-child(3)').css('opacity', '0.3');
        }
        var page06bluePosition = $('#pageblue').offset().top;
        if(scroll > page06bluePosition - 150) {
            $('#pagescroll').fadeOut();
        } else {
            $('#pagescroll').fadeIn();
        }
    };
} catch {}

try {
    var page07innerscroll = document.getElementById( 'page07innerscroll' );
    var now = new Date().getTime();
    page07innerscroll.onscroll = function(){
        $(".page07innerscroll-p01").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            if (scroll > blockPosition - windowHeight + 170) {
                $(this).css('opacity', '1');
                $(this).addClass("active");
            }
        });
        $(".page07innerscroll-p02").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            if (scroll > blockPosition - windowHeight + 170) {
                $(this).css('opacity', '1');
                $(this).addClass("active");
            }
        });
        $(".page07innerscroll-p03").each(function() {
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            if (scroll > blockPosition - windowHeight + 170) {
                $(this).css('opacity', '1');
                $(this).addClass("active");
            }
        });
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var page07imgbottompPosition = $('#page07innerscroll-imgbottomp').offset().top;
        if (scroll > page07imgbottompPosition - windowHeight + 170) {
            $('#page07back').addClass('showvideo');
            let page07back = document.getElementById('page07back');
            if (document.getElementById("topvideo") == null) {
                page07back.insertAdjacentHTML('beforeend', '<video id="topvideo" src="images/car02.mp4" autoplay muted playsinline></video>');
            }
            $('#page07back video').fadeIn();
        } else {
            $('#page07back video').fadeOut();
        }
        var page07imgtopPosition = $('#page07innerscroll-imgtop').offset().top;
        if (scroll > page07imgtopPosition + 170) {
            setTimeout(function(){
                $('#page07innerscroll-imgtop #page07innerscroll-imgtopmaincover').css('opacity', '0');
            },1000);
        }
        var page07titlePosition = $('#page07innerscroll-title').offset().top;
        if (scroll > page07titlePosition - windowHeight + 170) {
            $('#page07innerscroll-titlep').css('opacity', '1');
            $('#page07innerscroll-titlep').addClass("active");
            setTimeout(function(){
                $('#page07innerscroll-titleline').css('opacity', '1');
                $('#page07innerscroll-titleline').addClass("active");
            },500);
        }
        var page07centerPosition = $('#page07innerscroll-center').offset().top;
        if (scroll > page07centerPosition - windowHeight + 170) {
            setTimeout(function(){
                $('#page07innerscroll-centerimg').fadeIn(1500);
            },1000);
        }
        var page07label01Position = $('#page07innerscroll-label01').offset().top;
        if (scroll > page07label01Position - windowHeight + 170) {
            $('#page07innerscroll-label01').addClass('boxactive');
            setTimeout(function(){
                $('#page07innerscroll-label01 span:nth-child(3)').css('opacity', '1');
                $('#page07innerscroll-label01 span:nth-child(3)').addClass("active");
            },500);
            setTimeout(function(){
                $('#page07innerscroll-label01 span:nth-child(1)').css('opacity', '1');
                $('#page07innerscroll-label01 span:nth-child(1)').addClass("active");
            },1000);
        }
        var page07label02Position = $('#page07innerscroll-label02').offset().top;
        if (scroll > page07label02Position - windowHeight - 100) {
            $('#page07innerscroll-imgbottomline01').css('opacity', '1');
            $('#page07innerscroll-imgbottomline01').addClass("active");
            $('#page07innerscroll-imgbottomline02').css('opacity', '1');
            $('#page07innerscroll-imgbottomline02').addClass("active");
        }
        if (scroll > page07label02Position - windowHeight + 170) {
            $('#page07innerscroll-label02').addClass('boxactive');
            setTimeout(function(){
                $('#page07innerscroll-label02 span:nth-child(3)').css('opacity', '1');
                $('#page07innerscroll-label02 span:nth-child(3)').addClass("active");
            },500);
            setTimeout(function(){
                $('#page07innerscroll-label02 span:nth-child(1)').css('opacity', '1');
                $('#page07innerscroll-label02 span:nth-child(1)').addClass("active");
            },1000);
        }
        var fadedelaySpeed = 300;
        $("#page07 #page07innerscroll-imgbottom #page07innerscroll-fade01.fade_trigger1 .fade_image_effect").each(function(i){
            var element = $("#page07 #page07innerscroll-imgbottom #page07innerscroll-fade01").offset().top;
            if (scroll > element - windowHeight + windowHeight / 5 + 70){
                $(this).delay(i*(fadedelaySpeed)).queue(function(){
                    $(this).addClass("fadeactive");
                });
                setTimeout(function(){
                    $('#page07innerscroll-fade01 .fade_image_effect.fadeactive img').css('filter', 'grayscale(0)');
                },1500);
            }
        });
        var fadedelaySpeed = 300;
        $("#page07 #page07innerscroll-imgbottom #page07innerscroll-fade02.fade_trigger1 .fade_image_effect").each(function(i){
            var element = $("#page07 #page07innerscroll-imgbottom #page07innerscroll-fade02").offset().top;
            if (scroll > element - windowHeight + windowHeight / 5 + 70){
                $(this).delay(i*(fadedelaySpeed)).queue(function(){
                    $(this).addClass("fadeactive");
                });
                setTimeout(function(){
                    $('#page07innerscroll-fade02 .fade_image_effect.fadeactive img').css('filter', 'grayscale(0)');
                },1500);
            }
        });
        var page07imgbottomimgsp01Position = $('#page07innerscroll-imgbottomimgsp01').offset().top;
        if (scroll > page07imgbottomimgsp01Position - windowHeight + 170) {
            $('#page07innerscroll-imgbottomimgsp01 img').css('filter', 'grayscale(0)');
        }
        var page07imgbottomimgsp02Position = $('#page07innerscroll-imgbottomimgsp02').offset().top;
        if (scroll > page07imgbottomimgsp02Position - windowHeight + 170) {
            $('#page07innerscroll-imgbottomimgsp02 img').css('filter', 'grayscale(0)');
        }
        var page07imgbottompPosition = $('#page07innerscroll-imgbottomp').offset().top;
        if (scroll > page07imgbottompPosition - windowHeight + 170) {
            $('#page07innerscroll-imgbottomp').css('opacity', '1');
            $('#page07innerscroll-imgbottomp').addClass("active");
            $('#pageleftnumber img:nth-child(3)').css('opacity', '0');
        } else {
            $('#pageleftnumber img:nth-child(3)').css('opacity', '0.3');
        }
        var page07bluePosition = $('#pageblue').offset().top;
        if(scroll > page07bluePosition - 150) {
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