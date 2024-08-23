# makeup-style

Experimental minimal CSS files for correcting and improving default browser CSS; for styling in general and typographic style.

[Installation and documentation](https://some.makeup/style)

The files in question are exported as ("makeup-style/..."):

```
default.css
develop.css
where-default.css
where-develop.css
```

The actual files are located in the “src” folder for the real path.

*Inspired by The Elements of Typographic Style, [normalize.css][nc], [modern-normalize][mn], [CSS Remedy][cr], [sanitize.css][sc], [Open Props][op], [A modern CSS reset][amcr] (there's also [this custom CSS reset][mccr]).*

<details>

<summary>Plans</summary>

Plan @next:

- `textarea { font-family: inherit; }`? Firefox does not inherit font-family.
- Support variable font, e.g., for `b, strong`.
- [-] Wrap stuff in `:where()` or use `@layer`. *`:where()` is available in alt. files.*

Nope:

- Remove `[hidden]` ... `display: none`? Should be implemented in all used browsers now. *No! It's for maintaining behaviour.*

default.css maybes:

- Let SVG scale without boundaries:

	```css
	img[src$=".svg"] {
		width: 100%;
		height: auto;
		max-width: none;
	}
	```

</details>

<details>

<summary>Naming process</summary>

- makeup-style/ahead.css, ../develop.css, ../space.css, ../typography.css
- ( ) default.css, developer.css, space.css, typography.css (for potential style-some)
- (-) default.css, develop.css, (space.css, typography.css)

</details>

<details>

<summary>History</summary>

makeup-style is the updated remake of [Floor Typography CSS](https://floortypography.vercel.app).

Changes from Floor Typography CSS v22:

- Updated default CSS revising and normalizing, more tested.
- Less files and features, more quality.
- `--line-span` var for headings (not `--h…-min-font-size`).
- `--space` var for controlling spacing (not `--spacer`).
	- Space is not removed for sub-lists (would cause unexpected list styles if parent list was styled unconventional. Rather remove margin for sub-lists in containers of choice).
</details>

[amcr]: https://piccalil.li/blog/a-modern-css-reset/
[cc]: https://cube.fyi/
[cr]: https://github.com/jensimmons/cssremedy
[mn]: https://github.com/sindresorhus/modern-normalize
[mccr]: https://www.joshwcomeau.com/css/custom-css-reset/
[nc]: https://github.com/necolas/normalize.css/
[op]: https://open-props.style/
[sc]: https://github.com/csstools/sanitize.css
