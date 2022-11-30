<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import { page } from '$app/stores';
</script>

<Header />

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

<Footer />

<style>
		@import '../main.css';

	.container {
		text-align: center;
	}
</style>
