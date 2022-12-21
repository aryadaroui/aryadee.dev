<script lang="ts">
	import Header2 from '$lib/Header2.svelte';
	import Footer2 from '$lib/Footer2.svelte';
	// import { fade } from 'svelte/transition'

	// import { CodeLineNumbers } from 'code-line-numbers';
	import { afterNavigate } from '$app/navigation';
	import hljs from 'highlight.js';




	import { onMount } from 'svelte';
	import { StarSprite } from '$lib/StarSprite';
	import { clamp } from '$lib/functions';
	import { curveBumpX } from 'd3';

	// maybe + symbols in the corner like in MWII UI flourishes

	// window.onload = () => {
	// 		console.log("window loaded")
	// 	}

	// function generate_sprites() {}

	// function draw_sprites(ctx: CanvasRenderingContext2D, sprites: [star_sprite]) {
	// 	// for (let index = 0; index < sprites.length; index++) {
	// 	// 	star_sprite.draw(ctx);
	// 	// }

	// 	sprites.forEach((sprite) => {
	// 		sprite.draw(ctx);
	// 	});
	// }

	// function load_sprites() {
	// 	const blue0 = new Image();
	// 	const blue1 = new Image();
	// 	const blue2 = new Image();
	// 	const blue3 = new Image();
	// 	const blue4 = new Image();
	// 	const blue5 = new Image();
	// 	const blue6 = new Image();
	// 	const blue7 = new Image();
	// 	const blue8 = new Image();
	// 	const blue9 = new Image();
	// 	const pink0 = new Image();
	// 	const pink1 = new Image();
	// 	const pink2 = new Image();
	// 	const pink3 = new Image();
	// 	const pink4 = new Image();
	// 	const pink5 = new Image();
	// 	const pink6 = new Image();
	// 	const pink7 = new Image();
	// 	const pink8 = new Image();

	// 	blue0.src = '/stars/star_blue0.png';
	// 	blue1.src = '/stars/star_blue1.png';
	// 	blue2.src = '/stars/star_blue2.png';
	// 	blue3.src = '/stars/star_blue3.png';
	// 	blue4.src = '/stars/star_blue4.png';
	// 	blue5.src = '/stars/star_blue5.png';
	// 	blue6.src = '/stars/star_blue6.png';
	// 	blue7.src = '/stars/star_blue7.png';
	// 	blue8.src = '/stars/star_blue8.png';
	// 	blue9.src = '/stars/star_blue9.png';
	// 	pink0.src = '/stars/star_pink0.png';
	// 	pink1.src = '/stars/star_pink1.png';
	// 	pink2.src = '/stars/star_pink2.png';
	// 	pink3.src = '/stars/star_pink3.png';
	// 	pink4.src = '/stars/star_pink4.png';
	// 	pink5.src = '/stars/star_pink5.png';
	// 	pink6.src = '/stars/star_pink6.png';
	// 	pink7.src = '/stars/star_pink7.png';
	// 	pink8.src = '/stars/star_pink8.png';

	// 	return [
	// 		blue0.decode(),
	// 		blue1.decode(),
	// 		blue2.decode(),
	// 		blue3.decode(),
	// 		blue4.decode(),
	// 		blue5.decode(),
	// 		blue6.decode(),
	// 		blue7.decode(),
	// 		blue8.decode(),
	// 		blue9.decode(),
	// 		pink0.decode(),
	// 		pink1.decode(),
	// 		pink2.decode(),
	// 		pink3.decode(),
	// 		pink4.decode(),
	// 		pink5.decode(),
	// 		pink6.decode(),
	// 		pink7.decode(),
	// 		pink8.decode()
	// 	]
	// }

	function generate_sprite_stars() {
		const blue_stars = new Array(200);

		for (let index = 0; index < blue_stars.length; index++) {
			blue_stars[index] = new StarSprite();
		}

		// put the closer stars latest to render
		blue_stars.sort((a, b) => {
			return a.z - b.z;
		});

		return blue_stars;
	}

	function draw_sprite_stars(ctx: CanvasRenderingContext2D, stars: StarSprite[]) {
		for (let index = 0; index < stars.length; index++) {
			stars[index].draw(ctx);
		}
	}

	function redraw_sprite_stars(ctx: CanvasRenderingContext2D, stars: StarSprite[]) {
		for (let index = 0; index < stars.length; index++) {
			stars[index].redraw(ctx);
		}
	}

	onMount(() => {
		
		const fps = 30;
		let w;
		let h;
		const canvas = document.getElementById('space') as HTMLCanvasElement;
		const ctx = canvas.getContext('2d')!;
		const setCanvasExtents = () => {
			w = window.innerWidth - 2;
			h = window.innerHeight - 2;
			canvas.width = w;
			canvas.height = h;
		};

		setCanvasExtents();
		window.onresize = () => {
			setCanvasExtents();
			// opacity = 1.0;
			ctx.imageSmoothingEnabled = false;
			redraw_sprite_stars(ctx, blue_stars);
		};

		const blue_stars = generate_sprite_stars();

		ctx.imageSmoothingEnabled = false;
		draw_sprite_stars(ctx, blue_stars);

		let opacity = 1.0;

		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			// perform some animation task here
			// ctx.fillStyle = `rgba(9,9,9, ${opacity})`;
			// ctx.fillRect(0, 0, canvas.width, canvas.height);

			draw_sprite_stars(ctx, blue_stars);
			ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			opacity = clamp(opacity - 0.05, 0.0, 1.0);

			ctx.font = "32px Comic Sans MS";
			ctx.fillStyle = 'red';
			ctx.fillText("why are you breaking my website", 2000, 2000);

			setTimeout(() => {
				requestAnimationFrame(animate);
			}, 1000 / fps);
		}

		animate();

		// const clear = () => {
		// 	c.fillStyle = 'black';
		// 	c.fillRect(0, 0, canvas.width, canvas.height);
		// };
	});




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
		if (navigating.from?.route.id != navigating.to?.route.id) {
			hljs.highlightAll();
			// debugger
			// CodeLineNumbers.addCodeLineNumbers();

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
	<!-- <Header /> -->
	<Header2/>

	<!-- <div class="main"> -->
	<main>
		<div class="overlay-pad">
		<div class="overlay" >
			<slot />
		</div>
	</div>
	</main>
	<!-- </div> -->

	<!-- <Footer /> -->
	<Footer2 />

	<canvas id="space" width="500" height="500" />

</div>

<style>
	/* @import '../main.css'; */
	/* @import '../github-dark.min.css'; */

	/* .main {
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
		padding: 20px;
	} */

	:root {
		background-color: #090909;
	}



	#space {
		/* padding: 10px; */
		background-attachment: fixed;
		background-color: #090909;
		position: fixed;
		top: 0;
		left: 0;
		/* image-rendering: optimizeQuality; */
		z-index: -1;
		/* border: 1px red solid; */
	}

	.overlay-pad {
		padding: 0px 20px 0px;
	}

	.overlay {
		/* color: aliceblue; */
		/* position: absolute; */
		/* font-size: 4em; */

		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
		background-size: contain;
		/* position: absolute; */
		/* margin-bottom: 0; */
		/* height: calc(100vh - 160px); */
		/* bottom: 0; */
		/* background-color: #151617d4; */
		background-color: rgba(31, 35, 39, 0.432);
		border-radius: 15px;

		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		padding-left: 60px;
		padding-right: 60px;
		padding-bottom: 40px;
		padding-top: 40px;
		box-shadow: 0px 0px 30px black;
		/* z-index: 1; */
		/* background-color: cornsilk;; */
		text-align: left;
		/* text-align: justify; */
	}


	@media screen and (max-width: 500px) {

		.overlay {
			padding: 20px;
			/* border-radius: 0; */
		}

	}


</style>
