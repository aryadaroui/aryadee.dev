<script>
	import { math, display } from 'mathlifier';
	import hljs from 'highlight.js';
	import { onMount } from 'svelte';

	// onMount(()=> {
	// 	hljs.highlightAll();
	// })
</script>

<title>aryadee</title>

<!-- <Header /> -->

<!-- <div class="main"> -->
<h1><span class="fancy-text">Hello world</span> 🌎</h1>

<p>My name is Arya.</p>
<p>
	I write nerdy stuff, am developing an <a href="/filmic">app for analog film emulation</a>, and I make some meaningless
	art. Here's more info <a href="/about-me">about me</a>.
</p>

<!-- <h2>Select blog posts</h2> -->

<!-- <br> -->
<!-- <br> -->
<!-- In no particular order, I know		Look at this math {@html math('f(x) = x^2')}. Wow let's look at a block: -->
<!-- </p> -->
<!-- <ul> -->
<!-- <li>Python</li> -->
<!-- <li>C</li> -->
<!-- <li>Rust</li> -->
<!-- <li>C++</li> -->
<!-- <li>JavaScript</li> -->
<!-- <li>SQL</li> -->
<!-- </ul> -->

<!-- Along with their relevant libraries -->

<!-- <ul> -->
<!-- <li>Pandas and NumPy</li> -->
<!-- <li>TensorFlow</li> -->
<!-- <li>SystemC</li> -->
<!-- <li>Svelte / SvelteKit</li> -->
<!-- <li>WebGL</li> -->
<!-- <li>Tauri</li> -->
<!-- </ul> -->

<h2>Posts</h2>
<h3>
	<a href="/blog/filmic-devblog1-film-grain-and-halation">
		Filmic devblog 1: film grain and halation</a
	>
</h3>
<h3>
	<a href="/blog/filmic-devblog0-tone-curve-and-color-response">
		Filmic devblog 0: tone curve and color response</a
	>
</h3>
<h3><a href="/blog/about-filmic">About Filmic</a></h3>
<h3><a href="/blog/bubble-dark">bubble-dark VS Code theme</a></h3>
<!-- </div> -->

<!-- {@html display('\\int_0^1 f(x) \\, \\mathrm{d}x')} -->

<!-- <pre><code class="language-python"
		>'''
just some more lines
'''
def function():
	print('howdy')
	print('howdy')
	print('howdy')
	print('howdy')</code
	></pre> -->

<!-- <Footer /> -->

<!-- <div class="luminaire"></div> -->
<style>
	/* @import '../main.css'; */
	/* @import '../github-dark.min.css'; */

	/* h1 {
		font-size: 1.5em;
	}

	h2 {
		font-size: 1.3em;
	} */

	h3 > a {
		font-family: 'Swiss 721';
	}

	/* .main {
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
		padding: 20px;
	} */
</style>
