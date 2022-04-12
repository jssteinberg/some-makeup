# makeup-style

CSS fix for default browser CSS (no IE though), for narrow viewports first. Provides intuitive default CSS for styling and typographic style.

*Relevant files in repository/package: src/fix.css, src/do.css, src/space.css, src/flow.css.*

[Documentation---read more about each file and see tests](https://some.makeup/style)

---

Plan:

- Check support for `…-block`/`…-inline`. If good, then use.

Plan v2:

- wrap stuff in `:where()`
- remove `[hidden]` ... `display: none`? Should be implmented in all used browsers now.

Inspiration: The Elements of Typographic Style, [normalize.css][nc], [modern normalize][mn], [CSS Remedy][cr], [sanitize.css][sc], BEM, [Open Props][op], [A modern CSS reset][amcr].

## History

*makeup-style is the updated, slightly more opinionated remake of my own [Floor Typography CSS](https://floortypography.vercel.app).*

*Changes from Floor Typography CSS v22:*

- CSS reorganized in new files: fix.css, do.css, space.css and flow.css.
	- Updated fix and normalize (do.css), more tested.
- `--line-span` var for headings (not `--h…-min-font-size`).
- `--space` var for controlling spacing (not `--spacer`).
	- Space is not removed for sub-lists (would cause unexpected list styles if parent list was styled unconventional. Rather remove margin for sub-lists in containers of choice).

[amcr]: https://piccalil.li/blog/a-modern-css-reset/
[cc]: https://cube.fyi/
[cr]: https://github.com/jensimmons/cssremedy
[mn]: https://github.com/sindresorhus/modern-normalize
[nc]: https://github.com/necolas/normalize.css/
[op]: https://open-props.style/
[sc]: https://github.com/csstools/sanitize.css
