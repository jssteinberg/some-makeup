---
title: My Happy Font Sizes
description: "Clamped font sizes I prefer for body text on different breakpoints."
date: ["2022-06-24", "2022-06-30", "2023-01-15", "2023-03-03"]
set: ["code"]
---

# My Happy Font Sizes

For this site I've tried (and trying) to implement my personal preference for body text `font-size`, from smaller to big viewports. I use a normal Iphone 13, a 13″ laptop and a couple of different big screens. I don't own/use any tablet size.

The CSS-variable in question for the body text `font-size` (using my not too serious, but serious [300px\*N breakpoint system](https://johan.land/solo/300px-n-breakpoint-system) where approximately widths from 300px is mobile, 600px is landscape mode, 900px is tablet, 1200px is laptop and 1500px is desktop):

```css
:root {
	--text-body: clamp(
		1rem,
		4.8vw,
		1.3rem
	);
}

@media (min-width: 900px) {
	:root {
		--text-body: clamp(
			1.1rem,
			.125rem + 1vw,
			1.12rem
		);
	}
}

@media (min-width: 1500px) {
	:root {
		--text-body: clamp(
			1.1rem,
			.125rem + 1vw,
			1.2rem
		);
	}
}
```

For code, and elements that should have same size for consistency, I have these rules:

```css
.app-theme-main-content :where(
	code,
	kbd,
	pre,
	samp,
	small
) {
	font-size: .8125em;
}

.app-theme-main-content pre code {
	font-size: 1em;
}
```

Using system monospace fonts this generally gives a matching result in size:

```css
.app-theme-main-content code {
	font-family:
		ui-monospace,
		SFMono-Regular,
		Menlo,
		Monaco,
		Consolas,
		Liberation Mono,
		Courier New,
		monospace;
}
```

—[Johan](//johan.land)
