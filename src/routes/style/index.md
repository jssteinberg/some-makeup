---
title: Makeup Style
description: So you want to makeup some styling?
---

# Makeup Style

So you want to makeup some styling?

These CSS files fixes default browser CSS (no IE though), for narrow viewports first, and provides the intuitive default CSS for styling in general and typographic style.

---

```css
@import 'makeup-style/src/contain.css';
```

CSS to prevent text and content from overflowing and prevents elements from disrupting the default vertical rhythm by affecting line-height.

*This file is pretty much mandatory for avoiding many styling gotchas. The other files are optional.*

---

```css
@import 'makeup-style/src/improve.css';
```

Improved CSS for basic elements, excluding form elements. Includes option for defining variable `--mono-font` for setting mono-font-family.

---

```css
@import 'makeup-style/src/space.css';
```

CSS that sets consistent spacing between the needed block-level elements. Spacing can be adjusted and controlled with variable `--space` (defaults -- by falling back -- to `1rem`).

---

```css
@import 'makeup-style/src/line-height.css';
```

CSS that sets line-height for equal leading of headings and body text. (...variables for `--added-lead`, headings added-lead and headings line-span...)
