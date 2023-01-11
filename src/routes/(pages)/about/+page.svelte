<script>
	import { math, display } from 'mathlifier';
</script>

<title>aryadee | about me</title>

<h1><span class="fancy-text">About me</span> 🦧</h1>
<div class="img-top-right">
	<img
		id="pic-of-me"
		src="me2.webp"
		alt="Me looking like I'm an action movie hero who is in disguise because I'm wearing a hat and sunglasses."
	/>
</div>

<p>I am a computer engineer and I like to code.</p>

<p>
	I completed my master's at UC Irvine with my thesis on modeling multi-core SoCs. I was advised by
	professor <a href="http://www.cecs.uci.edu/~doemer/">Rainer Dömer</a>, doing research under the
	UCI CECS Lab.
</p>

<p>
	I have an affinity for signal processing: audio, image, data analysis--basically anything that
	needs an {@html math("n")}-dimensional array.
</p>

<p>Appropriately, in my spare time, I make music, digital art, and take photos.</p>

<p>If there's one insight I'd like you to take away from here, it's this <a href="/quote">quote</a>.</p>

<!-- <hr> -->

<h2>Work</h2>

<p>I am currently looking for new work. <a href="/arya daroui resume.pdf">Here is a copy of my resume</a>, and this is some of the tech I &lt;3:</p>

<div class="img-top-right">
	<img class="tech" src="tech1.svg" alt="Python and TypeScript" />
	<img class="tech" src="tech2.svg" alt="Rust and C++" />
	<img class="tech" src="tech3.svg" alt="Git SQL UNIX" />
</div>

<p>
	Cheers.
</p>

<style>
	p {
		/* text-align: justify; */
	}

	/* #tech-i-love {
		/* max-width: 600px; */
	/* max-height: 100%; */
	/* width */
	/* height: 200px; */
	/* display: block; */
	/* margin-left: auto; */
	/* margin-right: auto; */


	.tech {
		display: block;
		/* overflow: hidden; */
		/* text-align: center; */
		margin: auto;
		max-width: 370px;

		/* max-width: 400px; */
		/* max-height: 400px; */
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
		width: 270px;
		height: 270px;

		/* position: absolute;
		top: 70px;
		right: 80px; */
		/* margin-right: 10px; */

		margin-left: 30px;
		/* margin: 20px; */
	}
	@media screen and (max-width: 720px) {
		.img-top-right {
			padding: 20px;
			/* border-radius: 0; */
		}

		#pic-of-me {
			float: none;
			width: 200px;
			height: 200px;
			/* text-align: center; */
			/* margin-right: 30px; */
			margin-left: 0;
			/* margin-right: 0; */
		}
	}
</style>
