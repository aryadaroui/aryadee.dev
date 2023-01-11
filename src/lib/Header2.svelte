<nav class="header-content">
	<div class="nav-wrapper"><a class="site-title" rel="author" href="/">aryadee</a></div>
	<a class="secret-link" href="/quote" style="color: #090909;">quote</a>
	<div class="nav-wrapper">
		<a class="nav-item" href="/nerd-stuff/" style="margin-left: 0px;">nerd stuff</a>
		<a class="nav-item" href="/art-&-audio/">art & audio</a>
		<a class="nav-item" href="/about/">about me</a>
		<a class="nav-item" href="/filmic" style="margin-right: 0px;">filmic</a>
	</div>
</nav>

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

	.secret-link {
		color: red;
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
