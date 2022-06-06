---
title: makeup-style
description: So you want to makeup some styling?
set: ["code"]
---

# makeup-style

So you want to makeup style? These minimal CSS files fixes default browser CSS, for narrow viewports first, and provides intuitive CSS-defaults for styling in general and typographic style.

```sh
npm install makeup-style
```

## 1. "Fix CSS"

```css
@import "makeup-style/src/fix.css";
```

*Populate HTML documents and makeup style safely.* A lean CSS fix that prevents text and content from overflowing; prevents the needed elements from affecting line-height <small>(excluding `button` and `inputs`)</small>, and; fixes font issues, semantic styling and usability. This CSS is mandatory for avoiding breaking layouts, especially for narrow viewports, and for keeping a consistent typographic rhythm. Be confident in that '90s look if you will!

This file is an alternative to [normalize.css][nc], [modern-normalize][mn], [CSS Remedy][cr], [sanitize.css][sc], etc. *With the file below it even normalizes button and inputs, as the alternatives mentioned does not.*

<Details>
<em slot="summary">Notes</em>

`code, kbd, samp, sub, sup` are inline elements. This file styles them to not affect lines' heights which can cause unindented behaviour if they are used as block-level elements. E.g., if their direct parent uses `grid` or `flex`. Solution is to redo your HTML structure or restyle `line-height` for these elements in this context.

</Details>

### 1.2 "Do CSS"---A <cite>Fix CSS</cite> Expansion

```css
@import "makeup-style/src/do.css";
```

*When you're doing a full makeup, do it intuitively.* An improvement of the CSS developer experience, and buttons and inputs (and inputs that looks like buttons) are restyled across modern browsers by normalizing them. Buttons and inputs will most likely need some styling, but this makes consistent styling simpler.

FYI, selectors to target all buttons:

```css
::file-selector-button, [type="button" i], [type="reset" i], [type="submit" i], button {
	/* ... */
}
```

## 2. "Space CSS"

```css
@import "makeup-style/src/space.css";
```

CSS rulesets for consistent spacing between the needed block-level elements.

`--space` for declaring vertical spacing between intuitive block-level elements. It's a point to not use a font-size relative unit like `em` or `ex`, but use a `rem` value (can also be part of a `clamp()`) to declare the font-size for a container. Falls back to `1rem`.

`--block-start`/`--block-end` for declaring start/end vertical spacing for the intuitive block-level elements. Falls back to `var(--space, 1rem)`.

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

### 2.1 "Flow CSS"---A <cite>Space CSS</cite> Expansion

```css
@import "makeup-style/src/flow.css";
```

CSS with rulesets declaring headings' line-height to be computed to container declaring `--added-lead`, and with rulesets for other elements to flow.

#### Variables

`--added-lead` for declaring line-height to `1 + var(--added-lead, .6)`. Falls back to `.6`.

`--hr-color` for declaring color of `<hr>`. Falls back to `currentColor`.

`--hr-height` for declaring height of `<hr>`. Falls back to `var(--space, 1rem)`.

##### Headings

{#each Array.from(Array(3)) as _,i}

<p>
	{#if i !== 2}
		<code>--h{i + 1}-line-span</code>
	{:else}
		<code>--h3-line-span</code>-<code>--h6-line-span</code>
	{/if}
	for declaring the number of lines the heading should span over. Falls back to 
	{#if i === 0}<code>2</code>{:else}<code>1</code>{/if}.
</p>

<p>
	{#if i !== 2}
		<code>--h{i + 1}-added-lead</code>
	{:else}
		<code>--h3-added-lead</code>-<code>--h6-added-lead</code>
	{/if}
	for declaring the added lead to the heading's line-height. Falls back to
	{#if i === 0}
		<code>.125</code>.
	{:else if i === 1}
		<code>.25</code>.
	{:else}
		<code>var(--added-lead, .6)</code>.
	{/if}
</p>

{/each}

#### Side effects

- Easy gradient `<hr>`:

	```css
	hr {
		background-image: linear-gradient(90deg,lightblue,blue);
	}
	```

## 3. Additional Class Files

```css
/* .touch-target, .touch-target-center */
@import "makeup-style/src/class/touch-target.css";
```

[amcr]: https://piccalil.li/blog/a-modern-css-reset/
[cc]: https://cube.fyi/
[cr]: https://github.com/jensimmons/cssremedy
[mn]: https://github.com/sindresorhus/modern-normalize
[mccr]: https://www.joshwcomeau.com/css/custom-css-reset/
[nc]: https://github.com/necolas/normalize.css/
[op]: https://open-props.style/
[sc]: https://github.com/csstools/sanitize.css

<script>
 	import Details from "/src/libs/Details.svelte";
</script>
