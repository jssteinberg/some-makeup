---
title: makeup-style in-depth
description: "An HTML element's default style does actually show the semantic meaning of that element."
set: ["code"]
---

Coding CSS a decade ago, a CSS-reset was normally used, and an utter annoyance. Especially for those new to web development. Then [normalize.css][nc] became popular, thank god, and elements would more or less keep their intended default styles, just be somewhat styled to be similar across browsers. By default HTML elements made visually semantic sense again.

An HTML element's default style does actually show the semantic meaning of that element. Yes that style is simple by default, but links display as links, lists as lists, and so on. Normalize.css just normalized all the basic semantic styling across browsers---*normalizing*. And I would think most agree on that being a good thing, so many that there are quite a lot of projects in the same spirit as normalize.css: [modern-normalize][mn], [CSS Remedy][cr], [sanitize.css][sc], and probably others.

But does all CSS need to be normalized in a low level library like normalize.css?
The more styling, the more opinionated code. Which is something you want at a bare minimum in a low level CSS library. Also, the more style, the more is likely overwritten when sites and apps are styled.

Can normalize.css' approach be rethought?
Some of the same problems must be solved, and an update for latest browser implementations can be needed. But much of the original code from normalize.css is rarely needed or outdated. Modern browsers has less differences between them. There's also some low level parts of default CSS the normalize approach did not fix. CSS Remedy and sanitize.css are more up to date, and they have tried to expand their fixing with new approaches and properties, but they are still lacking in some of the following points including typography and normalizing `form` related elements.
(sanitize.css also expands into resetting style, like for [lists in `nav`](https://github.com/csstools/sanitize.css/blob/092d0d85922bfa72d28e9e8d25d80a5437c8df44/sanitize.css#L93-L96).)

1. What does still need fixing in default CSS?
	1. Especially important for smaller viewports, displaying content and adding CSS should not cause overflowing the x-axis as far as possible.
<!-- Can remember what I meant with this: - Expected simple functionality of HTML should be upheld as far as possible. -->
	2. Inline elements affecting the height of lines, disrupting readability and typography.
	3. Consistency between browsers for basic, modern semantic styling. If also 'outdated' elements can easily be included, then OK.
	4. Consistent related basic style between elements.
2. Where can default CSS be further improved with basic rules to ease styling?
	- Normalizing elements for similar approach to restyle (including `form` related elements).
	- General basic CSS rules that provides more intuitive behaviors when styling.

These points should only be fixed if they can done so safely, not causing side effects, e.g., through inheritance. And, as mentioned, code that's too opinionated or styling that is often overwritten should be considered. Also, when natural, CSS custom properties can be provided to make adjustments easier.

*The up-to-date full breakdown of a resulting code draft follows.*


## *Fix CSS Safer*

For the simplest of needs, browser default CSS has some flaws that must be fixed: overflowing content should not be present out of the box and it should be prevented when styling; since the main content of the web is text, the simplest typographic needs should be upheld both for readability and further typographic improvements through style, and; simple inconsistencies disturbing usability and styling.

<Details>

<em slot="summary">Side notes</em>

- CSS Remedy also adds `line-sizing: normal` to the root element based on a CSS draft, but that draft has later been changed. The fix presented here fixes it with a single `line-height` rule for the inline elements in question.
- Margins or sizes for headings are not included. Default CSS is typographically descent, even if not always consistent, e.g., `<h1>` size. But headings are usually styled if they need certain margins and size which takes precedence over browser defaults.
- Elements like `abbr` and `hr` are not normalized. By default browsers styles them decently and semantically. If they’re part of a theme they are usually more restyled as well.
- Margins for nested lists are not removed, as sanitize.css does. Sometimes someone wants to style lists in a totally different way, and have margins on nested lists. It’s more flexible to remove them when needed.
- `font-size: 1em` is not set for elements using monospace font, as many libraries does. Ironically themes specifically styling them adjust that font-size down, as browsers already does by default. This browser default font-size is not a problem (anymore?).
- `font-size` for `<small>` is not normalized as it’s already smaller in all browsers. If using a specific size is important for a theme, then the theme should set it consistently  between elements.
- Form elements are not normalized, but are normalized for styling in the “do” CSS.
- Polyfills: CSS Remedy (and of course normalize.css) contains some polyfills for elements browsers haven't/hadn't added (correct) styles for. Like: `audio:not([controls]) { display:none; }`.
- Using `:where()` or `@layer` could be of future improvements when more users updates their browsers.

</Details>

---

A CSS fix has to start with perhaps **the** rule all elements need. More intuitively for human developers, it makes browsers include border-width and padding when calculating width and height. It's also very important for preventing horizontal overflow when applying styles.

```css
*, ::before, ::after {
	box-sizing: border-box;
}
```

<Details>

<em slot="summary">Another way</em>

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

For the root element there a two rules that prevents overflown text, and one normalizing rule, all three important for mobile devices:

1. Break words if needed to not overflow horizontally and create a horizontal scrollbar. *As a side note, sanitize.css states it uses `word-break` in its readme, but actually  uses `overflow-wrap`.*
2. Allow the browser to automatically hyphenate words when text wraps if appropriate. *The support may still be lacking for some languages in some browsers.* `hyphens: manual` may be set (for some elements) on wider viewports or for advanced content creators who knows `shy`.
3. Prevent Safari on Ios to adjust bigger font-size for some elements when device is in landscape orientation.

```css
:root {
	overflow-wrap: break-word;
	hyphens: auto;
	-webkit-text-size-adjust: 100%;
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
<em slot="summary">Another way</em>

Another way to implement this would be to not wrap the content, but the CSS for not wrapping `pre` content must handle several exceptions and becomes a lot more verbose.

```css
pre {
	hyphens: none;
	overflow: auto;
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
audio, embed, iframe, object,
input, select, textarea,
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
2. Avoid that lines' heights are affects by these elements. *This is not a full normalization of these elements---which has little value---but a single common rule that fixes the main problem for these elements in layouts. It's worth noting that if the `display` value of the parent makes any of these elements block-level they will be short and you have to redo your HTML structure or restyle `line-height` for this context. The `line-height` below is still high enough that the content will show.*

```css
code, kbd, samp, sub, sup {
	hyphens: manual;
	line-height: .625;
}
```

<Details>
<em slot="summary">Other ways</em>

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

- For `[hidden]`, this rule maintains the behaviour with higher specificity than browser CSS.
- For `<source>`, the rule ensures this relatively new element is not displayed. It has nothing to display and can affect styling. *This is a polyfill.*

```css
[hidden], source {
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

To make elements align horizontally with other elements, `margin-inline` is removed. For these elements it would otherwise default to `auto`. For `<hr>` the`auto` value would become apparent when parent container has `display` `flex` or `grid`.

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

## *Do CSS Intuitively*

...


<!--
### Notes

- Think about what CSS is/can be used to, and in what order from basic to advanced sites/apps: typography, layouts, usability, accessibility, more typography and graphical design, animations, 3D rendering.

- If all needed elements where to be normalized across browsers, that would cause a lot of unused code for most apps and sites. Rather style those elements when they are used a lot. Perhaps it can be code-split. It obviously results in more focused and lean CSS when only what needs fixing is styled.
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

	li > p,
	p + p {
		margin-block-start: 0;
	}

	p + p {
		text-indent: var(--space);
	}
</style>
