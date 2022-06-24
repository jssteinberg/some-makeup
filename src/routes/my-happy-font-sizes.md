---
title: My Happy Font Sizes
description: "Clamped font sizes I prefer for body text on different breakpoints."
date: ["2022-06-24"]
set: ["code"]
---

# My Happy Font Sizes

For this site I've tried (and trying) to implement my personal preference for body text `font-size`, from smaller to big viewports. I use a normal Iphone 13, a 13″ laptop and a couple of different big screens. I don't own/use any tablet size.

The CSS-variable in question for the body text `font-size` (using my not too serious, but serious [300px * N system](https://johan.land/solo/300px-n-breakpoint-system) for breakpoints):

```css
:root {
	--font-size: clamp(
		1rem,
		4.8vw,
		1.3rem
	);
}

@media (min-width: 900px) {
	:root {
		--font-size: clamp(
			1.1rem,
			1.125rem + 1vw,
			1.12em
		);
	}
}
```

—[Johan](/johan)
