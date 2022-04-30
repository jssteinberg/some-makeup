---
title: makeup-style in-depth
description: "An HTML element's default style does actually show the semantic meaning of that element."
set: ["code"]
---

Coding CSS a decade ago, a CSS-reset was normally used, and an utter annoyance. Especially for those new to web development. Then [normalize.css][nc] became popular, thank god, and elements would more or less keep their intended default styles, just be somewhat styled to be more similar across browsers. Visually HTML elements made semantic sense again.

An HTML element's default style does actually show the semantic meaning of that element. Yes that style is simple by default, but links displays as links, lists displays lists, and so on. And I would think most agrees on that being a good thing, so many that there are quite a lot of projects in same spirit as normalize.css: [modern-normalize][mn], [CSS Remedy][cr], [sanitize.css][sc], and others.
*Though sanitize.css does include some resets as well, like for [lists in `nav`](https://github.com/csstools/sanitize.css/blob/092d0d85922bfa72d28e9e8d25d80a5437c8df44/sanitize.css#L93-L96).*

## Rethinking Normalize.css

Should all CSS be normalized in a low level library *like* normalize.css? When it is, that code is opinionated and that style is likely overwritten when sites/apps are styled.

Do we need yet-another take on normalize.css? Maybe we do, but this isn't exactly that. It solves the same problems, updated, though differently (obviously still many similarities to the before mentioned libraries), with code as minimal as possible. This code knows what it wants. It's focused. It has a priority of goals:

1. Fix default CSS:
	1. so displaying content and styling is safe on any device by not overflowing;
	2. to prevent inline elements from affecting line-height to not distrupt readability and typography, and;
	3. fix default consistentency between elements.
2. Fix default CSS to simplify a full restyle (includes `form` related elements) so coding is as intuitive as can be---generally and across browsers.
<!-- 3. Add basic CSS rules for better, basic typography and for easier typographic styling. -->

*Also, when natural, provide CSS properties/variables to make adjustments easier when needed.*

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

<style lang="scss">
	p {
		margin-block-end: 0;
	}

	p + p {
		margin-block-start: 0;
		text-indent: var(--space);
	}

	@media (min-width: 1200px) {
		ol {
			list-style: decimal;
		}

		:is(ol,ul) {
			padding: 0;
		}

		:is(ol,ul) :is(ol,ul) {
			margin: 0;
			padding-inline-start: var(--space);
		}
	}
</style>
