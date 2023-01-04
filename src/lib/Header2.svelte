<div class="header-content">
	<div class="nav-wrapper"><a class="site-title" rel="author" href="/">aryadee</a></div>
	<div class="nav-wrapper">
		<a class="nav-item" href="/nerd-stuff/">nerd stuff</a>
		<a class="nav-item" href="/signals/">signals</a>
		<a class="nav-item" href="/about/">about me</a>
		<a class="nav-item" href="/filmic" style="margin-right: 0px;">filmic</a>

		<!-- <a class="nav-item" href="/music/" style="margin-right: 0px;">music</a> -->
	</div>
</div>

<style>
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
			/* margin-bottom: 8px; */
		}

		.nav-wrapper {
			justify-content: space-evenly;
		}

	}
</style>
