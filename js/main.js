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
        $('#topheader').fadeIn();
        $('#main').fadeIn();
        $('footer').fadeIn();
    });
    btn_topskip.addEventListener("click", (e) => {
        video.currentTime += 999;
    });
});