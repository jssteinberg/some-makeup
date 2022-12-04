---
title: makeup-style
description: "Makeup style for the web."
set: ["code"]
---

# makeup-style

So you want to makeup style? These minimal CSS files corrects and improves default browser CSS---for narrow viewports first---and provides convenient and intuitive CSS-defaults for styling in general and typographic style.

```
npm install makeup-style
```

## 1. *Default CSS*

```css
@import "makeup-style/src/default.css";
/* Or an alternative using `:where()` for less specificity: */
@import "makeup-style/src/where-default.css";
```

It corrects and improves the minimal necessary default CSS for all screen sizes, narrow viewports first. That includes universally using the `border-box` for preventing overflow and making styling way more intuitive, otherwise preventing overflowing content, default corrections for typographic style, normalize default semantics, basic default usability and correct certain elements’ alignments. All rules are included with the mindset of this being a minimal default CSS, which includes embracing certain CSS defaults like heading styles and spacing.

This file is an updated alternative to
[normalize.css][nc],
[modern-normalize][mn],
[CSS Remedy][cr],
[sanitize.css][sc] and similar---updated for all major browsers and new CSS. When it comes to normalization, it does not always do a full normalization for elements that works and are consistent to style, and/or that are specifically styled when they are relevant.

<Details>
<em slot="summary">Notes</em>

*All libraries should have honest notes on drawbacks and/or missing support:*

1. `code, kbd, samp, sub, sup` are inline elements Default CSS styles to not affect line-heights. If they are used as block-level elements though, they will be short in height since their `line-height` is adjusted. E.g., if their direct parent uses `grid` or `flex`. Solution is to redo your HTML structure or restyle `line-height` for these elements in this context.

2. To allow browsers to auto hyphenate words when text wraps, `hyphens: auto` is applied. *The support may still be lacking for some languages in some browsers.* `hyphens: manual` may be set (for some elements) on wider viewports and/or for advanced content creators who knows `shy`.

3. For browsers that don't support `overflow-wrap: anywhere`, and when a language has poor `hyphens: auto` support, words can overflow their container. This ruleset can be added to always break words for those browsers as well:

	```css
	@supports not (overflow-wrap: anywhere) {
		:root {
			word-break: break-word;
		}
	}
	```

4. Margin for `<body>` is not removed. So you usually also want `body { margin: 0; }`.

</Details>

<Details>
<em slot="summary">Tips</em>

`<hr>` 'border' uses `height` and `background` for a nicer border. This makes it easy to adjust:

```css
hr {
	/* Gradient border */
	background-image: linear-gradient(90deg, red, blue);
	/* Change size */
	background-size: 5em 2px;
	/* Change position */
	background-position: left center;
	/* Change spacing */
	height: 2em;
}
```

</Details>

## *Develop CSS*---A <cite>Default CSS</cite> Expansion

```css
@import "makeup-style/src/develop.css";
/* Or an alternative using `:where()` for less specificity: */
@import "makeup-style/src/where-develop.css";
```

*Develop CSS easier.* Includes simple intuitive rules and inheritances for styling and reduce-motion rules for animations and transitions.

---

## 2. *Space CSS*

```css
@import "makeup-style/src/space.css";
```

CSS rulesets for consistent spacing between the needed block-level elements.

`--space` for declaring vertical spacing between intuitive block-level elements. It's a point to not use a font-size relative unit like `em` or `ex`, but use a `rem` value (can also be part of a `clamp()`) to declare the font-size for a container. Falls back to `1rem`.

`--block-start`/`--block-end` for declaring start/end vertical spacing for the intuitive block-level elements. Falls back to `var(--space, 1rem)`.

<Details>
<em slot="summary">Example</em>


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

## *Flow CSS*---A <cite>Space CSS</cite> Expansion

```css
@import "makeup-style/src/flow.css";
```

CSS with rulesets declaring headings' line-height to be computed to container declaring `--added-lead`, and with rulesets for other elements to flow.

**CSS variables:**

`--added-lead` for declaring line-height to `1 + var(--added-lead, .6)`. Falls back to `.6`.

`--hr-space` for declaring the height of `<hr>`. Falls back to `var(--space, 1rem)`.

**Heading variables:**

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