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
	@import '../main.css';

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
