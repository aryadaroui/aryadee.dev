

<title>aryadee | blog | about filmic</title>

<h1 > <span class="fancy-text">About Filmic</span> 📷</h1>

<p>
	Filmic is a photo-editing app with features to mimic the look of analog film. It's built with <a href="https:en.wikipedia.org/wiki/WebGL">WebGL 2</a> for processing, <a href="https:d3js.org/">D3.js</a> for UI, and <a href="https:svelte.dev/">Svelte</a> for component modularization. As of v0.3, its main features are:
</p>

<ol>
	<li>HSV Color response curves</li>
	<li>Tone curve</li>
	<li>Film grain size, intensity, and offset</li>
	<li>Grain tone response curve</li>
</ol>

<h2>Features</h2>
<p>
	Let's go through each of the features and how I would expect them to be used. <u>Open up the embedded
	images in new tabs to compare at full quality</u>.
</p>
<h3> HSV color response curves</h3>
<p>
	The color response curves represent the shift in hue, saturation, and value of a pixel with
	respect to its initial hue. In other words, it can make greens more yellow, blues less saturated,
	and reds darker. One of my favorites is to push the sky from azure closer to cyan, drop
	the saturation a bit, and then decrease the value of the greens.
</p>

<a href="/blog/hsv0.webp"
	><img src="/blog/hsv0.webp" alt="photo of building without color response adjustment" />
</a>
<a href="/blog/hsv1.webp"
	><img src="/blog/hsv1.webp" alt="photo of building with color response adjustment" />
</a>

<h3> Tone curve</h3>
<p>
	A mainstay in many photo editing programs, this simply remaps combined RGB intensity. A good go-to is give
	the curve a sigmoid shape to accentuate the shadows and highlights, and to raise the
	blackpoint a bit.
</p>

<a href="/blog/tone0.webp"
	><img src="/blog/tone0.webp" alt="photo of woman without tone curve adjustment" />
</a>
<a href="/blog/tone1.webp"
	><img src="/blog/tone1.webp" alt="photo of woman with tone curve adjustment" />
</a>

<h3> Grain control</h3>
<p>
	An important part of the analog film look is its grain. Many photo editing apps have a grain
	filter, but they don't allow fine tuning of parameters. Filmic has controls for adjusting the
	grain size, intensity, exposure, and most importantly, the tones the grain responds to.
</p>

<a href="/blog/grain0.webp"
	><img src="/blog/grain0.webp" alt="photo of woman without film grain" />
</a>
<a href="/blog/grain1.webp"
	><img src="/blog/grain1.webp" alt="photo of woman with film grain" />
</a>

<p>One of my preferred uses is to cover up gross digital ISO noise with film grain.</p>

<a href="/blog/grain2.webp"
	><img src="/blog/grain2.webp" alt="photo of woman without film grain" />
</a>
<a href="/blog/grain3.webp"
	><img src="/blog/grain3.webp" alt="photo of woman with film grain" />
</a>

<h2>Process</h2>
<p>The processing flow of Filmic is the following:</p>
<a href="/blog/filmic v0.3.svg"
	><img src="/blog/filmic v0.3.svg" alt="processing flow of Filmic v0.3" />
</a>
<p>With its subcomponents:</p>
<a href="/blog/color response.svg"
	><img src="/blog/color response.svg" alt="processing flow of Filmic v0.3" />
</a>
<a href="/blog/grain control.svg"
	><img src="/blog/grain control.svg" alt="processing flow of Filmic v0.3" />
</a>

<p>
	The intimate details of the design, and programming Filmic (including the pitfalls I ran into)
	will be discussed in a later series of blog posts.
</p>

<h2>Related and Future works</h2>

<p>
	Filmic's feature list is firmly set in its niche of film emulation. The list of todos are:
</p>

<ul>
	<li>New features</li>
	<ul>
		<li>Bloom</li>
		<li>Halation</li>
		<li>Desktop app with Tauri to enable batch processing</li>
		<li>HSL / HSV toggle</li>
		<li>Tint / temperature adjustment by shadows, midtones, and highlights</li>
		<li>Grain by RGB channel, rather than just by value or luminosity</li>
	</ul>
	<li>Fixes</li>
	<ul>
		<li>Window function on the S, V, L channel to mitigate pixel blowout</li>
		<li>Tidy up code enough that open-source release wouldn't be embarrassing</li>
		<li>Fix canvas viewport resizing</li>
	</ul>
</ul>

<p>
	If what you're looking for is outside of this scope, there are plenty of cool (premium) software that I recommend:
</p>
	<ul>
		<li><a href="https:www.dehancer.com/">Dehancer</a></li>
		<li><a href="https:grubbasoftware.com/">TrueGrain 2</a></li>
		<li><a href="https:www.pixelmator.com/pro/">Pixelmator Pro</a></li>
	</ul>




<style>
	img {
		width: 66%;
		height: 66%;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}


</style>
