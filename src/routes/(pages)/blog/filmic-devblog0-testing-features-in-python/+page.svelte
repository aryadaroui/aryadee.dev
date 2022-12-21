<script>
	import { math, display } from 'mathlifier';
</script>

<title>aryadee | blog | filmic devblog 0: testing features in python</title>

<h1><span class="fancy-text">filmic devblog 0</span>: testing features in python 🧸</h1>

<p>
	In this first devblog, we cover testing the concepts behind filmic's features in Python. We'll be
	applying interpolated functions to alter images in a pleasing way, and confirming these ideas work
	before we try building UI and GPU shader code around them.
</p>

<p>This article is also available as a Jupyter Notebook.</p>

<h2>quick background</h2>

<p>
	Analog photography is known for the *character* of its film stocks, e.g., the "<a
		href="https://old.reddit.com/r/AnalogCircleJerk/comments/clfde6/fuji_greens_or_portra_beans/"
		>Fuji greens</a
	>." I've been collecting a large catalog of analog photos for this project, and the most common
	characteristics I've noticed in film scans are the contrast of tones, shifted colors, film grain,
	and halation. Focusing specifically on tuning specifically these parameters, how well can we make
	a pleasing, filmic photo?
</p>

<h2>goals</h2>

<p>
	Write some quick (in development time, not execution time) Python code to apply the aforementioned
	characteristics to digital photos. Explicitly:
</p>

<ol>
	<li>remap RGB values for tone contrast adjustment</li>
	<li>shift colors&#39; hue, saturation, and luminosity with respect to their hue</li>
	<li>add granular noise to the image with respect to tone</li>
	<li>add halation around blown out image highlights</li>
</ol>

<p>
	As a side requirement, we need to interpolate our image transformations. Ultimately, these are
	mathematical functions, and we must define our input domain and how it maps to our output range.
	Well, there are a lot of possible pixel values, and we can't realistically define them
	individually
</p>

<p>
	Instead, we'll define a handful of {@html math('(x, y)')} datapoints and interpolate between them;
	we can use this as an intuitive interface for making our adjustments.
</p>

<h2>getting things done</h2>

<p>Let's get started with our imports and some setup</p>

<pre><code class="language-python" lang="python"
		># standard numpy and typing
import numpy as np
import numpy.typing as npt

# image read, write, and conversion tools
import cv2
from PIL import Image

# to generate our cubic interpolation functions
from scipy.interpolate import interp1d

# nice image and plot display in our notebook
import matplotlib.pyplot as plt # for our image output

import plotly.graph_objects as go # for our plots, because plotly is awesome

# to generate simplex noise for fake film grain
# gives unresolved import error in  VS Code Jupyter notebook, but it still works
from opensimplex import noise2array 

# to apply gaussian blur for halation
from scipy.ndimage import gaussian_filter

# makes the size of our images a bit bigger in our notebook.
plt.rcParams['figure.figsize'] = [12, 8]
plt.rcParams['figure.dpi'] = 100
</code></pre>

<p>
	There are also some function definitions, but we'll skip those because they'll clog up space. You
	can check them out in the notebook.
</p>

<p>
	We read in out first test image and see what it looks like. Note that we read in the image data as
	a <code>float32</code> with a value range of {@html math('[0.0, \\, 1.0]')}, which gives us better
	precision in our processing before outputting our final images as a <code>uint8</code>.
</p>

<pre><code class="language-python" lang="python"
		>img_rgb1 = read_img('test_pic1.jpg')
show_img_rgb(img_rgb1)
</code></pre>

<p>Cool. Let&#39;s try to apply a basic tone curve to the image. We&#39;ll use five datapoints:</p>

<figure>
	<table class="styled-table">
		<thead> <tr><th>tone</th><th>x</th><th>y</th></tr></thead>
		<tbody
			><tr><td>blackpoint</td><td>0.00</td><td>0.20</td></tr><tr
				><td>shadows</td><td>0.25</td><td>0.28</td></tr
			><tr><td>midtones</td><td>0.50</td><td>0.50</td></tr><tr
				><td>highlights</td><td>0.75</td><td>0.80</td></tr
			><tr><td>whitepoint</td><td>1.00</td><td>1.00</td></tr></tbody
		>
	</table>
</figure>

<p>
	Using <code>interp1d()</code>, we generate a function that will let us cubicly interpolate between
	these datapoints, yielding a nice sigmoid-ish curve that will squash our overall dynamic range and
	raise the blackpoint, but give us a bit more contrast around the midtones, and a bit less contrast
	around the shadows and highlights.
</p>

<pre><code class="language-python" lang="python"># common sigmoid-ish curve to apply to our image&#39;s RGB
tone_data_x = [0.0, 0.25, 0.5, 0.75, 1.0]
tone_data_y = [0.2, 0.28, 0.5, 0.80, 1.0]

# generate cubic interpolation function
f_tone_curve = interp1d(tone_data_x, tone_data_y, kind=&#39;cubic&#39;) 

plot_tone_curve(tone_data_y, f_tone_curve)
</code></pre>

<p>Just like we&#39;d expect in the mathematical description of,</p>

{@html display('y = \\mathrm{tone\\_curve}(x)')}

<p>NumPy let's us apply the curve with <code>f_tone_curve(img_rgb)</code>, which will apply the function to every individual element in the <code>ndArray</code>.</p>

<pre><code class="language-python" lang="python">show_img_left_right(img_rgb1, f_tone_curve(img_rgb1))
</code></pre>
