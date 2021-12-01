<?php include("./_inc/header.php"); ?>
<body id="index">
<div id="wrapper">
	<header class="gradation-linewrap">
		<div class="gradation-line"></div>
	</header>
	<div id="topheader">
		<h1><a href="index.php"><img src="images/kic_logo.svg" alt="KICワンダフルのロゴ"></a></h1>
		<ul>
		<li class="newlink"><a href="./page/page00"><img src="images/navi_number_00.svg" alt="00ページへのリンク"></a></li>
			<li class="futurelink"><a href="#"><img src="../images/navi_number_01.svg" alt="01ページへのリンク"></a></li>
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
			<div id="mainvideowrapper">
				<!-- <video id="mainvideo01" playsinline muted autoplay>
					<source src="images/start.mp4">
				</video>
				<video id="mainvideo02" playsinline muted autoplay loop>
					<source src="images/loop.mp4">
				</video> -->
			</div><!-- #mainvideowrapper -->
			<a id="mainlink" href="page00.html"><source type="image/webp" srcset="images/drive.webp" />
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
		<div class="modal-bg js-modal-close"></div>
		<div class="modal-content">
			<div class="modal-inner">
				<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0RrD7rPZn80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<a href="#" class="js-modal-close"><img src="images/modal_close.svg"></a>
			</div>
		</div>
	</div>
	<div id="topright" class="animation">
		<a href="page00.html">
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
	<?php include("./_inc/footer.php"); ?>