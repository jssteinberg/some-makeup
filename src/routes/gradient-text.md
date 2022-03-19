---
title: 'Gradient CSS Text:<br aria-hidden="true"> Overused Yet?'
metaTitle: 'Gradient CSS Text: Overused Yet?'
date: ['2022-01-26']
set: ['logo', 'typography']
tags: ['css']
layout: no
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
