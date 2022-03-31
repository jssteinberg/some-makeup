---
title: Notes, makeup-style
description: Developer notes for CSS library makeup-style.
set: ['typography', 'code']
---

# Notes

*Developer notes for makeup-style, the CSS library.*

## Library guide

- File names as actions.

## Space

"space.css" as file name. `--space` as variable name.

In the library I created before this, the variable was eventually renamed `--spacer`. Mostly to be more in style with Bootstrap naming. "Space" is shorter and I like that the file has the same name. Space. The file can't be named "spacer". An import now looks likes this: `@import 'makeup-style/src/space.css'`. It's like an action you take. Space CSS! You also "fix CSS!" "Spacer CSS" doesn't work.

Another option could be "flow". Flow CSS! `--flow` as variable name. Or `--flow-space` to give it more meaning, but I like to use shorter variable names when I can. The same with "rhythm". So I'm sticking with "space".

## Handling `--added-lead`

For defining `--added-lead` and setting line-height, there are basically two options:

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
