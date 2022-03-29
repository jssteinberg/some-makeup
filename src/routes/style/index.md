---
title: makeup-style
description: So you want to makeup some styling?
---

# makeup-style

So you want to makeup style?

These minimal CSS files fixes default browser CSS, for narrow viewports first, and provides the intuitive default CSS for styling in general and typographic style. (No Internet Explorer support.)

## A

```css
@import 'makeup-style/src/fix.css';
```

CSS to prevent text and content from overflowing, prevents some elements from affecting line-height (excluding buttons), and CSS fixes for font settings, semantic styling and usability. This CSS is pretty much mandatory for avoiding many layout gotchas, especially for narrow viewports.

`--mono-font` for setting mono-font-family for `code, kbd, pre, samp`. Falls back to `monospace`). E.g.:

```css
:root {
	--mono-font: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
}
```

## A addon

```css
@import 'makeup-style/src/do.css';
```

Opinionated CSS with intuitive CSS behaviours when doing CSS: for a better developer experience.

## B1

```css
@import 'makeup-style/src/space.css';
```

CSS that sets consistent spacing between the needed block-level elements.

`--space` for setting vertical spacing between intuitive block-level elements. Falls back to `1rem`.

`--block-start`/`--block-end` for setting start/end vertical spacing for the intuitive block-level elements. Falls back to `--space`, then `1rem`.

## B2

```css
@import 'makeup-style/src/flow.css';
```

*Requires fix.css and space.css.*

CSS that sets line-height to equal leading for headings.

`--hr-height` for setting height of `<hr>`. Falls back to `--space`, then `1rem`.

Each heading can be customized with their own variables on document root or children:

- '`--h[1,2,3,4,5,6]-added-lead`'
- '`--h[1,2,3,4,5,6]-line-span`'

---

*Side effects:*

- Easy gradient `<hr>`:

	```css
	hr {
		background-image: linear-gradient(90deg,lightblue,blue);
	}
	```

## Class Files

Files that adds CSS classes.

```css
/* .touch-target, .touch-target-center */
@import 'makeup-style/src/class/touch-target.css';
```

<style>
	:global(.content >) ol {
		counter-reset: ol-counter;
		list-style: none;
		padding: 0;
	}

	:global(.content >) ol > ::before {
		counter-increment: ol-counter;
		content: counter(ol-counter) ".\0000a0"; /* \0000a0 is space */
		display: block;
		margin-block-start: 1em;
	}

	:global(.content >) ol > ::before {
		font-size: 2em;
		font-weight: bold;
		font-weight: 800;
		font-weight: 900;
	}

	hr {
		background-image: linear-gradient(90deg,lightblue,blue);
	}
</style>

<PrismCss />

<script>
	import PrismCss from '/src/libs/PrismCss.svelte';
</script>
