<h1>line-height</h1>

<p>Some inline elements can affect the line-height by making the line its on higher.</p>

<section class="inline-element-example">
	<h2>Mono font elements</h2>

	{#each [0,1] as times, i}
		<div class={i === 1 ? `sans` : ``}>
			{#if i === 1} <h3>Test with sans font</h3>{/if}

			<p>Sometimes inline elements are included in block-level elements. If those elements has a different font, or size, it is typographically better that is doesn't affect the line-height. <em>Here's a sentence that includes a <code>code</code> element. All the lines in this paragraph should be of equal size.</em></p>

			<p><strong><code>samp</code>:</strong> I was trying to boot my computer, but I got this hilarious message: <samp>Keyboard not found <br>Press F1 to continue</samp><br>(Another line to check element height).</p>

			<p><strong><code>kbd</code>:</strong> Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render the internet.</p>

			<p><small>(Small text can have equal font-size value for ease-of-mind).</small></p>
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

<style>
	section :is(code, kbd, samp) {
		color: lightgreen;
	}
</style>
