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
@import "makeup-style/default.css";
/* Or an alternative using `:where()` for less specificity: */
@import "makeup-style/where-default.css";
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

3. Margin for `<body>` is not removed. So you usually also want `body { margin: 0; }`.

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
@import "makeup-style/develop.css";
/* Or an alternative using `:where()` for less specificity: */
@import "makeup-style/where-develop.css";
```

*Develop CSS easier.* Includes simple intuitive rules and inheritances for styling and reduce-motion rules for animations and transitions.


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
