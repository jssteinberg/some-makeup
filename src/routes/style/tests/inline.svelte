<script>
	import ButtonSection from "./_button.svelte";
</script>

<h1>Inline</h1>

<p>Check if inline elements affect lines’ heights.</p>

{#each [0, 1] as i}
	<div class={i === 1 ? `sans` : ``}>
		<p><em>1 paragraph.</em></p>
		<p><em>2 paragraphs,<br />both for…</em></p>
		<p><em>3 paragraphs<br />all three for<br />height comparison.</em></p>

		<section>
			<h2><code>abbr</code></h2>
			<p>
				You can use <abbr title="Cascading Style Sheets">CSS</abbr> to style
				your <abbr title="HyperText Markup Language">HTML</abbr>.
			</p>
			<p>
				An <abbr>abbr</abbr> with no <code>title</code> attribute.
			</p>
		</section>

		<section class="inline-element-example">
			<h2>Mono font elements</h2>

			<p>
				Sometimes inline elements are included in block-level elements. If those
				elements has a different font, or size, it is typographically more
				comfortable that is doesn't affect the line-height. <em
					>Here's a sentence that includes a <code>code</code> element. All the lines
					in this paragraph should be of equal size.</em
				>
			</p>

			<p>
				<strong><code>samp</code>:</strong> I was trying to boot my computer,
				but I got this hilarious message:
				<samp>Keyboard not found <br />Press F1 to continue</samp><br />(Another
				line to check element height).
			</p>

			<p>
				<strong><code>kbd</code>:</strong> Please press <kbd>Ctrl</kbd> +
				<kbd>Shift</kbd>
				+ <kbd>R</kbd> to re-render the internet.
			</p>

			<hr />

			<p>
				<code>pre</code> blocks can disrupt the vertical flow if their size and line-height
				differs from other content.
			</p>

			<pre><code
					>{`float InvSqrt(float x) {
	float xhalf = 0.5f * x;
	int i = *(int*)&x;
	i = 0x5f3759df - (i >> 1);
	x = *(float*)&i;
	x = x*(1.5f - xhalf*x*x);
	return x;
}`}</code
				></pre>

			<p><code>{`addressTerminatedHastaLaVistaBaby`}</code></p>
		</section>

		<section>
			<h2><code>sub, sup</code></h2>

			<p>
				Almost every developer's favorite molecule is C<sub>8</sub>H<sub>10</sub
				>N<sub>4</sub>O<sub>2</sub>, also known as "caffeine."<br
					aria-hidden="true"
				/><em><code>sub</code> should not affect line-heigh.</em>
			</p>

			<p>
				The <b>Pythagorean theorem</b> is often expressed as the following
				equation: <var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> =
				<var>c<sup>2</sup></var><br aria-hidden="true" /><em
					><code>sup</code> should not affect line-heigh.</em
				>
			</p>

			<p>In a grid:</p>

			<p class="grid-test">
				<sub>lot of sub</sub>
				<sup>lot of sup</sup>
			</p>
		</section>
	</div>
{/each}

<ButtonSection />

<div class="sans">
	<ButtonSection />
</div>

<p class="grid-test">
	<code>some code</code>
	<code>some code</code>
</p>

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
	.ex {
		font-size: 2.5ex;
	}

	.sans {
		background: var(--sep-color);
	}

	.grid-test {
		width: 5em;
		display: flex;
	}
</style>
