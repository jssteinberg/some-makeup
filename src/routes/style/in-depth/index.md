---
title: makeup-style in-depth
description: "Minimal CSS files that fixes and improves default browser CSS—for narrow viewports first—and provides convenient and intuitive CSS-defaults for styling in general."
set: ["code"]
---

Coding CSS a decade ago, a CSS-reset was normally used, and an utter annoyance. Especially for those new to web development. Then [normalize.css][nc] became popular, thank god, and elements would more or less keep their intended default styles, just be somewhat styled to be similar across browsers. By default HTML elements made visually semantic sense again.

## Correct and Improve Default CSS

By browser default, an HTML element's default style does actually show the semantic meaning of that element. Yes that style is simple by default, but links display as links, lists as lists, and so on. As opposed to a CSS reset, Normalize.css kept the semantic visuals and only *normalized* default styling so they looked similar between browsers. Most agree on that being a good thing, so many that there are quite a lot of projects in the same spirit as normalize.css: [modern-normalize][mn], [CSS Remedy][cr], [sanitize.css][sc], and probably others.
Some of theses does more that normalizing, they correct and improve browser default CSS in ways developers expects.

## Why Correct and Improve Default CSS Again?

Neither of the former are actively maintained at the moment (except for Sindre Sorhus’ modern-normalize). CSS rules that corrected/fixes default CSS quickly becomes obsolete with the speed CSS develops (and not all libraries have been explicit on which of their rules are polyfill---another point to improve).

More importantly, how they corrects and improves browsers default styling can be further corrected and improved, not by more code, but by a slightly different *approach*.
Does all CSS need to be normalized in a low level library like normalize.css?
The more rules, the more opinions. Opinionated code is something you want at a bare minimum in your default CSS. Also, the more style, the more is likely overwritten when sites and apps are styled.

Opportunities for improving the developer experience should be expanded where possible, while avoiding bloat many projects will not need.

<!--
Can normalize.css' approach be rethought?
Some of the same problems must be solved, and an update for latest browser implementations can be needed. But much of the original code from normalize.css is rarely needed or outdated. Modern browsers has less differences between them. There's also some low level parts of default CSS the normalize approach did not fix. CSS Remedy and sanitize.css are more up to date, and they have tried to expand their styling with new approaches and properties, but they are still lacking in some of the following points including typography and normalizing `form` related elements.
(sanitize.css also expands into resetting style, like for [lists in `nav`](https://github.com/csstools/sanitize.css/blob/092d0d85922bfa72d28e9e8d25d80a5437c8df44/sanitize.css#L93-L96).)
-->

## The Needs

Browser default CSS tries to, and/or should at a maximum, handle simple visuals for semantics and usability, and basic typographic flow like no overflow and consistent line-height. Of course, practically, there are more styling needed for a modern product, but this was never handled by browser default CSS and should no be included in a low level library like this.

Always corrected:

1. Especially important for smaller viewports, displaying content and adding CSS should not cause overflowing the x-axis as far as possible.
<!-- Can remember what I meant with this: - Expected simple functionality of HTML should be upheld as far as possible. -->
2. Inline elements affecting the height of lines, disrupting readability and typography.
3. Consistency between browsers for basic, modern semantic styling. If also 'outdated' elements can easily be included (like `<b>`), then include it.
4. Consistent related basic style between elements.

Further, for the developer experience, some basic rules to ease styling are very often needed and repeated:

1. General basic rules that provides more intuitive behaviors when styling.
2. Ease styling elements consistently across browsers (this especially/mostly includes `form` related elements---which normalize.css ironically does not include).

It should only be implemented if it can be done so safely, not causing side effects (e.g., through inheritance). And, as mentioned, code that's too opinionated or styling that is often overwritten should be carefully considered. Also, when natural, CSS custom properties can be provided to make adjustments easier.

*The up-to-date full breakdown of a resulting code draft follows, excluding any use of `:where()` or `@layer`.*

<!--
### Notes

- Think about what CSS is/can be used to, and in what order from basic to advanced sites/apps: typography, layouts, usability, accessibility, more typography and graphical design, animations, 3D rendering.

- If all needed elements where to be normalized across browsers, that would cause a lot of unused code for most apps and sites. Rather style those elements when they are used a lot. Perhaps it can be code-split. It obviously results in more focused and lean CSS when only what really needs correction is styled.
-->

[amcr]: https://piccalil.li/blog/a-modern-css-reset/
[cc]: https://cube.fyi/
[cr]: https://github.com/jensimmons/cssremedy
[mn]: https://github.com/sindresorhus/modern-normalize
[ms]: https://some.makeup/style
[nc]: https://github.com/necolas/normalize.css/
[op]: https://open-props.style/
[sc]: https://github.com/csstools/sanitize.css

<script>
	import Details from "$libs/Details.svelte"
</script>

<style>
	/* Book style stuff */

	p {
		margin-block-end: 0;
	}

	ol, ul,
	li > p,
	p + p {
		margin-block-start: 0;
	}

	p + p {
		text-indent: var(--space);
	}
</style>
