---
set: ["typography", "code"]
---

# Post-Normalize:<br aria-hidden="true">Fix CSS, Do CSS

*The browser default CSS-fix, post-normalize.css, focused and lean*

Doing CSS a decade ago, a CSS-reset was a necessity, and an utter annoyance. Especially for those new to web development (as I was at the time). Then [normalize.css][nc] became popular, thank god, and elements would more or less keep their intended default styles. *At the time of writing this, normalize.css has not been updated since 2018.*

An HTML element's default style does actually show the semantic meaning of that element, as simple as that style may seem. A link displays as a link, a list displays as a list. And many agree on that being a good thing, so many that there are quite a lot of projects in same spirit as normalize.css: [modern-normalize][mn], [CSS Remedy][cr], [sanitize.css][sc], and others.

"makeup-style" is not just yet-another-one, though it addresses many of the same problems. It's does it a bit different from the rest of them. It know what it wants. It's focused. It has (a) goal(s):

1. Fix 'unsafe' CSS, do it in minimally and make it intuitive for styling.
2. Default CSS rules that makes coding CSS more intuitive---generally and cross-browser.
3. Default CSS rules for better, basic typography and for easier typographic styling.

And generally provide CSS properties/variables so complicated rulesets can be easier adjusted when needed.

But you import what you need:

1. fix.css
2. do.css (expands fix.css)
3. space.css, and flow.css (expands space.css)

*Here, I will look at "fix" and "do".*

## Fix

The first section of the CSS is for preventing content from overflowing containers, especially horizontally, while preserving typography.

Here's a no-brainer, part of any CSS today, this is **the** intuitive default for styling---also important for preventing simple styling from causing overflow.

```css
*, ::before, ::after {
	/* Border-box so size includes border and padding, and border doesn't hide text */
	box-sizing: border-box; }
```

```css
:root {
	/* Words are auto hyphenated to fit narrow widths. */
	hyphens: auto;
	/* Words break for no x-axis scrolling (use this, not `word-break`). */
	overflow-wrap: break-word;
	/* Prevent adjustment of font-size after Ios orientation change. */
	-webkit-text-size-adjust: 100%; }

/* Wrap pre-formatted text by default. */
pre {
	white-space: pre-wrap; }

/* Make elements responsive. */
img, svg, video, canvas, audio, iframe, embed, object,
input, select, textarea {
	max-width: 100%;
	height: auto; }

```

---

*If all needed elements where to be normalized across browsers, that would cause a lot of unused code for most apps and sites. Rather style those elements when they are used a lot. Perhaps it can be code-split. It obviously results in more focused and lean CSS when only what needs fixing is styled.*

[amcr]: https://piccalil.li/blog/a-modern-css-reset/
[cc]: https://cube.fyi/
[cr]: https://github.com/jensimmons/cssremedy
[mn]: https://github.com/sindresorhus/modern-normalize
[nc]: https://github.com/necolas/normalize.css/
[op]: https://open-props.style/
[sc]: https://github.com/csstools/sanitize.css
