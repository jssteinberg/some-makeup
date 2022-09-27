---
title: Default CSS
description: "default.css fixes and improves default browser CSS—for narrow viewports first—to safer populate HTML document and for modern conveniences for styling."
set: ["code"]
---

A lightweight default CSS that fixes and improves default browser CSS—for narrow viewports first—to safer populate HTML document, adds established conveniences for styling and extends basic usability.

<Details>

<em slot="summary">Comparisons</em>

- CSS Remedy also adds `line-sizing: normal` to the root element based on a CSS draft, but that draft has later been changed. The styling presented here repairs it with a single `line-height` rule for the inline elements in question.
- Margins or sizes for headings are not included. Headings are styled when default browser style is not sufficient, and default browser style for headings is actually descent.
- Elements like `abbr` and `hr` are not normalized. By default browsers styles them decently and semantically. If they’re part of a theme they are usually more restyled as well.
- Margins for nested lists are not removed, as sanitize.css does. Sometimes someone wants to style lists in a totally different way, and have margins on nested lists. It’s more flexible to remove them when needed.
- `font-size: 1em` is not set for elements using monospace font, as many libraries does. Ironically themes specifically styling them adjust that font-size down, as browsers already does by default. This browser default font-size is not a problem (anymore?).
- `font-size` for `<small>` is not normalized as it’s already smaller in all browsers. If using a specific size is important for a theme, then the theme should set it consistently  between elements.
- Polyfills: CSS Remedy (and of course normalize.css) contains some polyfills for elements browsers haven't/hadn't added (correct) styles for. Like: `audio:not([controls]) { display:none; }`.
- Using `:where()` or `@layer` could be of future improvements when more users updates their browsers (for `:where()`, files "where-default.css" and "where-develop.css" are in package, but experimental).

</Details>

---

A default CSS has to start with perhaps **the** rule all elements need. It's more intuitive for developers coding layouts, and it prevents overflowing content, by making browsers include border-width and padding when calculating width and height.

```css
*, ::before, ::after {
	box-sizing: border-box;
}
```

<Details>

<em slot="summary">Alternatives</em>

```css
*, ::before, ::after {
	box-sizing: inherit;
}

:root {
	box-sizing: border-box;
}
```

The problem with this approach is how the inheritance of `box-sizing` by default is just less safe for layouts, and it can be considered less intuitive as `border-box` has become the norm. *This is [also discussed here in regards to CSS Remedy](https://github.com/jensimmons/cssremedy/issues/4#issuecomment-1146659677).*

</Details>

---

For the document root, there are three important fixes for narrow viewports:

1. To Prevent Safari on Ios to adjust bigger font-size for some elements when device is in landscape orientation.
2. To allow browsers to auto hyphenate words when text wraps, if appropriate. *The support may still be lacking for some languages in some browsers.* `hyphens: manual` may be set (for some elements) on wider viewports and/or for advanced content creators who knows `shy`.
3. To break words if needed, and on soft-wrap word-break possibilities if possible, to not overflow horizontally and create a horizontal scrollbar.

```css
:root {
	-webkit-text-size-adjust: 100%;
	hyphens: auto;
	overflow-wrap: anywhere;
}
```

---

To prevent `<pre>` from overflowing its content is styled to wrap.

```css
pre {
	white-space: pre-wrap;
}
```

<Details>
<em slot="summary">Alternatives</em>

Another way to implement this would be to not wrap the content, but the CSS for not wrapping `pre` content must handle several exceptions and becomes a lot more verbose.

```css
pre {
	hyphens: none;
	overflow: auto;
	overflow-wrap: normal;
	tab-size: 2;
	white-space: pre;
	word-break: normal;
	word-spacing: normal;
	word-wrap: normal;
}
```

</Details>

---

Media and form related elements are styled to be responsive, and could otherwise overflow.

```css
input, select, textarea,
audio, embed, iframe, object,
img, svg, video, canvas {
	max-width: 100%;
}

img, svg, video, canvas {
	height: auto;
}
```

---

For accessibility, textareas only resize vertically by default. By default a user could by accident make a `<textarea>` overflow the viewport horizontally. Differences in motor skills could make it particularly unpredictable for some users.

```css
textarea {
	resize: vertical;
}
```

---

Inline elements with different `font-family` or `vertical-align` usually bear special meanings and stylistically they can affect lines' heights.

1. The meaning of some elements' content could be confusing if it gets `hyphens` automatically in the wrong places.
2. Avoid that lines' heights are affects by these elements. *This is not a full normalization of these elements---which has little value---but a single common rule that repairs the main problem for these elements in layouts (elements using `monospace` would disrupt lines' heights when `font-size` was adjusted up). It's worth noting that if the `display` value of the parent makes any of these elements block-level, their true `line-height` will appear. The solution is to redo your HTML structure, or restyle `line-height`, for this context. The `line-height` below is still high enough that the content will be readable---just barely.*

