<h1>line-height</h1>

<p>Some inline elements can affect the line-height by making the line its on higher.</p>

<section>
	<h2>Confusing font-size change on device orientation change</h2>

	<p>On Ios font-size for certain elements can get a bigger size when changing device-orientation to landscape.</p>
</section>

<section class="inline-element-example">
	<h2>Mono font elements</h2>

	{#each [0,1] as i}
		<div class={i === 1 ? `sans` : ``}>
			{#if i === 1} <h3>Test with sans font</h3>{/if}

			<p>Sometimes inline elements are included in block-level elements. If those elements has a different font, or size, it is typographically more comfortable that is doesn't affect the line-height. <em>Here's a sentence that includes a <code>code</code> element. All the lines in this paragraph should be of equal size.</em></p>

			<p><strong><code>samp</code>:</strong> I was trying to boot my computer, but I got this hilarious message: <samp>Keyboard not found <br>Press F1 to continue</samp><br>(Another line to check element height).</p>

			<p><strong><code>kbd</code>:</strong> Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render the internet.</p>

			<hr>

			<p><small>(Small text can have equal font-size value for ease-of-mind).</small></p>

			<hr>

			<p><code>pre</code> blocks can disrupt the vertical flow if their size and line-height differs from other content.</p>

<pre><code>{`float InvSqrt(float x) {
	float xhalf = 0.5f * x;
	int i = *(int*)&x;
	i = 0x5f3759df - (i >> 1);
	x = *(float*)&i;
	x = x*(1.5f - xhalf*x*x);
	return x;
}`}</code></pre>

		<p>A trick (not included in makeup-style) to further ensure that height of <code>pre</code> blocks follow the flow of the context is to set <code>{`pre { font-family: inherit }`}</code> if you know it has inner wrapping <code>code</code> elements, as it often has for code previews generated from a markdown parser or a CMS.</p>

<pre class="pre-trick"><code>{`float InvSqrt(float x) {
	float xhalf = 0.5f * x;
	int i = *(int*)&x;
	i = 0x5f3759df - (i >> 1);
	x = *(float*)&i;
	x = x*(1.5f - xhalf*x*x);
	return x;
}`}</code></pre>
		</div>
	{/each}
</section>

<section>
	<h2><code>sub, sup</code></h2>

	<p>Almost every developer's favorite molecule is
	C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, also known as "caffeine."<br aria-hidden><em><code>sub</code> should not affect line-heigh.</em></p>

	<p>The <b>Pythagorean theorem</b> is often expressed as the following equation: <var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var><br aria-hidden><em><code>sup</code> should not affect line-heigh.</em></p>

	<p><em>Another paragraph to compare with.<br>Over two lines.</em></p>
	<p><em>Another paragraph to compare with.<br>Over two lines,<br>three lines.</em></p>
</section>

<ButtonSection />
<div class="sans">
	<ButtonSection />
</div>

<!-- <aside>
	<h2>CSS unit experiment</h2>

	<p>What <code>ex</code> value equals 1 font-size height?</p>

	{#each [0,1] as i}
		<div class={i === 1 ? `sans` : ``}>
			<p class="em">Normal inherited font-size</p>
			<p class="ex"><code>ex</code> value</p>
		</div>
	{/each}
</aside> -->

<style>
	section :is(code, kbd, samp) {
		color: lightgreen;
	}

	pre.pre-trick {
		font-family: inherit;
	}

	.ex {
		font-size: 2.5ex;
	}

	.sans {
		background: var(--sep-color);
	}
</style>

<script>
	import ButtonSection from "./_button.svelte";
</script>
