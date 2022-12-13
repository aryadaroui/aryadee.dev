<title>aryadee | about me</title>

<h1>// <span class="fancy-text">about me</span> 🦧</h1>
<div class="img-top-right">
	<img
		id="pic-of-me"
		src="me_looking_like_im_an_action_movie_hero_who_is_in_disguise.webp"
		alt="Me looking like I'm an action movie hero who is in disguise because I'm wearing a hat and sunglasses."
	/>
</div>
<p>
	I am a computer engineer and I like to code.
	<br /><br />
	I completed my master's at UC Irvine with my thesis on modeling multi-core SoCs. I was advised by professor <a href="http://www.cecs.uci.edu/~doemer/">Rainer Dömer</a>, doing research under the UCI CECS Lab.
	<br /><br />
	I have an affinity for signal processing: audio, image, data analysis--basically anything that needs
	an <code>ndArray</code>.
	<br /><br />
	Appropriately, in my spare time, I make music, digital art, and take photos.
	<br /><br />
	I am currently looking for new work. If you'd like to get in touch, please <a href="mailto: adaroui@uci.edu">email me</a>.
	<br /><br />
	Cheers.

	<!-- <br /><br /> -->
	<!-- P.S. Try resizing your browser window for some fun. -->
</p>

<style>
	p {
		font-size: 0.95em;
		line-height: 1.5em;
	}

	h1 {
		font-size: 1.5em;
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
		width: 300px;
		height: 300px;

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
