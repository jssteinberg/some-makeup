# Makeup Style

CSS fix for default browser CSS (no IE though), for narrow viewports first. Provides intuitive default CSS for styling and typographic style.

Makeup Style differs from normalize.css, sanitize.css, CSS remedy, etc. in how it does not bother normalizing everything, but makes sure styling out of the box does not break anything, is intuitive to style and enables styling to be typographically correct.

[Documentation](https://dev.some.makeup/style)

"*The version of [Floor Typography CSS](https://floortypography.vercel.app) I want myself.*"

## Changes from Floor Typography CSS

- CSS reorganized in new files.
	- contain.css and intuitive.css (merge these two?)
		- possible names: dx.css, fix.css, usable.css, ground.css, dirt.css
		- default.css?
	- space.css
	- line-height.css (change to leading.css?)
- `--line-span` var for headings (not `--h…-min-font-size`).
- `--space` var for controlling spacing (not `--spacer`).
- Only sets margin-block-end for spacing reset (not top AND bottom). Now in file space.css.
- `sub` and `sup` has only normalize of `0` `line-height` to not affect parent `line-height`.
- Removes setting font-size for h1 (OG from CSS Remedy). Browser default makes sense, and font-size can be, and usually is, set when styling.

	```css
	/* Correct the font size for `:is(article,section) h1` elements (Chrome/Firefox/Safari). */
	h1 { font-size: 2em; }
	```
