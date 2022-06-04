---
title: Fix CSS
set: ["code"]
---

A CSS fix has to start with perhaps **the** rule all elements needs so they can be more safely styled and not cause overflow. It makes browsers calculate width and height intuitively by including `border-width` and `padding`. Important for many reasons, also for preventing horizontal overflow.

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

Prevent `<pre>` from overflowing `pre-wrap` is set.

```css
pre {
	white-space: pre-wrap;
}
```

<Details>
<em slot="summary">Another way</em>

Another way to implement this would be to not wrap the content and use `overflow-x: auto`, but the CSS for not wrapping `pre` content must handle several exceptions and becomes a lot more verbose.

</Details>

---

Media and form related elements are ruled to be responsive, and could otherwise overflow.

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

For accessibility, textareas only resize vertically by default.

```css
textarea {
	resize: vertical;
}
```

---

`<strong>` should be `bolder` in all browsers so strong text is relative to its parent. This improves the default displayed semantics of the element. `<b>` is also included in case any outdated WYSIWYG editors still use it.

```css
b, strong {
	font-weight: bolder;
}
```

---

Inline elements with different `font-family` or `font-size` can bear a special meaning and stylistically they can affect lines' heights.

1. Avoid changing the meaning of the content by hyphenation inheritance.
2. Avoid that lines' heights are affects by these elements. *This is not a full normalization of these elements---which has little value in this case---but a single common rule that fixes the main problem for all these elements in layouts. It's worth noting that it can cause another layout surprise if their parent changes `display` value, but these elements should really not be direct children of parents like that.*

```css
code, kbd, samp, sub, sup {
	hyphens: manual;
	line-height: .625;
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

*Below follows more opinionated rulesets.*

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

---

*To be continued with *“Do” it Intuitively*.*

## Side notes

- CSS Remedy also adds `line-sizing: normal` to the root element, but that was from a CSS draft later changed. The fix presented here fixes it with a single `line-height` rule for the inline elements in question.
- Margins or sizes for headings are not included. Browsers has descent styles, even if `<h1>` can differ. Themes usually styles the headings they need with margins and size.
- Elements like `abbr` and `hr` are not normalized. By default browsers styles them decently and semantically. If they’re part of a theme they are usually more restyled as well.
- Margins for nested lists are not removed, as sanitize.css does. Sometimes someone wants to style lists in a totally different way, and have margins on nested lists. It’s easier to remove them when needed.
- `font-size: 1em` is not set for elements using monospace font, as many libraries does. Ironically themes specifically styling them adjust that font-size down, as browsers already does by default. This browser default font-size is not a problem (anymore?).
- `font-size` for `<small>` is not normalized as it’s already smaller in all browsers. If using a specific size is important for a theme, then the theme sets it consistently  between elements.
- Form elements are not normalized, but are normalized for styling in the “do” CSS.
- Polyfills: CSS Remedy (and of course normalize.css) contains some polyfills for elements browsers haven't/hadn't added (correct) styles for. Like: `audio:not([controls]) { display:none; }`.
- Using `:where()` or `@layer` could be of future improvements when more users updates their browsers.


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

<style lang="scss">
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
