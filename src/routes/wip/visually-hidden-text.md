This is still the most up-to-date post I find on this, adressing several cases not discussed anywhere else: https://kittygiraudel.com/2016/10/13/css-hide-and-seek/

This result in the following snippet:

```css
/* Accessible display on visually hidden only elements. */

[aria-hidden="false" i][hidden] {
  display: initial;
}

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
```
