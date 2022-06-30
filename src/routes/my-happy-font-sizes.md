---
title: My Happy Font Sizes
description: "Clamped font sizes I prefer for body text on different breakpoints."
date: ["2022-06-24", "2022-06-30"]
set: ["code"]
---

# My Happy Font Sizes

For this site I've tried (and trying) to implement my personal preference for body text `font-size`, from smaller to big viewports. I use a normal Iphone 13, a 13″ laptop and a couple of different big screens. I don't own/use any tablet size.

The CSS-variable in question for the body text `font-size` (using my not too serious, but serious [300px * N system](https://johan.land/solo/300px-n-breakpoint-system) for breakpoint widths where approximately 300px is mobile, 600px is landscape mode, 900px is tablet, 1200px is laptop and 1500px is desktop):

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

For code, and elements that should have same size for consistency, I have these rules:

```css
.app-theme-main-content :is(code,kbd,samp,small) {
	font-size: .85em;
}

.app-theme-main-content :not(pre) > :is(code,kbd,samp,small) {
	font-size: 1.85ex;
}
```

The first ruleset basically targets code blocks (with `pre` parent). The second ruleset targets inline `code`. Using system monospace fonts this generally gives a matching result in size:

```css
.app-theme-main-content code {
	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
}
```


—[Johan](/johan)
