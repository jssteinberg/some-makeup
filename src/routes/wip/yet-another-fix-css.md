---
set: ["typography", "code"]
---

# Post-Normalize:<br aria-hidden="true">Fix & Do CSS

<aside>

At the time of writing this, normalize.css has not been updated since 2018.

</aside>

Coding CSS a decade ago, a CSS-reset was normally used, and an utter annoyance. Especially for those new to web development. (CSS-resets resets all/most styles for all/most elements). Then [normalize.css][nc] became popular, thank god, and elements would more or less keep their intended default styles, just be somewhat styled to be more similar across browsers. Visually HTML elements made semantic sense again.

An HTML element's default style does actually show the semantic meaning of that element. Yes that style is simple by default, but a link displays as a link, a list displays as a list, and so on. And I would think most agrees on that being a good thing, so many that there are quite a lot of projects in same spirit as normalize.css: [modern-normalize][mn], [CSS Remedy][cr], [sanitize.css][sc], and others.

## Re-Thinking Normalize.css

All CSS shouldn’t be normalized in a low level library *like* normalize.css. When it is, that code is opinionated and that style is likely overwritten when sites/apps are styled.

Fix and Do CSS is not just yet-another take on normalize.css. It solves the same problems, but more, though differently, with code as minimal as possible. This code knows what it wants. It's focused. It has a priority of goals:

1. Fix default CSS: so displaying content and styling is safe on any device by not overflowing; to prevent inline elements from affecting line-height, and; so defaults are consistent between elements.
2. Fix default CSS so *doing* programming is as intuitive as can be---generally and cross-browser.
3. (Add basic CSS rules for better, basic typography and for easier typographic styling.)

Also, when natural, provide CSS properties/variables to make adjustments easier when needed.

---

The items naturally splits into different files---*the last item can be endlessly expanded on*---so what level of lowness is needed can be imported:

1. fix.css
2. do.css
3. (space.css and flow.css)

## Fix CSS

```css
*, ::before, ::after {
	box-sizing: border-box;
}
```

A fix CSS has to start with perhaps **the** rule all elements needs to intuitively be styled. It makes browsers calculate width and height intuitively by including `border-width` and `padding`. Important for many reasons, also for preventing horizontal overflow. *Another option for implementing this is using the above rule for `:root` and changing the above value to `inherit`. But inheriting any other box-sizing value can cause cut and overflown content.*

```css
:root {
	overflow-wrap: break-word;
	hyphens: auto;
	-webkit-text-size-adjust: 100%;
}
```

For the root element there a two rules that prevents overflown text, and one normalizing rule, all three important for mobile devices.

`overflow-wrap: break-word` (not  `word-break` property) it simply breaks words if needed to not overflow horizontally and create a horizontal scrollbar.

`hyphens: auto` allows the browser to automatically hyphenate words when text wraps if appropriate. *The support may still be lacking for some languages in some browsers.* `hyphens: manual` may be set for advanced content creators who knows `&shy\;` and (for some elements) on wider viewports.

`-webkit-text-size-adjust: 100%` is for preventing Safari on Ios to adjust bigger font-size for some elements when device is in landscape orientation.

```css
pre {
	white-space: pre-wrap;
}
```

To prevent `<pre>` from overflowing it is declared with pre-wrap. For displaying code it is often preferred to have the content `overflow-x: auto`, and that would be another option for this ruleset. But the CSS for not wrapping `pre` must handle several exceptions and becomes a lot more verbose.

```css
img, svg, video, canvas, audio, iframe, embed, object,
input, select, textarea {
	max-width: 100%;
	height: auto;
}
```

Media and form related elements are declared to be responsive by default.

```css
strong {
	font-weight: bolder;
}
```

`<strong>`  should be `bolder` in all browsers so it is most likely strong text always shows by default. This improves the default display of the semantic of the element.

```css
code, kbd, samp, sub, sup {
	line-height: .625;
}
```

Some inline elements can affect the line-heights of lines they are on. This is not a full normalization, but a single common rule that fixes the main problem for all these elements. Brilliant! *This is where a full normalization has little value.*

```css
::file-selector-button, button, input, select, textarea {
	font-size: 1em;
}
```

For accessibility and usability, text inputs shouldn’t cause zooming on Ios when focused. It can be quite annoying/confusing to users. Then, for consistency, the rule is for all interactive elements.

```css
/* Intuitive inline margins---horizontal align with adjacent. */
figure, hr {
	margin-inline: 0;
}
```

```css
/* Remove unintended space below. */
img, svg, video, canvas, audio, iframe, embed, object {
	vertical-align: middle;
}
```

```css
/* Consistent mouse interaction with clickable elements. */
::file-selector-button, [type="button" i], [type="reset" i], [type="submit" i], button, select, summary {
	cursor: pointer;
}

/* Consistent cursor for disabled elements */
[aria-disabled="true" i], [disabled], [readonly] {
	cursor: not-allowed;
}
```

## Do CSS
…

## Notes

Think about what CSS is/can be used to, and in what order from basic to advanced sites/apps: typography, layouts, usability, accessibility, more typography and graphical design, animations, 3D rendering.

*If all needed elements where to be normalized across browsers, that would cause a lot of unused code for most apps and sites. Rather style those elements when they are used a lot. Perhaps it can be code-split. It obviously results in more focused and lean CSS when only what needs fixing is styled.*

*The browser default CSS-fix, post-normalize.css, focused and lean*


[amcr]: https://piccalil.li/blog/a-modern-css-reset/
[cc]: https://cube.fyi/
[cr]: https://github.com/jensimmons/cssremedy
[mn]: https://github.com/sindresorhus/modern-normalize
[ms]: https://some.makeup/style
[nc]: https://github.com/necolas/normalize.css/
[op]: https://open-props.style/
[sc]: https://github.com/csstools/sanitize.css
