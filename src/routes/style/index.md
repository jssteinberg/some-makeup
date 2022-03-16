---
title: Makeup Style
description: So you want to makeup some styling?
---

# Makeup Style

So you want to makeup some styling?

These CSS files fixes default browser CSS (no IE though), for narrow viewports first, and provides the intuitive default CSS for styling in general and typographic style.

---

```css
@import 'makeup-style/static/contain.css';
```

CSS to prevent text and content from overflowing. *This file is pretty much mandatory for avoiding many layout gotchas, especially for narrow viewports.*

---

```css
@import 'makeup-style/static/intuitive.css';
```

CSS for intuitive styling behaviours and browser default fixes that prevents elements from disrupting the default vertical rhythm by affecting line-height, excluding form elements. Includes option for defining variable `--mono-font` for setting mono-font-family.

---

```css
@import 'makeup-style/static/space.css';
```

CSS that sets consistent spacing between the needed block-level elements. Spacing can be adjusted and controlled with variable `--space` (defaults -- by falling back -- to `1rem`).

---

```css
@import 'makeup-style/static/line-height.css';
```

CSS that sets line-height to equal leading for headings and body/other text.

*This file requires variable `--added-lead` to be defined and line-height must be set with it.*

Each heading can be customized with their own variables on document root or children:

- '`--h[1,2,3,4,5,6]-added-lead`'
- '`--h[1,2,3,4,5,6]-line-span`'

For defining `--added-lead` and setting line-height, there are basically two options:

```css
:root {
	/* For both options, define variable on a parent: */
	--added-lead: .25;

	/* OPTION 1 (safer): */
	line-height: calc(1 + var(--added-lead));
}

/* Opt. 1 requires line-height to be reset for children when `--added-lead` is changed: */
main {
	--added-lead: .6;
	line-height: calc(1 + var(--added-lead));
}

/* OPTION 2 (seems less safe, but this way new line-height does not have to be set for children): */
:not(:where(h1,h2,h3,h4,h5,h6)) {
	line-height: calc(1 + var(--added-lead));
}

/* Opt. 2 will update line-height without the need to set it again: */
main { --added-lead: .6; }
```
