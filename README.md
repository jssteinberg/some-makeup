# makeup-style

Minimal CSS files for correcting and improving default browser CSS, for narrow viewports first, and provides convenient and intuitive CSS-defaults for styling in general and typographic style.

```bash
npm install makeup-style
```

```css
@import "makeup-style/src/default.css";
@import "makeup-style/src/develop.css";
/* Alternatively with `:where()` for less specificity: */
@import "makeup-style/src/where-default.css";
@import "makeup-style/src/where-develop.css";

@import "makeup-style/src/space.css";
@import "makeup-style/src/flow.css";
```

[Go to documentation](https://some.makeup/style)

*Inspired by The Elements of Typographic Style, [normalize.css][nc], [modern-normalize][mn], [CSS Remedy][cr], [sanitize.css][sc], [Open Props][op], [A modern CSS reset][amcr] (there's also [this custom CSS reset][mccr]).*

## Plans

*This repo is a mess. A fix-up is slowly in the works. If you somehow stumbled over this library and would like it sped up, e.g., for contributions, please create an issue/request.*

Plan v2:

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

develop.css maybes:

- Mask images are not repeated (from a sanitize.css pull request):

	```css
	*, ::before, ::after {
		mask-repeat: no-repeat;
	}
	```

<details>

<summary>Rename?</summary>

- ( ) default.css, development.css, (spacing.css, typographic.css) (For style some?)
- (-) default.css, develop.css, (space.css, typographic.css)  
- ( ) default.css, dx.css,      (space.css, typographic-style.css)  
- ( ) default.css, develop.css, (even.css,  flow.css)  
- ( ) default.css, dx.css,      (even.css,  flow.css)  
- ( ) default.css, enhance.css, (even.css,  flow.css)  
- ( ) correct.css,  (even.css,  flow.css)  
- ( ) cure.css,     
- ( ) heal.css,    help.css,    reform.css, ...
- ( ) revise.css,  reform.css,  typographic-style.css
- ( ) revise.css,  shape.css,   typographic-style.css
- ( ) repair.css,  shape.css,   typographic-style.css
- ( ) revise.css,  rewrite.css, space.css,  typograph.css
- ( ) correct.css, develop.css, even.css,   flow.css
- ( ) fix.css,     forge.css    (do),       space.css,...
- ( ) amend.css,   alter.css,   block.css
- ( ) amend.css,   brace.css...
- ( ) fix.css,     form.css     (do),       ...
- ( ) fix.css,     shape.css    (do),       space.css,...
- ( ) cure.css,    develop.css
- ( ) repair.css,  prepare.css, ...

</details>

## History

*makeup-style is the updated, slightly more opinionated remake of my own [Floor Typography CSS](https://floortypography.vercel.app).*

*Changes from Floor Typography CSS v22:*

- Updated default CSS revising and normalizing, more tested.
- Less files and features, more quality.
- `--line-span` var for headings (not `--h…-min-font-size`).
- `--space` var for controlling spacing (not `--spacer`).
	- Space is not removed for sub-lists (would cause unexpected list styles if parent list was styled unconventional. Rather remove margin for sub-lists in containers of choice).

[amcr]: https://piccalil.li/blog/a-modern-css-reset/
[cc]: https://cube.fyi/
[cr]: https://github.com/jensimmons/cssremedy
[mn]: https://github.com/sindresorhus/modern-normalize
[mccr]: https://www.joshwcomeau.com/css/custom-css-reset/
[nc]: https://github.com/necolas/normalize.css/
[op]: https://open-props.style/
[sc]: https://github.com/csstools/sanitize.css
