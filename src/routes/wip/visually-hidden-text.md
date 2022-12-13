---
title: Visually Hidden HTML
description: How to hide HTML elements visually with CSS.
---

# Visually Hidden HTML

To visually hide HTML elements with CSS, this is still the most comprehensive post I've found on this, adressing several cases not discussed anywhere else: https://kittygiraudel.com/2016/10/13/css-hide-and-seek/

Then, also incorporating a technique with attributes used in [sanitize.css](https://github.com/csstools/sanitize.css/blob/092d0d85922bfa72d28e9e8d25d80a5437c8df44/sanitize.css#L344-L356), it results in the following snippet:

```css
.visually-hidden,
.visually-hidden-focusable:not(:focus),
[aria-hidden="false" i][hidden]:not(:focus) {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  overflow: hidden !important;
  margin: -1px !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
}

[aria-hidden="false" i][hidden] {
  display: initial;
}
```

<PrismCss />

<script>
  import PrismCss from '/src/lib/PrismCss.svelte';
</script>
