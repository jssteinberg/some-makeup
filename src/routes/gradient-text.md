---
title: 'Gradient CSS Text:<br aria-hidden="true"> Overused Yet?'
metaTitle: 'Gradient CSS Text: Overused Yet?'
date: ['2022-01-26']
set: ['logo', 'typography']
tags: ['css']
---

# Gradient CSS Text:<br aria-hidden> **Overused Yet?**

The CSS code for gradient text has become too simple---**everyone's doing it!**

Look at it! Fancy CSS has never been this simple:


```css
h1.gradient-text {
	background-image:
		linear-gradient(
			90deg, var(--from), var(--to)
		);
	color: transparent;
	-webkit-background-clip: text;
}
```

---

*__Developer note.__ Safari does not like block elements within an element with gradient text.*

<GradientPostStyle />

<script>
	import GradientPostStyle from '/src/libs/GradientPostStyle.svelte';
</script>

<style>
	:global(main.gradient-text article) {
		--article-width: min(100%, calc(var(--base-width) + 20rem + 5vw));
		width: var(--article-width);
		margin: 0 auto;
	}

	:global(main.gradient-text) h1 {
		padding-inline-start: var(--body-gap, 5vw);
		padding-inline-end: var(--body-gap, 5vw);
		width: var(--article-width);
	}

	:global(main.gradient-text article > :where(:not(hr):not(h1))) {
		margin-inline-start: 0;
		margin-inline-end: 0;
	}

	:global(.token.function),
	:global(.token.property) {
		--from: hsla(var(--gradient-base-hue, 180), 75%, 75%, 1);
		background-clip: text;
		background-image: linear-gradient(90deg, var(--from), var(--fg, white));
		color: transparent;
		font-weight: bold;
	}
</style>
