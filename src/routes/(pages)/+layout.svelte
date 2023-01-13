<script lang="ts">
	import Header2 from '$lib/Header2.svelte';
	import Footer2 from '$lib/Footer2.svelte';

	import { afterNavigate } from '$app/navigation';
	import hljs from 'highlight.js';

	import { onMount } from 'svelte';
	import { StarSprite } from '$lib/StarSprite';
	import { clamp } from '$lib/functions';

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
			ctx.imageSmoothingEnabled = false;
			redraw_sprite_stars(ctx, blue_stars);
		};

		const blue_stars = generate_sprite_stars();

		ctx.imageSmoothingEnabled = false;
		draw_sprite_stars(ctx, blue_stars);

		let opacity = 1.0;

		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			draw_sprite_stars(ctx, blue_stars);
			ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			opacity = clamp(opacity - 0.05, 0.0, 1.0);

			ctx.font = '32px Comic Sans MS';
			ctx.fillStyle = 'red';
			ctx.fillText('why are you breaking my website', 2000, 2000);

			setTimeout(() => {
				requestAnimationFrame(animate);
			}, 1000 / fps);
		}

		animate();
	});

	afterNavigate((navigating) => {
		// prevent reformatting special code and math markup when navigating to same page
		if (navigating.from?.route.id != navigating.to?.route.id) {
			hljs.highlightAll();
		}
	});
</script>

<div>
	<Header2 />
	<main>
		<div class="overlay-pad">
			<div class="overlay">
				<slot />
			</div>
		</div>
	</main>
	<Footer2 />
	<canvas id="space" width="500" height="500" />
</div>

<style>
	:root {
		background-color: #090909;
	}

	#space {
		background-attachment: fixed;
		background-color: #090909;
		position: fixed;
		top: 0;
		left: 0;
		/* image-rendering: optimizeQuality; */
		z-index: -1;
	}

	.overlay-pad {
		padding: 0px 20px 0px;
	}

	.overlay {
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
		background-size: contain;

		/* text-align: justify; */

		/* background-color: rgba(30, 35, 40, 0.3); */
		background-color: rgba(33, 35, 37, 0.22);

		border-radius: 15px;

		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		padding-left: 60px;
		padding-right: 60px;
		padding-bottom: 40px;
		padding-top: 40px;
		box-shadow: 0px 10px 20px black;

		border-top: 1.5px solid rgba(45, 50, 55, 0.9);
		border-bottom: 1.5px solid rgba(22, 25, 28, 0.9);
		text-align: left;
	}

	@media screen and (max-width: 500px) {
		.overlay {
			padding: 20px;
		}
	}
</style>
