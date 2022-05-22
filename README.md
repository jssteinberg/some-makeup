# makeup-style

Minimal CSS files for fixing default browser CSS, for narrow viewports first, and provides intuitive CSS-defaults for styling in general and typographic style.

The files in question: src/fix.css, src/do.css, src/space.css, src/flow.css.

[Go to documentation](https://some.makeup/style)

*Inspired by The Elements of Typographic Style, [normalize.css][nc], [modern-normalize][mn], [CSS Remedy][cr], [sanitize.css][sc], [Open Props][op], [A modern CSS reset][amcr] (there's also [this custom CSS reset][mccr]).*

---

Plan v1:

- Check support for `…-block`/`…-inline`. If good, then use.

Plan v2:

- Wrap stuff in `:where()` or use `@layer`.
- Remove `[hidden]` ... `display: none`? Should be implmented in all used browsers now. *No! It's for maintaining behaviour.*

## History

*makeup-style is the updated, slightly more opinionated remake of my own [Floor Typography CSS](https://floortypography.vercel.app).*

*Changes from Floor Typography CSS v22:*

- CSS reorganized in new files: fix.css, do.css, space.css and flow.css.
	- Updated fix and normalize (do.css), more tested.
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
