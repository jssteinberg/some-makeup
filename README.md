# makeup-style

CSS fix for default browser CSS (no IE though), for narrow viewports first. Provides intuitive default CSS for styling and typographic style.

makeup-style differs from normalize.css, sanitize.css, CSS remedy, etc. in how it does not bother normalizing every weird element. Some elements are rarely used or should be styled and code-split given its context. makeup-style instead fixes CSS so no elements overflow or affect line-height, so elements are more intuitive to style and to enable easier typographically correct styling -- utilizing CSS functions and variables when suitable.

[Documentation](https://dev.some.makeup/style)

---

*makeup-style is a slightly more opinionated remake of my own [Floor Typography CSS](https://floortypography.vercel.app).*

*Changes from Floor Typography CSS v22:*

- CSS reorganized in new files.
	- intuitive.css (fix.css?)
	- dx.css (dev.css?)
	- space.css
	- line-height.css (lead.css, leading.css?)
- `--line-span` var for headings (not `--h…-min-font-size`).
- `--space` var for controlling spacing (not `--spacer`).
- Only sets margin-block-end for spacing reset (not top AND bottom). Now in file space.css.
- `sub` and `sup` has only normalize of `0` `line-height` to not affect parent `line-height`.
- Removes setting font-size for h1 (OG from CSS Remedy). Browser default makes sense, and font-size can be, and usually is, set when styling.

	```css
	/* Correct the font size for `:is(article,section) h1` elements (Chrome/Firefox/Safari). */
	h1 { font-size: 2em; }
	```
