---
title: Visually Hidden HTML
description: How to hide HTML elements visually with CSS.
set: ["code"]
---

# CSS for Visually Hidden HTML

To visually hide HTML elements with CSS, this is still the most comprehensive post I've found on this, adressing several cases not discussed anywhere else: https://kittygiraudel.com/2016/10/13/css-hide-and-seek/

Some details of the rules are further explored here, where it's also noted that `:active` must be considered in Safari: https://www.tpgi.com/the-anatomy-of-visually-hidden/

The latter made me realize that separating into two variants, like `.visually-hidden` and `.visually-hidden-focusable`, is not wise since a visually hidden element should show if it can have focus and has focus---for not screen reader users.

Another functionality I'm testing is to be able set a container to visually-hidden, but not when any children has focus using `:has()`.

Then, also incorporating a technique using aria attributes instead of classes used in [sanitize.css](https://github.com/csstools/sanitize.css/blob/092d0d85922bfa72d28e9e8d25d80a5437c8df44/sanitize.css#L344-L356), it results in the following snippet:

```css
.visually-hidden:not(:focus):not(:active),
[aria-hidden="false" i][hidden]:not(:focus):not(:active) {
  position: absolute !important;
  white-space: nowrap !important;
  padding: 0 !important;
  margin: -1px !important;
  border: 0 !important;
  overflow: hidden !important;
  width: 1px !important;
  height: 1px !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  clip-path: inset(50%) !important;
  -webkit-clip-path: inset(50%) !important;
}

[aria-hidden="false" i][hidden] {
  display: initial;
}
```

## How does it work

Let's start at the top. Some of the rules are quite obvious.

- `position: absolute` to remove the element from the document flow so it does not affect layout.
- `white-space: nowrap` to stop the element content from wrapping to another line.
- `padding: 0` for no padding.
- `margin: -1px` *for no margin?!*
- `border: 0` for no border, *but why not use `border: none`?*
- `overflow: hidden` to hide any content 'overflowing' the element's bounds, together with
- `width` and `height: 1px`, *but why not use `0`?*
- `clip` and `clip-path`*?*

## Related links

- https://en.wikipedia.org/wiki/Chess_annotation_symbols
