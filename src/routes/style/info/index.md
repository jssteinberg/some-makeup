---
title: makeup-style in-depth
description: "An HTML element's default style does actually show the semantic meaning of that element."
set: ["code"]
---

Coding CSS a decade ago, a CSS-reset was normally used, and an utter annoyance. Especially for those new to web development. Then [normalize.css][nc] became popular, thank god, and elements would more or less keep their intended default styles, just be somewhat styled to be similar across browsers. By default HTML elements made visullay semantic sense again.

An HTML element's default style does actually show the semantic meaning of that element. Yes that style is simple by default, but links display as links, lists as lists, and so on. And I would think most agrees on that being a good thing, so many that there are quite a lot of projects in same spirit as normalize.css: [modern-normalize][mn], [CSS Remedy][cr], [sanitize.css][sc], and others.
*Though sanitize.css does include some resets as well, like for [lists in `nav`](https://github.com/csstools/sanitize.css/blob/092d0d85922bfa72d28e9e8d25d80a5437c8df44/sanitize.css#L93-L96).*

## Rethinking Normalize.css

*Should all CSS be normalized in a low level library like normalize.css?*
No. The more styling, the more that code is opinionated. And that style is likely overwritten when sites/apps are styled.

This isn't yet-another CSS normalize library. It solves some of the same problems, and updated for latest browsers. It solves it a little differently though (there's still many similarities to the before mentioned libraries, obviously) and fixes more needs fixing in modern browsers, with code as minimal as possible.

## Priority List

1. Fix default CSS:
	1. So displaying content and styling is safe on any device by not overflowing;
	2. To prevent inline elements from affecting line-height to not disrupt readability and typography, and;
	3. For simple consistency between elements.
2. Simplify full styling (includes `form` related elements) so coding is as intuitive as can be---generally and across browsers.
3. Better, basic typography and easier typographic styling.

Also, when natural, provide CSS properties/variables to make adjustments easier when needed.

---

The items quite naturally splits into different files, and can then be imported in parts. This also makes the ‘pure’ fix file less opinionated.

[amcr]: https://piccalil.li/blog/a-modern-css-reset/
[cc]: https://cube.fyi/
[cr]: https://github.com/jensimmons/cssremedy
[mn]: https://github.com/sindresorhus/modern-normalize
[ms]: https://some.makeup/style
[nc]: https://github.com/necolas/normalize.css/
[op]: https://open-props.style/
[sc]: https://github.com/csstools/sanitize.css

<style>
	ol ol {
		list-style-type: lower-alpha;
	}

	/* Book style stuff */

	p {
		margin-block-end: 0;
	}

	li > p,
	p + p {
		margin-block-start: 0;
	}

	p + p {
		text-indent: var(--space);
	}

	:is(ol,ul) :is(ol,ul) {
		margin: 0;
	}

	@media (min-width: 1200px) {
		ol {
			list-style: decimal;
		}

		:is(ol,ul) {
			padding: 0;
		}

		:is(ol,ul) :is(ol,ul) {
			padding-inline-start: var(--space);
		}
	}
</style>
