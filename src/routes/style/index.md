---
title: makeup-style
description: So you want to makeup some styling?
---

# makeup-style

So you want to makeup style?

These minimal CSS files fixes default browser CSS, for narrow viewports first, and provides the intuitive default CSS for styling in general and typographic style. (No Internet Explorer support.)

1. ```css
	@import 'makeup-style/src/fix.css';
	```

	CSS to prevent text and content from overflowing, prevents some elements from affecting line-height, and CSS fixes for semantics, font and usability. *This CSS is pretty much mandatory for avoiding many layout gotchas, especially for narrow viewports.*

	`--mono-font` for setting mono-font-family for `code, kbd, pre, samp`. Falls back to `monospace`). E.g.:

	```css
	:root {
		--mono-font: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
	}
	```

	*Side effects:*

	- Easy gradient `<hr>`:

		```css
		hr {
			background-image: linear-gradient(90deg,lightblue,blue);
		}
		```

		---

2. ```css
	@import 'makeup-style/src/dx.css';
	```

	Opinionated CSS with intuitive CSS behaviours for a better developer experience when coding.

3. ```css
	@import 'makeup-style/src/space.css';
	```

	CSS that sets consistent spacing between the needed block-level elements.

	`--space` for setting vertical spacing between intuitive block-level elements. Falls back to `1rem`.

	`--block-start`/`--block-end` for setting start/end vertical spacing for the intuitive block-level elements. Falls back to `--space`, then `1rem`.

	`--hr-height` for setting height of `<hr>`. Falls back to `--space`, then `1rem`.

4. ```css
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
