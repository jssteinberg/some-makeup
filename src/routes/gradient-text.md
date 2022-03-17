---
title: 'Gradient CSS Text:<br aria-hidden="true"> Overused Yet?'
metaTitle: 'Gradient CSS Text: Overused Yet?'
date: ['2022-01-26']
set: ['logo', 'typography']
tags: ['css']
layout: v1
---

# Gradient CSS Text:<br aria-hidden> **Overused Yet?**

The CSS code for gradient text has become too simple---**everyone's doing it!** Look at it! Fancy CSS has never been this simple:

```css
h1.gradient-text {
	background-image: linear-gradient(
		90deg, var(--from), var(--to)
	);
	color: transparent;
	-webkit-background-clip: text;
}
```

---

## Developer notes

- Safari does not like block elements within an element with gradient text.
- Safari will not break inline gradient elements to new line.

<GradientPostStyle />

<script>
	import GradientPostStyle from '/src/libs/GradientPostStyle.svelte';
</script>

<style>
	:global(main[class*="gradient-text"] article) {
		--article-width: min(100%, calc(var(--base-width) + 20rem + 5vw));
	}

	:global(main[class*="gradient-text"]) h1 {
		padding-inline-start: var(--body-gap-inline, 1rem);
		padding-inline-end: var(--body-gap-inline, 1rem);
		width: var(--article-width);
	}

	:global(.token.function),
	:global(.token.property) {
		--from: hsla(var(--gradient-base-hue, 180), 75%, 75%, 1);
		background-clip: text;
		background-image: linear-gradient(90deg, var(--from), var(--fg, white));
		color: transparent;
		font-weight: bold;
	}

	strong {
		font-weight: 800; font-weight: 900;
		text-transform: uppercase;
	}
</style>
