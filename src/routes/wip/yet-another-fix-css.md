---
set: ["typography", "code"]
---

# Fix CSS: Beyond a Selective Normalize

*At the time of writing this, normalize.css has not been updated since 2018 and CSS Remedy not since April 2021.*

Coding CSS a decade ago, a CSS-reset was normally used, and an utter annoyance. Especially for those new to web development. (CSS-resets resets all/most styles for all/most elements). Then [normalize.css][nc] became popular, thank god, and elements would more or less keep their intended default styles, just be somewhat styled to be more similar across browsers. Visually HTML elements made semantic sense again.

An HTML element's default style does actually show the semantic meaning of that element. Yes that style is simple by default, but a link displays as a link, a list displays as a list, and so on. And I would think most agrees on that being a good thing, so many that there are quite a lot of projects in same spirit as normalize.css: [modern-normalize][mn], [CSS Remedy][cr], [sanitize.css][sc], and others.

## Rethinking Normalize.css

All CSS shouldn’t be normalized in a low level library *like* normalize.css. When it is, that code is opinionated and that style is likely overwritten when sites/apps are styled.

The CSS fix presented below (which also has an accompanying “do” CSS) is not just yet-another take on normalize.css. It solves the same problems, updated, though differently (but obviously many similar rules to the before mentioned libraries), with code as minimal as possible. This code knows what it wants. It's focused. It has a priority of goals:

1. Fix default CSS: so displaying content and styling is safe on any device by not overflowing; to prevent inline elements from affecting line-height, and; so defaults are consistent between elements.
2. Improve default CSS, partly reset some elements, so more restyling and *doing* programming is as intuitive as can be---generally and cross-browser.
3. (Add basic CSS rules for better, basic typography and for easier typographic styling.)

Also, when natural, provide CSS properties/variables to make adjustments easier when needed.

The items naturally splits into different files---*the last item can be endlessly expanded on*---so the needed base code can be imported. This also makes the ‘pure’ fix file less opinionated.

1. fix.css
2. do.css
3. (space.css and flow.css)

## Fix CSS

> Fix default CSS: so displaying content and styling is safe on any device by not overflowing; to prevent inline elements from affecting line-height, and; so defaults are consistent between elements.

```css
*, ::before, ::after {
	box-sizing: border-box;
}
```

A “fix” CSS has to start with perhaps **the** rule all elements needs so they can be more safely styled and not cause overflow. It makes browsers calculate width and height intuitively by including `border-width` and `padding`. Important for many reasons, also for preventing horizontal overflow.

Another way to implement this would be using the above rule for the root element and changing the above value to `inherit`. But inheriting any other box-sizing value can cause cut and overflown content.

```css
:root {
	overflow-wrap: break-word;
	hyphens: auto;
	-webkit-text-size-adjust: 100%;
}
```

For the root element there a two rules that prevents overflown text, and one normalizing rule, all three important for mobile devices.

`overflow-wrap: break-word` (not  `word-break` property) it simply breaks words if needed to not overflow horizontally and create a horizontal scrollbar.

`hyphens: auto` allows the browser to automatically hyphenate words when text wraps if appropriate. *The support may still be lacking for some languages in some browsers.* `hyphens: manual` may be set (for some elements) on wider viewports or for advanced content creators who knows `shy`.

`-webkit-text-size-adjust: 100%` is for preventing Safari on Ios to adjust bigger font-size for some elements when device is in landscape orientation.

<aside>

*Side notes:*

- CSS Remedy also adds `line-sizing: normal` to the root element, but that was from a CSS draft later changed. The fix presented here fixes it with a single `line-height` rule for the inline elements in question.
- Often the `margin` on `<body>` is removed. This fix does not remove it (but the accompanying “do” CSS does).
- Margins or sizes for headings are not included. Browsers has descent styles, even if `<h1>` can differ. Themes usually styles the headings they need with margins and size.
- Elements like `abbr` and `hr` are not normalized. By default browsers styles them decently and semantically. If they’re part of a theme they are usually more restyled as well.
- Margins for nested lists are not removed, as sanitize.css does. Sometimes someone wants to style lists in a totally different way, and have margins on nested lists. It’s easier to remove them when needed.
- `font-size: 1em` is not set for elements using monospace font, as many libraries does. Ironically themes specifically styling them adjust that font-size down, as browsers already does by default. This browser default font-size is not a problem (anymore?).
- `font-size` for `<small>` is not normalized as it’s already smaller in all browsers. If using a specific size is important for a theme, then the theme sets it consistently  between elements.
- Form elements are not normalized, but are normalized for styling in the “do” CSS.
- Polyfills: CSS Remedy (and of course normalize.css) contains some polyfills for elements browsers haven't/hadn't added (correct) styles for. Like: `audio:not([controls]) { display:none; }`.
- Using `:where()` or `@layer` could be of future improvements when more users updates their browsers.

