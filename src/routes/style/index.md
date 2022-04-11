---
title: makeup-style
description: So you want to makeup some styling?
set: ['typography', 'code', 'sans']
---

# makeup-style

So you want to makeup style? `npm install makeup-style`

These minimal CSS files fixes default browser CSS, for narrow viewports first, and provides the intuitive default CSS for styling in general and typographic style.

<div class="grid">
<section>

## "Fix"

```css
@import 'makeup-style/src/fix.css';
```

Focused and lean CSS: to prevent text and content from overflowing; to prevent some elements from affecting line-height; fixes for font settings, semantic styling and usability (excluding button and inputs). *Mandatory CSS for basic typography and avoiding common layout gotchas, especially for narrow viewports.*

</section>
<section>

### "Do"---A <cite>Fix</cite> Expansion

```css
@import 'makeup-style/src/do.css';
```

CSS with intuitive CSS behaviours and resets for doing CSS---for a better developer experience. *Includes resets for some `button` and `input` properties.*

`--mono-font` for setting mono-font-family for `code, kbd, pre, samp`. Falls back to `monospace`.

<Details>
<span slot="summary">Example</span>

```css
:root {
	--mono-font: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
}
```

</Details>

</section>
<section>

## "Space"

```css
@import 'makeup-style/src/space.css';
```

CSS that sets consistent spacing between the needed block-level elements.

`--space` for setting vertical spacing between intuitive block-level elements. It's a point to not use a font-size realtive unit like `em` or `ex`, but use `rem` or another value to set font-size for a container. Falls back to `1rem`.

`--block-start`/`--block-end` for setting start/end vertical spacing for the intuitive block-level elements. Falls back to `var(--space, 1rem)`.

<Details>
<span slot="summary">Example</span>


```css
:root {
	--font-size: clamp(
		1rem, 4.8vw, 1.3rem
	);
}

.content {
	--space: var(--font-size);
	font-size: var(--font-size);
}

@media (min-width: 900px) {
	:root {
		--font-size: 1.1rem;
	}
}
```

</Details>
</section>
<section>

### "Flow"---A <cite>Space</cite> Expansion

```css
@import 'makeup-style/src/flow.css';
```

CSS that sets line-height, headings' line-height to be computed to container defining `--added-lead`, and sets other elements to flow.

`--added-lead` for setting line-height to `1 + var(--added-lead, .6)`. Falls back to `.6`.

`--space` for setting some more spaces. Falls back to `1rem`.

`--hr-height` for setting height of `<hr>`. Falls back to `var(--space, 1rem)`.

{#each Array.from(Array(3)) as _,i}

<p>
	{#if i !== 2}
		<code>--h{i + 1}-line-span</code>
	{:else}
		<code>--h3-line-span</code>-<code>--h6-line-span</code>
	{/if}
	for setting the number of lines the heading should span over. Falls back to 
	{#if i === 0}<code>2</code>{:else}<code>1</code>{/if}.
</p>

<p>
	{#if i !== 2}
		<code>--h{i + 1}-added-lead</code>
	{:else}
		<code>--h3-added-lead</code>-<code>--h6-added-lead</code>
	{/if}
	for setting the added lead to the heading's line-height. Falls back to
	{#if i === 0}
		<code>.125</code>.
	{:else if i === 1}
		<code>.25</code>.
	{:else}
		<code>var(--added-lead, .6)</code>.
	{/if}
</p>

{/each}

---

*Side effects:*

- Easy gradient `<hr>`:

	```css
	hr {
		background-image: linear-gradient(90deg,lightblue,blue);
	}
	```

</div>

## Additional Class Files

```css
/* .touch-target, .touch-target-center */
@import 'makeup-style/src/class/touch-target.css';
```

<style>
	hr {
		background-image: linear-gradient(90deg,lightblue,blue);
	}

	@media (min-width: 600px) {
		.grid {
			display: flex;
			flex-direction: column;
			width: 100%;
		}

		.grid section {
			width: calc(100% - min(5em, var(--view-inline)));
			max-width: var(--content-width);
		}

		.grid section:nth-of-type(even) {
			align-self: flex-end;
		}
	}
</style>

<script>
 	import Details from '/src/libs/Details.svelte';
</script>
