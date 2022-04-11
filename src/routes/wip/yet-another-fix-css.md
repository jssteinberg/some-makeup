<!-- # Default Browser CSS Fix: Yet Another CSS Fix/Normalize/Remedy/Sanitize -->
# The Post-Normalize CSS-fix

*The browser default CSS-fix post-normalize.css, focused and lean*

Doing CSS back in the days, a CSS-reset was a necessity. And an utter annoyance, especially for those new to web development. Then normalize.css became popular, thank god, and elements would keep their intended default styles. That style do actually show the semantic meaning of the HTML element, as simple as it may seem. But at the time of writing this, normalize.css has not been updated since 2018.

Focused on only **fixing** default CSS.

---

Focused and lean CSS to prevent text and content from overflowing, to prevent some elements from affecting line-height (excluding buttons), and fixes for font settings, semantic styling and usability. This is pretty much mandatory for avoiding many layout gotchas, especially for narrow viewports.

Inspired by, and replaces, normalize.css, modern normalize, CSS Remedy and sanitize.css. It differs in how it only, and actually, fixes what can cause overflow, can disrupt typography and can cause a styling gotcha. The things that actually needs fixing in default browser CSS today.

*If all needed elements where to be normalized across browsers, that would cause a lot of unused code for most apps and sites. Rather style those elements when they are used a lot. Perhaps it can be code-split. It obviously results in more focused and lean CSS when only what needs fixing is styled.*

---

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
