
<script>
	import { math, display } from 'mathlifier';
</script>

<title>aryadee | blog </title>

<h1><span class="fancy-text">Filmic devblog 0</span>: tone curve and color response 🌈</h1>
<p>In this first devblog, we cover testing the concepts behind Filmic's features in Python. We'll be applying interpolated functions to alter images in a pleasing way, and confirming these ideas work before we try building UI and GPU shader code around them.</p>
<p>This post is also available as an <a href="https://github.com/aryadaroui/filmic-devblog">interactive Python (Jupyter) notebook</a>.</p>
<h2>Quick background</h2>
<p>Analog photography is known for the <em>character</em> of its film stocks, e.g., the "<a href="https://old.reddit.com/r/AnalogCircleJerk/comments/clfde6/fuji_greens_or_portra_beans/">Fuji greens</a>." I've been collecting a large catalog of analog photos for this project, and the most common characteristics I've noticed in film scans are the contrast of tones, shifted colors, film grain, and halation. Focusing on tuning these parameters, how well can we make a pleasing, filmic photo?</p>
<h2>Goals</h2>
<p>Write some quick (in development time, not execution time) Python code to apply the aforementioned characteristics to digital photos. Explicitly:</p>
<ol>
<li>remap RGB values for tone contrast adjustment</li>
<li>shift colors' hue, saturation, and luminosity with respect to their hue</li>
</ol>
<p>As a side requirement, we need to interpolate our image transformations. Ultimately, these are mathematical functions, and we must define our input domain and how it maps to our output range. Well, there are a lot of possible pixel values, and we can't realistically define them individually</p>
<p>Instead, we'll define a handful of {@html math("(x, y)")} datapoints and interpolate between them; we can use this as an intuitive interface for making our adjustments.</p>
<h2>The code</h2>
<p>Let's get started with our imports and some setup</p>
<pre><code class="language-python"># standard numpy and typing
import numpy as np

# image read, write, and conversion tools
import cv2
from PIL import Image

# to generate our cubic interpolation functions
from scipy.interpolate import interp1d

# nice image and plot display in our notebook
import matplotlib.pyplot as plt # for our image output

import plotly.graph_objects as go # for our plots, because plotly is awesome

# makes the size of our images a bit bigger in our notebook.
plt.rcParams['figure.figsize'] = [12, 8]
plt.rcParams['figure.dpi'] = 100
</code></pre>
<p>We also have some reeusable visualization functions, but the code block is quite long, so you can check them out in the <a href="https://github.com/aryadaroui/filmic-devblog">notebook</a>. The logic behind these isn't really important, though.</p>

<p>We read in out first test image and see what it looks like. Note that we read in the image data as a <code>float32</code> with a value range of {@html math("[0.0, \\, 1.0]")}, which gives us better precision in our processing before outputting our final images as a <code>uint8</code>.</p>
<pre><code class="language-python">img_rgb1 = read_img('test_pic1.jpg')
show_img_rgb(img_rgb1)
</code></pre>
<p><img alt="png" src="/blog/filmic-devblog0-tone-curve-and-color-response/filmic-devblog0-tone-curve-and-color-response_6_0.png" /></p>
<p>Cool. Let's try to apply a basic tone curve to the image. We'll use five datapoints:</p>
<table>
<thead>
<tr>
<th>tone</th>
<th>{@html math("x")}</th>
<th>{@html math("y")}</th>
</tr>
</thead>
<tbody>
<tr>
<td>blackpoint</td>
<td>0.0</td>
<td>0.2</td>
</tr>
<tr>
<td>shadows</td>
<td>0.25</td>
<td>0.28</td>
</tr>
<tr>
<td>midtones</td>
<td>0.5</td>
<td>0.5</td>
</tr>
<tr>
<td>highlights</td>
<td>0.75</td>
<td>0.8</td>
</tr>
<tr>
<td>whitepoint</td>
<td>1.0</td>
<td>1.0</td>
</tr>
</tbody>
</table>
<p>Using <code>interp1d()</code>, we generate a function that will let us cubicly interpolate between these datapoints, yielding a nice sigmoid-ish curve that will squash our overall dynamic range and raise the blackpoint, but give us a bit more contrast around the midtones, and a bit less contrast around the shadows and highlights.</p>
<pre><code class="language-python"># common sigmoid-ish curve to apply to our image's RGB
tone_data_x = [0.0, 0.25, 0.5, 0.75, 1.0]
tone_data_y = [0.2, 0.28, 0.5, 0.80, 1.0]

# generate cubic interpolation function
f_tone_curve = interp1d(tone_data_x, tone_data_y, kind='cubic') 

plot_tone_curve(tone_data_y, f_tone_curve)
</code></pre>
<p><img alt="png" src="/blog/filmic-devblog0-tone-curve-and-color-response/tone_curve_plot.png" /></p>

