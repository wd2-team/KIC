$(function(){

    // 動画再生後フェード
    var video = document.getElementById('topvideo');
    var btn_topskip = document.getElementById("btn_topskip");
    video.addEventListener("ended", function() {
        $('#topvideowrapper').fadeOut();
        $('header').fadeIn();
        $('footer').fadeIn();
        $('#topheader').fadeIn();
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

});

// ロード
$(window).on('load', function(){
    $('#pageheaderline').fadeIn();
    $('#pageheader').fadeIn();
});