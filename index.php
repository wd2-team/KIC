<!DOCTYPE html>
<html class="result" lang="ja">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="content-language" content="ja">
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,user-scalable=no">
	<script
  	src="https://code.jquery.com/jquery-2.2.4.js"
  	integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
  	crossorigin="anonymous"></script>
  	<?php include("_inc/config.php"); ?>
	<?php if( is_mobile()) : ?>
    <link rel="stylesheet" type="text/css" href="css/mobile.css">
    <?php elseif( is_tablet()) : ?>
    <link rel="stylesheet" type="text/css" href="css/tablet.css">
    <?php else: ?>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <?php endif; ?>
  	<!-- <link rel="icon" href="#"> -->
  	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/apng-canvas/2.1.1/apng-canvas.min.js"></script>
	<title>"KICワンダフル</title>
</head>
<body id="index">
<div id="wrapper">
	<header class="gradation-linewrap">
		<div class="gradation-line"></div>
	</header>
	<div id="topheader">
		<h1><a href="index"><img src="images/kic_logo.svg" alt="KICワンダフルのロゴ"></a></h1>
		<ul>
		<li class="newlink"><a href="/page/page00"><img src="images/navi_number_00.svg" alt="00ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_01.svg" alt="01ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_02.svg" alt="02ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_03.svg" alt="03ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_04.svg" alt="04ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_05.svg" alt="05ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_06.svg" alt="06ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_07.svg" alt="07ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_08.svg" alt="08ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_09.svg" alt="09ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_10.svg" alt="10ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_GO.svg" alt="GOページへのリンク"></a></li>
		</ul>
	</div><!-- #topheader -->
	<div id="topvideowrapper">
		<video id="topvideo" playsinline muted autoplay>
			<source src="images/car01.mp4">
		</video>
		<button id="btn_topskip"><img src="images/skip.svg" alt="スキップボタン"></button>
	</div><!-- #topvideowrapper -->
	<div id="mainwrapper">
		<div id="main">
			<div id="mainvideowrapper"></div><!-- #mainvideowrapper -->
			<a id="mainlink" href="page/page00.php"><source type="image/webp" srcset="images/drive.webp" />
					<img src="images/drive.png" alt="スクロールを促すマーク" class="apng-image" /></a>
			<div id="mainlogo"><img src="images/gr_garage.svg" alt="GRGarageのロゴ"><img src="images/toyota_collora_white.svg" alt="トヨタカローラ福岡株式会社のロゴ"></div>
		</div><!-- #main -->
	</div><!-- #mainwrapper -->
	<div id="topleft" class="animation">
		<a href="#" class="js-modal-open" data-target="modal-video">
			<img src="images/movie_trailer.svg">
		</a>
	</div><!-- #topleft -->
	<div id="modal-video" class="modal js-modal">
		<div class="modal-bg js-modal-close"></div><!-- .modal-bg -->
		<div class="modal-content">
			<div class="modal-inner">
				<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0RrD7rPZn80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<a href="#" class="js-modal-close"><img src="images/modal_close.svg"></a>
			</div><!-- .modal-inner -->
		</div><!-- .modal-content -->
	</div><!-- #.modal -->
	<div id="topright" class="animation">
		<a href="page/page00.php">
			<p class="animation"><img src="images/prologue.svg" alt="PROLOGUE"><br><span>プロローグ／序章</span></p>
			<div id="toprightbg"></div>
		</a>
	</div><!-- #topright -->
	<footer class="gradation-linewrap">
		<div id="footerleft"><a href="https://www.kic-car.ac.jp/"><img src="images/kurume_industrial_college_logo.svg" alt="久留米自動車工科大学校のロゴ"></a></div>
		<ul id="footerright">
			<li><a href="https://www.instagram.com/kurume_industrial_college/"><img src="images/sns_instagram.svg" alt="instagramへのリンク"></a></li>
			<li><a href="https://page.line.me/kic-car"><img src="images/sns_line.svg" alt="lineへのリンク"></a></li>
			<li><a href="https://twitter.com/kic_car"><img src="images/sns_twitter.svg" alt="twitterへのリンク"></a></li>
			<li><a href="https://www.youtube.com/channel/UC0Ge2DKsUJFaxYJQjj1S8lw/featured"><img src="images/sns_youtube.svg" alt="youtubeへのリンク"></a></li>
		</ul>
		<div class="clear"></div>
		<div class="gradation-line"></div>
	</footer>
	<div id="mobileheader" class="displaysp">
		<ul>
			<li class="newlink"><a href="page/page00"><img src="images/navi_number_00.svg" alt="00ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_01.svg" alt="01ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_02.svg" alt="02ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_03.svg" alt="03ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_04.svg" alt="04ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_05.svg" alt="05ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_06.svg" alt="06ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_07.svg" alt="07ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_08.svg" alt="08ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_09.svg" alt="09ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_10.svg" alt="10ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="images/navi_number_GO.svg" alt="GOページへのリンク"></a></li>
		</ul>
	</div><!-- #mobileheader -->
</div><!-- #wrapper -->
<div id="filter"></div><!-- #filter -->
<script type="text/javascript" src="js/main.js"></script>
</body>
</html>