<p>Just like we'd expect in the mathematical description of,</p>
{@html display("y = \\mathrm{tone\\_curve}(x) ")}
<p>NumPy let's us apply the curve with <code>f_tone_curve(img_rgb)</code>, which will apply the function to every individual element in the <code>ndArray</code>.</p>
<pre><code class="language-python">show_img_left_right(img_rgb1, f_tone_curve(img_rgb1))
</code></pre>
<p><img alt="png" src="/blog/filmic-devblog0-tone-curve-and-color-response/filmic-devblog0-tone-curve-and-color-response_10_0.png" /></p>
<p>Cool. Goal #1 is accomplished and it wasn't too hard. But now we're going to have to apply curves by separate HLS channels.</p>
<p>Let's create a new curve and call it a <em>color response</em> curve. We'll give it 13 datapoints, the first twelve are for every 30 deg of hue, and the last datapoint is to capture the last 30 deg between 330 and 360 on the hue circle before it repeats itself.</p>
<p><img alt="png" src="/blog/filmic-devblog0-tone-curve-and-color-response/color_wheel.png" /></p>
<p>In the first case, we'll be shifting hue with respect to hue:</p>
{@html display(" H' = H + \\mathrm{color\\_response}(H)")}
<p>Let's shift the azure sky about halfway toward cyan, which is a characteristic sometimes seen in film.</p>
<pre><code class="language-python">img_hls = rgb_to_hls(img_rgb1) # convert our rgb image to hls

# 12 colors for splitting the color wheel by 30 deg slices. The last element circles back to the first!
# we'll set azure to -15 degrees, putting it halfway to cyan.
color_response_data_y = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -15.0, 0.0, 0.0, 0.0, 0.0, 0.0] # shift azure -15.0 degrees
color_response_data_x = np.linspace(0.0, 360, num=13) # [0.0, 30.0, 60.0, ...]
f_color_response_curve = interp1d(color_response_data_x, color_response_data_y, kind='cubic')

# we operate on all the pixels of the image but only on the 0th channel, hue.
img_hls[:, :, 0] = img_hls[:, :, 0] + f_color_response_curve(img_hls[:, :, 0])
img_out = hls_to_rgb(img_hls)

# visualize our output
plot_color_response_curve(color_response_data_y, f_color_response_curve, 'hue')
show_img_left_right(img_rgb1, img_out)
</code></pre>
<p><img alt="png" src="/blog/filmic-devblog0-tone-curve-and-color-response/color_response_hue_plot.png" /></p>

<p><img alt="png" src="/blog/filmic-devblog0-tone-curve-and-color-response/filmic-devblog0-tone-curve-and-color-response_12_1.png" /></p>
<p>This actually looks quite nice. Let's try raising the saturation 20% for azure and see how it looks. The equation for this should look like</p>
{@html display(" S' = S + \\mathrm{color\\_response}(H)")}
<pre><code class="language-python">img_hls = rgb_to_hls(img_rgb1) # reset our img_hls

color_response_data_y = np.array([0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.2, 0.0, 0.0, 0.0, 0.0, 0.0]) # increase saturation of azure 20%
color_response_data_x = np.linspace(0.0, 360.0, num=13)
f_color_response_curve = interp1d(color_response_data_x, color_response_data_y, kind='cubic')

# we operate on all the pixels of the image on saturation channel, with respect to the hue channel.
img_hls[:, :, 2] = img_hls[:, :, 2] + f_color_response_curve(img_hls[:, :, 0])
img_out = hls_to_rgb(img_hls)

plot_color_response_curve(color_response_data_y, f_color_response_curve, 'saturation')
show_img_left_right(img_rgb1, img_out)
</code></pre>
<p><img alt="png" src="/blog/filmic-devblog0-tone-curve-and-color-response/color_response_sat_plot.png" /></p>

<p><img alt="png" src="/blog/filmic-devblog0-tone-curve-and-color-response/filmic-devblog0-tone-curve-and-color-response_14_2.png" /></p>
<p>So, we can generalize our shifting equation as</p>
{@html display(" Y' = Y + \\mathrm{color\\_response}(X)")}
<p>where {@html math("X")} and {@html math("Y")} are color channels.</p>
<h2>Conclusion</h2>
<p>Nice. We successfully demonstrated the effectiveness of our ideas. Admittedly, the tone curve is a pretty proven photo-editing tool, but we were able to use that as a foundation to implement our color response technique, which words splendidly.</p>
<p>In the next post, we'll focus on adding tone responsive film grain, and halation.</p>
<h2>Appendix</h2>
<p>Some quick points worth noting:</p>
<h3>Hue vs. color</h3>
<p>Color and hue are not the same; hue is a subcomponent of color. It's important to note this because our {@html math("\\mathrm{color\\_response()}")} is usually a function of hue, but it isn't always. We can also use it as a function of luminosity (or saturation), which is what we did with the grain application. But then you might ask, "why did you call it <code>f_tone_response()</code> in the code?" That's because, I think there needs to be an option of applying these effects both in the HSL <em>and</em> HSV color spaces in the app and tonality is a good umbrella term for luminosity and value.</p>
<h3>Cubic rippples</h3>
<p>In the cubic interpolation plots, there are ripples where the interpolation overshoots after hitting our target datapoint. This may not seem like a big deal, but it's counterintuitive to the user when there's additional change (however slight in areas zeroed out. To fix this, we use <em>monotonic</em> cubic interpolation in filmic, and we'll cover that implementation in the WebGL shader article.</p>

<style>
img {
	max-width: 100%;
    height: auto;
	display: block;
	margin-left: auto;
	margin-right: auto;
}
</style>
