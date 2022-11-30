<!-- <div class="luminaire" /> -->

<!-- <div class="header"> -->
<div id="sky">
	<div id="stars">
		<div class="header-content">
			<div class="nav-wrapper"><a class="site-title" rel="author" href="/">aryadee</a></div>
			<div class="nav-wrapper">
				<a class="nav-item" href="/nerd-stuff/">nerd stuff</a>
				<a class="nav-item" href="/filmic/">filmic</a>
				<a class="nav-item" href="/art/" style="margin-right: 0px;">art</a>
				<!-- <a class="nav-item" href="/music/" style="margin-right: 0px;">music</a> -->
			</div>
		</div>
	</div>
</div>

<style>
	/* @import '../main.css'; */

	#stars {
		/* background-image: url('/banner3.png'); */
		/* background-size: 2200px; */

		background-image: url('/banner2.png');
		background-size: 700px;

		image-rendering: pixelated;
		background-repeat: repeat;
	}

	#sky {
		/* background: linear-gradient(0deg, #021623, #112141, #08232d, #2d0b18); */

		background: linear-gradient(
			0deg,
			#030b14,
			#080b30,
			#101238,
			#131434,
			#1e1530,
			#211629,
			#1e1530,
			#131434,
			#101238,
			#080b30,
			#030b14
		);
		background-size: 100% 2000%;
		animation: gradient 60s ease infinite;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 100%;
		}
		50% {
			background-position: 0% 0%;
			/* background: linear-gradient(0deg, #262f35 25%, #e73c7e 37.5%, #23a6d5 62.5%,  #262f35 75%); */
			/* transform: rotate(180deg); */
		}
		100% {
			background-position: 0% 100%;
		}
	}

	.header-content {
		font-family: 'Hack';
		max-width: 800px;
		height: 70px;
		background-repeat: repeat-x;
		display: flex;
		justify-content: space-between;
		text-overflow: clip;
		margin-left: auto;
		margin-right: auto;
		padding-left: 20px;
		padding-right: 20px;
	}

	.site-title {
		margin: 20px;
		margin-left: 0;
		/* padding-left: 20px; */
		font-size: larger;
		/* text-align: center; */
		vertical-align: bottom;
		z-index: 0;


	}






	.nav-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 0;
	}

	.nav-item {
		margin: 25px;
		/* padding: 20px; */
		text-align: center;
		/* margin-right: 0; */
	}

	a {
		font-family: Hack;
		color: #ffffff;
		text-decoration: none;
		text-shadow: #000000 0 0 20px;
	}

	a:visited {
		color: #dddddd;
	}

	a:hover {
		color: #dddddd;
		text-decoration: underline;
		text-shadow: #d2e0e4 0 0 20px;
	}

	@media screen and (max-width: 500px) {
		.header-content {
			/* border: 1px solid red; */
			flex-direction: column;
			height: 100px;
		}

		.site-title {
			justify-content: center;
			margin: 7px;
		}

		.nav-item {
			margin: 8px;
			/* margin-bottom: 8px; */
		}

		.nav-wrapper {
			justify-content: space-evenly;
		}
	}
</style>
