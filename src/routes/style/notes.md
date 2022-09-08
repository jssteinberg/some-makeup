---
title: Notes, makeup-style
description: Developer notes for CSS library makeup-style.
set: ['typography', 'code']
---

# Notes

*Developer notes for makeup-style, the CSS library.*

## Library guide

- File names as actions.

## Philosophy

default.css defaults CSS so no elements overflow or affect line-height, so elements are more intuitive to style and to enable easier typographically correct styling---utilizing CSS functions and variables when suitable. It differs from normalize.css, sanitize.css and CSS Remedy in how it does not bother normalizing what doesn't create a gotcha or disrupt typography. It obviously results in less CSS when defaulting only the needed and not trying to normalize what does not break anything.

"Hold on" you are thinking. "So some thing will look different from browser to browser?" Yes, probably. I would say these differences are so small that it does not matter. For instance `<hr>` is gray in Firefox and text color in Webkit, the font-size for `<sub>`/`<sup>` will differ slightly, but when a site wants a certain style these elements are then styled specifically if needed anyway.

Some comparisons with similar libraries:

- Opposite of CSS Remedy, font-size for h1 is not set. Browser default makes sense, and font-size can be, and usually is, set when styling.
- `<sub>`/`<sup>` are not positioned (they already are in modern browsers), only styled with less line-height to not disrupt vertical rhythm, as are some other elements:

	```css
	code, kbd, samp, sub, sup {
		line-height: .625; }
	```

## Space

"space.css" as file name. `--space` as variable name.

In the library I created before this, the variable was eventually renamed `--spacer`. Mostly to be more in style with Bootstrap naming. "Space" is shorter and I like that the file has the same name. Space. The file can't be named "spacer". An import now looks likes this: `@import 'makeup-style/src/space.css'`. It's like an action you take. Space CSS! You also "default CSS!" "Spacer CSS" doesn't work.

Another option could be "flow". Flow CSS! `--flow` as variable name. Or `--flow-space` to give it more meaning, but I like to use shorter variable names when I can. The same with "rhythm". So I'm sticking with "space". (Also "flow" is now used for another file).

## Handling `--added-lead`

For defining `--added-lead` and setting line-height, there are basically two options (option 2 is the one used with flow.css):

```css
:root {
	/* For both options,
	 * define variable on a parent: */
	--added-lead: .25;

	/* OPTION 1 */
	line-height: calc(1 + var(--added-lead));
}

/* Opt. 1
 * requires line-height to be reset for children
 * when `--added-lead` is changed: */
main {
	--added-lead: .6;
	line-height: calc(1 + var(--added-lead));
}

/* OPTION 2
 * This way changing line-height for children
 * only requires updating var `--added-lead`. */
div, header, nav, footer,
address, datalist, details, fieldset, pre, table,
canvas, embed, figure, iframe, object, video,
dl, ol, ul,
blockquote, p {
	line-height: calc(1 + var(--added-lead));
}

/* Opt. 2
 * will update line-height for children
 * only by redefining `--added-lead`: */
main { --added-lead: .6; }
```
