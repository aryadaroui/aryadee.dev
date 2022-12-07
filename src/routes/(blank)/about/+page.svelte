<script lang="ts">
	import type { Builder } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	import { StarSprite } from './StarSprite';
	import { clamp } from '../filmic/functions';

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
		const fps = 24;
		let w;
		let h;
		const canvas = document.getElementById('space') as HTMLCanvasElement;
		const ctx = canvas.getContext('2d')!;
		const setCanvasExtents = () => {
			w = window.innerWidth - 5;
			h = window.innerHeight - 10;
			canvas.width = w;
			canvas.height = h;
		};

		setCanvasExtents();
		window.onresize = () => {
			setCanvasExtents();
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
			ctx.fillStyle = `rgba(10,11,12, ${opacity})`;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			draw_sprite_stars(ctx, blue_stars);
			ctx.fillStyle = `rgba(9,9,9, ${opacity})`;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			opacity = clamp(opacity - 0.05, 0.0, 1.0);

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
</script>

<main>
	<div class="header-content">
		<div class="nav-wrapper"><a class="site-title" rel="author" href="/">aryadee</a></div>
		<div class="nav-wrapper">
			<a class="nav-item" href="/nerd-stuff/">nerd stuff</a>
			<a class="nav-item" href="/filmic/">filmic</a>
			<a class="nav-item" href="/art/" style="margin-right: 0px;">art</a>
			<!-- <a class="nav-item" href="/music/" style="margin-right: 0px;">music</a> -->
		</div>
	</div>

	<div class="overlay">
		<h1>// about me</h1>
		<div class="img-top-right">
			<img
				id="pic-of-me"
				src="me_looking_like_im_an_action_movie_hero_who_is_in_disguise.webp"
				alt="Me looking like I'm an action movie hero who is in disguise because I'm wearing a hat and sunglasses."
				width="300"
				height="300"
			/>
		</div>
		<p>
			My name is Arya. I am a computer engineer and I like to code.
			<br /><br />
			I did my master's at UC Irvine and my thesis was on modeling multi-core SoCs, advised by professor
			Rainer Dömer.
			<br /><br />
			I have an affinity for signal processing: audio, image, data analysis, neural networks--basically
			anything that needs an ndArray.
			<br /><br />
			My hobbies match my code; in my spare time, I make music, digital art, and take photos.
			<!-- <br /><br /> -->
			<!-- P.S. Try resizing your browser window for some fun. -->
		</p>
	</div>

	<div class="footer">
		<div class="item-left">
			<p>Arya "Dee" Daroui</p>
			<a class="page-link" href="mailto: adaroui@uci.edu">adaroui@uci.edu</a>
		</div>

		<div class="item-right">
			<p>Computer engineer</p>
			<a class="page-link" href="/about">About me</a>
		</div>
	</div>

	<canvas id="space" width="500" height="500" />
</main>

<style>
	:root {
		background-color: #090909;
	}

	h1 {
		font-size: 1.7em;
	}

	.img-top-right {
		text-align: center;
		/* content: ''; */
		/* display: block; */
		/* float: right; */
		/* height: 200px; */
	}

	#pic-of-me {
		float: right;

		/* position: absolute;
		top: 70px;
		right: 80px; */
		/* margin-right: 10px; */

		margin-left: 30px;
		/* margin: 20px; */
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
		background-color: rgba(31, 33, 35, 0.432);
		border-radius: 15px;

		backdrop-filter: blur(10px);
		padding-left: 80px;
		padding-right: 80px;
		padding-bottom: 60px;
		padding-top: 60px;
		box-shadow: 0px 0px 30px black;
		/* z-index: 1; */
		/* background-color: cornsilk;; */
		text-align: justify;
	}

	main {
		background-color: #090909;
		height: 0;
		text-align: center;
		/* background-color: aliceblue; */
	}
	canvas {
		/* padding: 10px; */
		background-attachment: fixed;
		background-color: #090909;
		position: fixed;
		top: 0;
		left: 0;
		image-rendering: optimizeQuality;
		z-index: -1;
		/* border: 1px red solid; */
	}

	.header-content {
		font-family: 'Hack';
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
		font-family: Hack;
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

	.item-left {
		text-align: left;
		padding: 0px;
	}

	.item-right {
		text-align: right;
		padding: 0px;
	}

	.footer {
		padding: 0px;
		margin-left: auto;
		margin-right: auto;
		max-width: 800px;
		display: flex;
		justify-content: space-between;
		margin-bottom: 50px;
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

		.overlay {
			padding: 20px;
		}
	}

	@media screen and (max-width: 720px) {
		#pic-of-me {
			float: none;
			/* text-align: center; */
			margin-right: 30px;
			/* margin-left: 0; */
			/* margin-right: 0; */
		}
	}

	@media screen and (max-width: 800px) {
		.item-left {
			padding: 20px;
		}

		.item-right {
			text-align: right;
			padding: 20px;
		}
	}
</style>