<\aside>

```css
pre {
	white-space: pre-wrap;
}
```

To prevent `<pre>` from overflowing `pre-wrap` is declared. 

Another way to implement this would be a popular way to display code, using `overflow-x: auto`, but the CSS for not wrapping `pre` content must handle several exceptions and becomes a lot more verbose.

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

Media and form related elements are ruled to be responsive, and could otherwise overflow.

```css
textarea {
	resize: vertical;
}
```

For accessibility, textareas only resize vertically by default.

```css
b, strong {
	font-weight: bolder;
}
```

`<strong>` should be `bolder` in all browsers so strong text is relative to its parent. This improves the default displayed semantics of the element. `<b>` is also included in case any outdated WYSIWYG editors still use it.

```css
code, kbd, samp, sub, sup {
	line-height: .625;
}
```

Some inline elements can affect the line-heights of lines they are on. This is not a full normalization---which would have little value---but a single common rule that fixes the main problem for all these elements. Brilliant!

```css
::file-selector-button, button, input, select, textarea {
	font-size: 1em;
}
```

In browser’s default CSS, text inputs has a smaller `font-size` than `16px`. This causes Ios to zoom in on the `input` when focused. For many users its annoying and/or confusing. For accessibility and usability, and to deal with a following
side-effect, consistency: all interactive elements that doesn’t already have `font-size: 1em` are part of this ruleset.

```css
/* `[hidden]` maintain behaviour when overriding `display` values. */
/* `source` has nothing to display and should not display. */
[hidden], source {
	display: none;
}
```

For `[hidden]`, this rule maintains the behaviour with higher specificity than browser CSS. For `<source>`, this is can be considered a polyfill to not `display` this relatively new element which has nothing to display.

...

```css
picture {
	display: contents;
}
```

...

```css
img, svg, video, canvas, audio, iframe, embed, object {
	vertical-align: middle;
}
```

This ruleset removes a block-end space for these elements that (can when `display` is changed for some of these) disrupt layouts.

---

*Below follows more opinionated rulesets.*

```css
figure, hr {
	margin-inline: 0;
}
```

To make elements align horizontally with other elements, `margin-inline` is removed. For these elements it would otherwise default to `auto`. For `<hr>` the`auto` value would become apparent when parent container has `display` `flex` or `grid`.

```css
[aria-disabled="true" i], [disabled], [readonly] {
	cursor: not-allowed;
}
```

For (usually interactive) elements currently not interactive `cursor` will consistently be `not-allowed`.

```css
::file-selector-button, [role="button" i], [type="button" i], [type="reset" i], [type="submit" i], button, select, summary {
	cursor: pointer;
}
```

Ending with the most opinionated ruleset: all clickable elements gets `cursor: pointer`. The reason being how popular UI libraries, like Bootstrap, adds it for buttons and have made web users accustomed to it. Let’s embrace it and make it as consistent as it can be!

## Do CSS

```css
body {
	margin: 0;
}
```

### Notes

- Think about what CSS is/can be used to, and in what order from basic to advanced sites/apps: typography, layouts, usability, accessibility, more typography and graphical design, animations, 3D rendering.

- If all needed elements where to be normalized across browsers, that would cause a lot of unused code for most apps and sites. Rather style those elements when they are used a lot. Perhaps it can be code-split. It obviously results in more focused and lean CSS when only what needs fixing is styled.


[amcr]: https://piccalil.li/blog/a-modern-css-reset/
[cc]: https://cube.fyi/
[cr]: https://github.com/jensimmons/cssremedy
[mn]: https://github.com/sindresorhus/modern-normalize
[ms]: https://some.makeup/style
[nc]: https://github.com/necolas/normalize.css/
[op]: https://open-props.style/
[sc]: https://github.com/csstools/sanitize.css
