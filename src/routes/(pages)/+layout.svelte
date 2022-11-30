<script>
	// import Header from '../lib/Header.svelte';
	import Header from "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";
	import hljs from 'highlight.js';
	import { CodeLineNumbers } from 'code-line-numbers';
	import { afterNavigate } from '$app/navigation';

	// import { page } from '$app/stores';

	// const { page } = stores();
	// $: if (page) {}

	// onMount(() => {
	// 	hljs.highlightAll();
	// 	CodeLineNumbers.addCodeLineNumbers();

	// 	let script = document.createElement('script');
	// 	script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
	// 	document.head.append(script);

	// 	// script.onload = () => {
	// 	// 	var MathJax = {
	// 	// 		tex: {
	// 	// 			inlineMath: [
	// 	// 				['$', '$'],
	// 	// 				['\\(', '\\)']
	// 	// 			]
	// 	// 		},
	// 	// 		svg: { fontCache: 'global' }
	// 	// 	};
	// 	// };
	// });

	afterNavigate((navigating) => {
		// debugger

		// prevent reformatting special code and math markup when navigating to same page
		if ((navigating.from?.route.id != navigating.to?.route.id)) {
			hljs.highlightAll();
			// debugger
			CodeLineNumbers.addCodeLineNumbers();

			// let script = document.createElement('script');
			// script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
			// document.head.append(script);
		}

	});

</script>


<!-- <svelte:head> -->
<!-- <script type="text/javascript" id="MathJax-script" async
	src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
  </script> -->

<!-- <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script> -->
<!-- </svelte:head> -->

<div>
	<Header />

	<div class="main">
		<slot />
	</div>

	<Footer />
</div>

<style>
	/* @import '../main.css'; */
	/* @import '../github-dark.min.css'; */

	.main {
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
		padding: 20px;
	}
</style>
