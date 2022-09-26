# makeup-style

Minimal CSS files for correcting and improving default browser CSS, for narrow viewports first, and provides intuitive CSS-defaults for styling in general and typographic style.

```
npm install makeup-style

@import "makeup-style/src/default.css";
@import "makeup-style/src/enhance.css";
@import "makeup-style/src/space.css";
@import "makeup-style/src/flow.css";
```

[Go to documentation](https://some.makeup/style)

*Inspired by The Elements of Typographic Style, [normalize.css][nc], [modern-normalize][mn], [CSS Remedy][cr], [sanitize.css][sc], [Open Props][op], [A modern CSS reset][amcr] (there's also [this custom CSS reset][mccr]).*

## Plans

Plan v1:

- [v] Consider adding to default.css (seems like only applies if words can't be hyphenated):

	```css
	overflow-wrap: anywhere;
	```

	- Fallback to `overflow-wrap: break-word`?

- Check support for `…-block`/`…-inline`. If good, then use.

Plan v2:

- Support variable font, e.g., for `b, strong`.
- Wrap stuff in `:where()` or use `@layer`.

Nope:

- Remove `[hidden]` ... `display: none`? Should be implemented in all used browsers now. *No! It's for maintaining behaviour.*

<details>

<summary>Rename?</summary>

- ( ) default.css, enhance.css,  (even.css,  flow.css)  
- (-) default.css, develop.css,  (even.css,  flow.css)  
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
