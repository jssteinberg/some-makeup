<section class="button">
	<h2><code>button</code></h2>

	<p>…should inherit <code>font-family</code>.</p>
	<p>…should not affect <code>line-height</code>.</p>

	<p>A <button>button</button> is difficult to use out of the box inline. It has a lot of default browser styling, and for most sites that use buttons, they are styled specifically. How much does a <button>button</button> need to be fixed?</p>

	<p>It works better out of the box in a block without normal text:</p>

	<button>Button</button>
</section>

<style>
	:is(p,li,dl,blockquote,h1,h2,h3,h4,h5,h6) button { /* address? */
		border: none;
		padding-block-start: 0;
		padding-block-end: 0;
		font-size: 1em;
		line-height: 1;
	}
</style>
