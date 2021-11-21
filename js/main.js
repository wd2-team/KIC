$(function(){
    // スクロールでajax
    // $(window).scroll(function() {
    $('.sample_btn').click(function(){
        // console.log('windowスクロールなう');
        // if ($(this).scrollTop() > 0) {
        $.ajax({
            url: 'page00.html',
            type: 'GET',
            dataType: 'html'
        }).done(function(data){
            $('.result').html(data);
        }).fail(function(data){
            alert('通信失敗！');
        });
        // }
    });

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
            $('#main input').fadeIn(1000);
        },10000);
    });
    btn_topskip.addEventListener("click", (e) => {
        video.currentTime += 999;
    });

    $(window).on('load', function(){

    });
});