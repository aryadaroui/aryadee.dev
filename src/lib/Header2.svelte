<nav class="header-content">
	<div class="nav-wrapper"><a class="site-title fly-0" rel="author" href="/">aryadee</a></div>
	<!-- <div class="secret-link"><a class="secret-nav-item" href="/quote">quote</a></div> -->
	<div class="nav-wrapper">
		<a class="nav-item fly-1" href="/nerd-stuff/" style="margin-left: 0px;">nerd stuff</a>
		<a class="nav-item fly-2" href="/art-&-audio/">art & audio</a>
		<a class="nav-item fly-3" href="/about/">about me</a>
		<a class="nav-item fly-4" href="/filmic" style="margin-right: 0px;">filmic</a>
	</div>
</nav>

<style>
	@keyframes fly-in-0 {
		0% {
			transform: translateY(-100px);
		}
		100% {
			transform: translateY(0);
		}
	}
	@keyframes fly-in-1 {
		0% {
			transform: translateY(-150px);
		}
		100% {
			transform: translateY(0);
		}
	}
	@keyframes fly-in-2 {
		0% {
			transform: translateY(-200px);
		}
		100% {
			transform: translateY(0);
		}
	}
	@keyframes fly-in-3 {
		0% {
			transform: translateY(-250px);
		}
		100% {
			transform: translateY(0);
		}
	}
	@keyframes fly-in-4 {
		0% {
			transform: translateY(-300px);
		}
		100% {
			transform: translateY(0);
		}
	}

	.fly-0 {
		animation: 1s ease-out 0s fly-in-0;
	}

	.fly-1 {
		animation: 1s ease-out normal fly-in-1;
	}
	.fly-2 {
		animation: 1s ease-out normal fly-in-2;
	}
	.fly-3 {
		animation: 1s ease-out normal fly-in-2;
	}
	.fly-4 {
		animation: 1s ease-out normal fly-in-4;
	}


	.header-content {
		/* font-family: 'Hack'; */
		max-width: 800px;
		/* height: 70px; */
		background-repeat: repeat-x;
		display: flex;
		justify-content: space-between;
		text-overflow: clip;
		margin-left: auto;
		margin-right: auto;
		padding-left: 20px;
		padding-right: 20px;
	}

	.secret-link {
		margin: 0px;
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

		/* animation: 1s ease-out 0s 1 fly-in; */
	}

	.secret-link {
		margin: 25px;
		text-align: center;
	}

	a {
		font-family: Hack, monospace;
		/* font-family: 'Swiss 721'; */
		/* font-weight: 900; */
		color: #ffffff;
		text-decoration: none;
		text-shadow: #000000 0 0 20px;
		transition: text-shadow 0.2s;
	}

	a:visited {
		color: #dddddd;
	}

	a:hover {
		color: #dddddd;
		text-decoration: underline;
		text-shadow: #ebf0f2 0 0 20px;
	}

	a.secret-nav-item {
		--bg-size: 400%;
		--color-white: #aaaaaa;
		--color-black: #000000;
		background: linear-gradient(
				-45deg,
				var(--color-black),
				var(--color-black),
				var(--color-black),
				var(--color-white),
				var(--color-black),
				var(--color-black)
			)
			0 0 / var(--bg-size) 500%;
		color: transparent;
		-webkit-background-clip: text;
		background-clip: text;
		animation: move-bg 100s infinite linear;
	}

	a.secret-nav-item:hover {
		color: #aaaaaa;
	}

	@keyframes move-bg {
		from {
			background-position: var(--bg-size) 0;
		}
		to {
			background-position: 0 0;
		}
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
			/* margin: 1px 0px 1px 0px; */
		}

		.nav-wrapper {
			font-size: 0.9em;
			padding-top: 15px;
			justify-content: space-evenly;
		}
	}

	@media only screen and (max-width: 700px) {
		.secret-link {
			display: none;
		}
	}
</style>
