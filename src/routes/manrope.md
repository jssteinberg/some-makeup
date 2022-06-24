---
title: "Manrope <code>@font-face</code>"
metaTitle: Manrope @font-face
description: "A modern sans-serif variable font."
set: ["code"]
date: ["2022-04-20", "2022-06-24"]
---

# Manrope `@font-face`

> A modern sans-serif for everyone.

---[manropefont.com](https://manropefont.com/)

It's open source and is available as a [variable font](https://web.dev/variable-fonts/) (don't use Google Fonts though).

```css
@supports (font-variation-settings: normal) {
	@font-face {
		font-family: "Manrope";
		src:
			url("./Manrope-wght.4.505.woff2") format("woff2 supports variations"),
			url("./Manrope-wght.4.505.woff2") format("woff2-variations");
		font-weight: 100 1000;
		font-stretch: 25% 151%;
		font-style: normal;
		font-display: swap;
	}
}

:root {
	font-family: Manrope, sans-serif;
	font-variation-settings: "wght" 360;
}

h1 {
	font-variation-settings: "wght" 1000;
}
```

Check if you should preload:

```html
<link rel="preload" href="Manrope-wght.4.505.woff2" as="font" type="font/woff2">
```

<style>
	h1 ~ :not(pre),
	h1 {
		font-family: Manrope;
	}

	h1 {
		--h1-line-span: 3;
		--h1-added-lead: .4;
		font-variation-settings:
			'wght' 1000;
	}

	h1 ~ * {
		font-variation-settings:
			'wght' 360;
	}

	@media (min-width: 1200px) {
		h1 {
			--h1-line-span: 5;
		}
	}
</style>

<script>
	import "$libs/manrope/font.css";
</script>
