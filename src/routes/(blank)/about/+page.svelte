<script lang="ts">
	import type { Builder } from '@sveltejs/kit';
	import { image } from 'd3';
	import { onMount } from 'svelte';
	import { init } from 'svelte/internal';
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
		const blue_stars = new Array(300);

		for (let index = 0; index < blue_stars.length; index++) {
			blue_stars[index] = new StarSprite();
		}

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
		const fps =20;
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
			// redraw();
		};

		// Promise.all(load_sprites()).then(() => {
		// 	draw_sprite_stars(ctx, blue_stars)
		// })

		const blue_stars = generate_sprite_stars();

		ctx.imageSmoothingEnabled = false;
		draw_sprite_stars(ctx, blue_stars);

		// function intro() {
		// 	ctx.fillStyle = 'blue';
		// 	ctx.fillRect(0, 0, canvas.width, canvas.height);
		// }

		let opacity = 1.0;

		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			// perform some animation task here
			ctx.fillStyle=`rgba(10,11,12, ${opacity})`
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			// draw sprite stars
			// draw dot stars

			// sprite.draw(ctx);
			draw_sprite_stars(ctx, blue_stars);
			ctx.fillStyle=`rgba(9,9,9, ${opacity})`
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			opacity = clamp( opacity - 0.1, 0.0, 1.0);

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
	<canvas id="space" width="500" height="500" />
</main>

<style>
	:root {
		background-color: #090909;
	}

	main {
		background-color: #090909;
	}
	canvas {
		/* padding: 10px; */
		background-color: #090909;
		/* border: 1px red solid; */
		image-rendering: pixelated; /* Awesome future-browsers       */
	}
</style>
