---
title: makeup-style
description: So you want to makeup some styling?
---

# makeup-style

So you want to makeup style?

These minimal CSS files fixes default browser CSS, for narrow viewports first, and provides the intuitive default CSS for styling in general and typographic style. (No Internet Explorer support.)

## 1.

```css
@import 'makeup-style/src/intuitive.css';
```

CSS to prevent text and content from overflowing and affecting line-height, and CSS fixes for semantics, font and usability. *This file is pretty much mandatory for avoiding many layout gotchas, especially for narrow viewports.*

### Variables

Includes option for defining variable `--mono-font` for setting mono-font-family, e.g.:

```css
:root {
	--mono-font: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
}
```

## 2.

```css
@import 'makeup-style/src/dx.css';
```

Opinionated CSS with intuitive CSS behaviours for a better developer experience when coding.

## 3.

```css
@import 'makeup-style/src/space.css';
```

CSS that sets consistent spacing between the needed block-level elements.

### Variables

Spacing can be adjusted and controlled with variable:

- `--space` (defaults, falls back, to `1rem`).

## 4.

```css
@import 'makeup-style/src/line-height.css';
```

CSS that sets line-height to equal leading for headings.

*This file requires variable `--added-lead` to be defined and line-height must be set with it.*

Each heading can be customized with their own variables on document root or children:

- '`--h[1,2,3,4,5,6]-added-lead`'
- '`--h[1,2,3,4,5,6]-line-span`'

For defining `--added-lead` and setting line-height, there are basically two options:

```css
:root {
	/* For both options,
	 * define variable on a parent: */
	--added-lead: .25;

	/* OPTION 1 */
	line-height: calc(1 + var(--added-lead));
}

/* Opt. 1
 * requires line-height to be reset for children
 * when `--added-lead` is changed: */
main {
	--added-lead: .6;
	line-height: calc(1 + var(--added-lead));
}

/* OPTION 2
 * This way changing line-height for children
 * only requires updating var `--added-lead`. */
div, header, nav, footer,
address, datalist, details, fieldset, pre, table,
canvas, embed, figure, iframe, object, video,
dl, ol, ul,
blockquote, p {
	line-height: calc(1 + var(--added-lead));
}

/* Opt. 2
 * will update line-height for children
 * only by redefining `--added-lead`: */
main { --added-lead: .6; }
```

## Class Files

Files that adds CSS classes.

```css
/* .touch-target, .touch-target-center */
@import 'makeup-style/src/class/touch-target.css';
```

<PrismCss />

<script>
	import PrismCss from '/src/libs/PrismCss.svelte';
</script>
