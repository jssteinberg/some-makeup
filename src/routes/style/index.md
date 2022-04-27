---
title: makeup-style
description: So you want to makeup some styling?
set: ["code"]
---

# makeup-style

So you want to makeup style?

These minimal CSS files fixes default browser CSS, for narrow viewports first, and provides intuitive CSS-defaults for styling in general and typographic style.

```sh
npm install makeup-style
```

## 1. "Fix"

```css
@import "makeup-style/src/fix.css";
```

Populate HTML documents and code CSS safely. Focused and lean CSS fix: to prevent text and content from overflowing; to prevent the needed elements from affecting line-height <small>(excluding `button` and `inputs`)</small>; fixes for font rules, semantic styling and usability. This CSS is mandatory for avoiding breaking layouts, especially for narrow viewports, and for keeping a consistent typographic rhythm. Be confident in that '90s look if you will!

### 1.2 "Do"---A <cite>Fix</cite> Expansion

```css
@import "makeup-style/src/do.css";
```

When you want to restyle more, do it with ease.
Rulesets for a better developer experience and a cross-browser normalize for `button` and `input` (and inputs that looks like buttons), so they are straightforward to style for all modern browsers.

## 2. "Space"

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

### 2.1 "Flow"---A <cite>Space</cite> Expansion

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

<script>
 	import Details from "/src/libs/Details.svelte";
</script>
