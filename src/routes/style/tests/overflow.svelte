<h1>overflow</h1>

<p>Unintentionally affecting an element's size and long texts can break a layout by overflowing horizontally, creating the need for a horizontal scrollbar.</p>

<section>
	<h2>Size calculation</h2>

	<p class="border-example">This element has a wide border and <code>width: 100%</code>. <code>box-sizing: border-box</code> will include border and padding when computing an elements size, so width is actually <code>100%</code> even this element has a border.</p>

	<p class="padding-example">This element has lots of padding and <code>width: 100%</code>. <code>box-sizing: border-box</code> will include border and padding when computing an elements size, so width is actually <code>100%</code> even this element has padding.</p>
</section>

<section id="long-words">
	<h2>Long Words</h2>

	<p>Long words should not overflow, but break if necessary, and automatically with a hyphen if can be</p>

	<p>Lopadotemachoselachogaleokranioleipsanodrimhypotrimmatosilphiokarabomelitokatakechymenokichlepikossyphophattoperisteralektryonoptekephalliokigklopeleiolagoiosiraiobaphetraganopterygon</p>

	<p>Strengthed</p>
</section>

<section>
	<h2><code>pre</code></h2>

	<p>Some browsers has CSS default where the <code>pre</code> element will not wrap, and can overflow horizontally.</p>

	<pre>
<code>Asuperlonglineofcodetoseeifitwraps. Itisdifficultformetomakeupenoughcontentforthistest! Ihavetowriteevenmore?? Howwideisthiscontainer?</code>
	</pre>
</section>


<style>
	#long-words > :last-child {
		font-size: max(22.5vw, 17.5vh);
	}

	.border-example {
		border: var(--space, 1em) solid var(--sep-color);
		width: 100%;
	}

	.padding-example {
		padding: calc(2 * var(--space, 1em));
		width: 100%;
	}
</style>