```css
code, kbd, samp, sub, sup {
	hyphens: manual;
	line-height: .625;
}
```

<Details>
<em slot="summary">Alternatives</em>

*Code for `sub, sup` used in normalize.css and modern-normalize.*
But these elements very rarely needs a normalization and they are already styled semantically, they just need to not adjust lines' heights.

```css
sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sub {
	bottom: -0.25em;
}

sup {
	top: -0.5em;
}
```

*Code for `code, kbd, samp` used in normalize.css (and about the same in [modern-normalize#L97-109](https://github.com/sindresorhus/modern-normalize/blob/b59ec0d3d8654cbb6843bc9ea45aef5f1d680108/modern-normalize.css#L97-L109) and [sanitize.css#L144-147](https://github.com/csstools/sanitize.css/blob/092d0d85922bfa72d28e9e8d25d80a5437c8df44/sanitize.css#L144-L147)).* Two rules that either does nothing or cause problems! The first rule does nothing in modern browsers. The second rule normalizes the `font-size` to `1em` easily causing higher lines where these elements are present.

```css
code, kbd, samp {
	font-family: monospace, monospace;
	font-size: 1em;
}
```
</Details>

---

`<strong>` should be `bolder` in all browsers so strong text is relative to its parent. This improves the default displayed semantics of the element. `<b>` is also included in case any outdated WYSIWYG editors still use it.

```css
b, strong {
	font-weight: bolder;
}
```

---

In browser’s default CSS, text inputs has a smaller `font-size` than `16px`. This causes Ios to zoom in on the `input` when focused. For many users its annoying and/or confusing. For accessibility and usability, and to deal with the consistency side-effect, all interactive elements that doesn't already have `font-size: 1em` are part of this ruleset.

```css
::file-selector-button, button, input, select, textarea {
	font-size: 1em;
}
```

---

No display:

1. For `hidden` elements---the rule maintains the behaviour with higher specificity than browser CSS.
2. For `<source>`---the rule ensures this relatively new element is not displayed. It has nothing to display and can affect styling. *This is a polyfill.*

```css
[hidden],
source {
	display: none;
}
```

---

Remove wrapping `picture` while maintaining content. If not it can interfere with layout and aspect-ratio when styling. *This is a polyfill.*

```css
picture {
	display: contents;
}
```

---

This ruleset removes a block-end space for these elements that (can when `display` is changed for some of these) disrupt layouts.

```css
img, svg, video, canvas, audio, iframe, embed, object {
	vertical-align: middle;
}
```

---

To make elements align horizontally with other elements, `margin-inline` is removed. For these elements it would otherwise default to `auto`. For `<hr>`, `margin-inline: auto` would become apparent when parent container displays `flex` or `grid`.

```css
figure, hr {
	margin-inline: 0;
}
```

For (usually interactive) elements currently not interactive `cursor` will consistently be `not-allowed`.

```css
[aria-disabled="true" i], [disabled], [readonly] {
	cursor: not-allowed;
}
```

Ending with the most opinionated ruleset: all clickable elements gets `cursor: pointer`. The reason being how popular UI libraries, like Bootstrap, adds it for buttons and have made web users accustomed to it. Let’s embrace it and make it as consistent as it can be!

```css
::file-selector-button, [role="button" i], [type="button" i], [type="reset" i], [type="submit" i], button,
select, summary {
	cursor: pointer;
}
```

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
