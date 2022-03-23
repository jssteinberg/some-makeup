<section id="long-words">
	<h2>Long Words</h2>

	<p>Long words should not overflow, but break if necessary, and automatically with a hyphen if can be</p>

	<p>Lopadotemachoselachogaleokranioleipsanodrimhypotrimmatosilphiokarabomelitokatakechymenokichlepikossyphophattoperisteralektryonoptekephalliokigklopeleiolagoiosiraiobaphetraganopterygon</p>

	<p>Strengthed</p>
</section>

<section>
	<h2><code>box-sizing: border-box</code></h2>

	<p class="border-box-example">This has a big border and <code>width: 100%</code>. <code>box-sizing: border-box</code> will include border and padding in size so width is actually <code>100%</code> even this element has a big border.</p>
</section>

<section>
	<h2><code>&lt;pre&gt;</code></h2>

	<pre>
<code>Asuperlonglineofcodetoseeifitwraps. Itisdifficultformetomakeupenoughcontentforthistest! Ihavetowriteevenmore?? Howwideisthiscontainer?</code>
	</pre>
</section>


<style>
	#long-words > :last-child {
		font-size: max(22.5vw, 17.5vh);
	}

	.border-box-example {
		border: 1rem solid var(--sep-color);
		width: 100%;
	}
</style>
