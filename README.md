# makeup-style

CSS fix for default browser CSS (no IE though), for narrow viewports first. Provides intuitive default CSS for styling and typographic style.

*Relevant files in repository/package: src/fix.css, src/do.css, src/space.css, src/flow.css.*

[Documentation -- read more about each file and see tests](https://some.makeup/style)

---

makeup-style differs from normalize.css and sanitize.css in how it does not bother normalizing every weird element. Some elements are rarely used or should be styled and code-split given its context. makeup-style instead fixes CSS so no elements overflow or affect line-height, so elements are more intuitive to style and to enable easier typographically correct styling -- utilizing CSS functions and variables when suitable.

Plan v2:

- wrap stuff in `:where()`
- remove `[hidden]` ... `display: none`? Should be implmented in all used browsers now.

Inspiration: The Elements of Typographic Style, normalize.css, modern normalize, CSS Remedy, sanitize.css, BEM, [Open Props][op], [A modern CSS reset][amcr].

## History

*makeup-style is the updated, slightly more opinionated remake of my own [Floor Typography CSS](https://floortypography.vercel.app).*

*Changes from Floor Typography CSS v22:*

- CSS reorganized in new files: fix.css, do.css, space.css and flow.css.
- `--line-span` var for headings (not `--h…-min-font-size`).
- `--space` var for controlling spacing (not `--spacer`).
	- Space is not removed for sub-lists (would cause unexpected list styles if parent list was styled unconventional. Rather remove margin for sub-lists in containers of choice).
- Removes setting font-size for h1 (OG from CSS Remedy). Browser default makes sense, and font-size can be, and usually is, set when styling.
- Remove `line-sizing`, an outdated CSS proposal (OG from CSS Remedy).

	```css
	/* Correct the font size for `:is(article,section) h1` elements (Chrome/Firefox/Safari). */
	h1 { font-size: 2em; }
	```

[op]: https://open-props.style/
[amcr]: https://piccalil.li/blog/a-modern-css-reset/
[cc]: https://cube.fyi/
