# Makeup Style

## Changes from Floor Typography CSS

- CSS is split into files more logically.
- `--line-span` var for headings, not `--h…-min-font-size`.
- `--space` var for controlling spacing, not `--spacer`.
- Only sets margin-block-end for spacing reset (space.css).
- `sub` and `sup` has only normalize of `0` `line-height` to not affect parent `line-height`.
- Removes setting font-size for h1 (OG from CSS Remedy). Browser default makes sense, and font-size can be, and usually is, set when styling.

	```css
	/* Correct the font size for `:is(article,section) h1` elements (Chrome/Firefox/Safari). */
	h1 { font-size: 2em; }
	```
