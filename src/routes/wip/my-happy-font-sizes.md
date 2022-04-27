---
title: My Happy Font-Sizes
---

# My Happy Font-Sizes

For this site I've tries to implement my personal preferences for font-sizes across devices (note I don't own/use a tablet).

The CSS-variable in question (using [300px * N system](https://johan.land/solo/300px-n-breakpoint-system) for breakpoint)

```css
:root {
	--font-size: clamp(
		1rem, 4.8vw, 1.3rem
	);
}

@media (min-width: 900px) {
	:root {
		--font-size: clamp(1rem, .25rem + 0.875vw, 1.12em);
	}
}
```
