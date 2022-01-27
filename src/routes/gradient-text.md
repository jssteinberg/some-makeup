---
title: 'Gradient CSS Text:<br aria-hidden="true"> Overused Yet?'
metaTitle: 'Gradient CSS Text: Overused Yet?'
date: ['2022-01-26']
set: ['logo', 'typography']
---

# Gradient CSS Text:<br aria-hidden> **Overused Yet?**

The CSS code for gradient text has become too simple---**everyone's doing it!**

Look at it! Fancy CSS has never been this simple:


```css
h1.gradient-text {
	background-image:
		linear-gradient(
			90deg, teal, skyblue
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
	:global(:root) {
		--base-width: 55rem;
	}

	:global(.token.function),
	:global(.token.property) {
		font-weight: bold;
	}
</style>
