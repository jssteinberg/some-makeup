---
title: makeup-style
description: "Makeup style for the web."
set: ["code"]
---

# makeup-style

So you want to makeup style? These minimal CSS files corrects and improves default browser CSS; for styling in general and typographic style.

```
npm install makeup-style
```

*Also consider using a library like [postcss-preset-env][ppe] for auto prefixing and fixing of newer rules for older browsers.*

<Details>
<em slot="summary">Import examples</em>

*The files are exported from "package.json" as [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). The actual files are located in the "src" folder if you need the real path.*

```javascript
import "makeup-style/default.css";
import "makeup-style/develop.css";
```

Alternative files that use `:where()` for less specificity:

```javascript
import "makeup-style/where-default.css";
import "makeup-style/where-develop.css";
```

CSS import (via postcss-import or Lightning CSS):

```css
@import "makeup-style/default.css";
@import "makeup-style/develop.css";
/* Alt. files */
@import "makeup-style/where-default.css";
@import "makeup-style/where-develop.css";
```

</Details>

## 1. *Default CSS*

*The actual few, up-to-date, low-level CSS rules you want below your styling.*

Import "default.css", or an alternative using `:where()` for less specificity: "where-default.css".

It corrects and improves the minimal necessary default CSS for **(1)** an up to date cross-browser normalizing, **(2)** responsive rules for small screen-sizes—that includes universally using `border-box` for preventing overflow and making styling way more intuitive, otherwise preventing overflowing content—**(3)** typography and **(4)** usability. All rules are included with the mindset of this generally fixing and improving default CSS in a minimal way. It does not style headings, or what would otherwise belong in your actual theme.

This file is an updated alternative to
[normalize.css][nc],
[modern-normalize][mn],
[CSS Remedy][cr],
[sanitize.css][sc] and similar---updated for all major browsers and with the latest CSS properties.

<Details>
<em slot="summary">Notes & Tips</em>

Margin for `<body>` is not removed. So you usually also want to style `body { margin: 0; }`.

Check browser support for properties `hyphens` and `all`, and consider automating fallbacks and polyfill with [postcss-preset-env][ppe] or similar.

To allow browsers to auto hyphenate words when text wraps, `hyphens: auto` is applied. It is not accompanied by [rules to control auto-hyphens](https://clagnut.com/blog/2395). `hyphens: manual` may be set (for some elements) on wider viewports and/or for advanced content creators who knows `shy`.

`code, kbd, samp, sub, sup` are inline elements Default CSS styles to not affect line-heights. If they are used as block-level elements though, they will be short in height since their `line-height` is adjusted. E.g., if their direct parent uses `grid` or `flex`. The solution is to redo your HTML structure (perhaps it can be more semantic?), or restyle `line-height` for these elements in this context.

`<hr>` 'border' uses `height` and `background` for a nicer border. This makes it easy to adjust and extend:

```css
hr {
	/* Gradient border */
	background-image: linear-gradient(90deg, red, blue);
	/* Change size */
	background-size: 5em 2px;
	/* Change position */
	background-position: left center;
	/* Change spacing */
	height: 2em;
}
```

</Details>

## *Develop CSS*---A <cite>Default CSS</cite> Expansion

Import "develop.css", or an alternative using `:where()` for less specificity: "where-develop.css".

For developer convenience, it includes some simple rules for more intuitive coding, and reduce-motion rules for animations and transitions so accessibility is easier preserved. *The latter first seen in [A Modern CSS Reset][amcr].


[amcr]: https://piccalil.li/blog/a-modern-css-reset/
[cc]: https://cube.fyi/
[cr]: https://github.com/jensimmons/cssremedy
[mn]: https://github.com/sindresorhus/modern-normalize
[mccr]: https://www.joshwcomeau.com/css/custom-css-reset/
[nc]: https://github.com/necolas/normalize.css/
[op]: https://open-props.style/
[sc]: https://github.com/csstools/sanitize.css
[ppe]: https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env

<script>
 	import Details from "/src/lib/Details.svelte";
</script>
