---
title: 'Gradient Text CSS:<br aria-hidden="true"> Overused Yet?'
metaTitle: 'Gradient Text CSS: Overused Yet?'
date: ['2022-01-26']
set: ['logo', 'typography']
tags: ['css']
---

# Gradient Text CSS:<br aria-hidden> **Overused Yet?**

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

<style>
	pre :global(.token.selector) {
		color: inherit;
	}

	pre :global(.token.function),
	pre :global(.token.property) {
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
