<script>
	import Header2 from '$lib/Header2.svelte';
	import Footer2 from '$lib/Footer2.svelte';
	import { page } from '$app/stores';
</script>

<Header2 />

<div class="container">
	<div>
		<img
			src="https://i.giphy.com/media/pynZagVcYxVUk/giphy.webp"
			alt="funny GIF of Michael Scott crying"
			width="200px"
		/>
	</div>
	<!-- <div class="error-message"> -->
	<h1>{$page.status}</h1>
	<!-- </div> -->

	<!-- Object is possibly 'null'.js(2531). This is fine; if isn't null, this page isn't shown.-->
	<p>{$page.error.message} :-(</p>
</div>

<Footer2 />

<style>
	/* @import url('https://fonts.cdnfonts.com/css/swiss-721-3'); */
	@import '../main.css';
	@import '../github-dark.min.css';


	/* @font-face {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 100;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2)
			format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
			U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	@font-face {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 200;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2)
			format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
			U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	@font-face {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2)
			format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
			U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	} */

	:root {
		background-color: #090909;
	}

	img {
		margin: 20px;
	}

	.container {
		text-align: center;
	}
</style>
