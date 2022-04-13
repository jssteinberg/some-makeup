---
set: ["typography", "code"]
---

# Post-Normalize:<br aria-hidden="true">Fix CSS, Do CSS

<aside>

At the time of writing this, normalize.css has not been updated since 2018.

</aside>

Coding CSS a decade ago, a CSS-reset was a necessity, and an utter annoyance. Especially for those new to web development. (CSS-resets resets all/most styles for all/most elements). Then [normalize.css][nc] became popular, thank god, and elements would more or less keep their intended default styles. Visually HTML elements makes some semantic sense.

An HTML element's default style does actually show the semantic meaning of that element. Yes that style is simple by default, but a link displays as a link, a list displays as a list, and so on. And I would think most agrees on that being a good thing, so many that there are quite a lot of projects in same spirit as normalize.css: [modern-normalize][mn], [CSS Remedy][cr], [sanitize.css][sc], and others.

---

I don't think all CSS should be normalized in a library like normalize.css. That is too much code. Code that usually is overwritten in how sites/apps are styled. In a low level library like normalize.css the focus should be on the core of displaying content on the web: making sure that content don't break on any screen size, and keeping and improving basic typography; if there are simple opportunities to improve the developer experience (DX) in the needed code, then do that as well.

So this is not just yet-another take on normalize.css, but it will solve all of the same problems. This code do it a bit different from the rest of them. It know what it wants. It's focused. It has (a) goal(s):

1. Fix 'unsafe' CSS that can cause content to overflow horizontally, but do it minimal and make the basics intuitive to style.
2. Default CSS rules that makes coding CSS more intuitive---generally and cross-browser.
3. Default CSS rules for better, basic typography and for easier typographic styling.

And generally, let's provide CSS properties/variables to make complicated rulesets easier to adjust when needed.

---

I have split the tree items above into four files---*the last item can be endlessly expanded on*---so I can import what I need:

1. fix.css
2. do.css---expands fix.css with DX
3. space.css, and flow.css---which expands space.css with advanced typography, though basic in the world of typography

## Fix CSS

```css
*, ::before, ::after {
	box-sizing: border-box;
}
```

It starts with perhaps **the** ruleset everyone needs for safe styling so browsers calculate width and height intuitively. Important for many reasons, and also for preventing horizontal overflow.

Next is the global rules for preventing overflowing text:

```css
:root {
	overflow-wrap: break-word;
	hyphens: auto;
	-webkit-text-size-adjust: 100%;
}
```

`overflow-wrap: break-word` simply breaks words so they don't overflow horizontally and create a horizontal scrollbar (use this property, not `word-break`).

`hyphens: auto` will default words to automatically be hyphenated when they break. It also has logic on how to break words and sentences. *The support may still be lacking for some languages in some browsers.* `hyphens: manual` may be set for advanced content creators who knows `&shy;` and (for some elements) on wider viewports.

`-webkit-text-size-adjust: 100%` is for preventing Safari on Ios to declare bigger font-size for some elements---like `<p>`, but not headings(!?)---when device is in landscape orientation.

The last rulesets for preventing overflow is for pre-formatted text, media elements and form elements:

```css
pre { white-space: pre-wrap; }

/* Media and form related elements */
img, svg, video, canvas, audio, iframe, embed, object,
input, select, textarea {
	max-width: 100%;
	height: auto;
}
```

`<pre>` is set to, by default, wrap to prevent overflow. This is a rule often overridden for sites that display code, and that would be another option for this ruleset. But the CSS for not wrapping pre-formatted text is a lot more verbose---I prefer to go for the option with the minimal fix.

Media and form related elements are declared to be responsive by default. Normal rules found in most similar libraries.

...WIP, more to come.

## Notes

*If all needed elements where to be normalized across browsers, that would cause a lot of unused code for most apps and sites. Rather style those elements when they are used a lot. Perhaps it can be code-split. It obviously results in more focused and lean CSS when only what needs fixing is styled.*

*The browser default CSS-fix, post-normalize.css, focused and lean*

## Author

[Johan Sebergsen Steinberg](/johan)

[amcr]: https://piccalil.li/blog/a-modern-css-reset/
[cc]: https://cube.fyi/
[cr]: https://github.com/jensimmons/cssremedy
[mn]: https://github.com/sindresorhus/modern-normalize
[ms]: https://some.makeup/style
[nc]: https://github.com/necolas/normalize.css/
[op]: https://open-props.style/
[sc]: https://github.com/csstools/sanitize.css
