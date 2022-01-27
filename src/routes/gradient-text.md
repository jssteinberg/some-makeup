---
title: 'Gradient Text:<br aria-hidden="true"> Overused Yet?'
metaTitle: 'Gradient Text: Overused Yet?'
date: ['2022-01-26']
set: ['logo', 'typography']
---

# Gradient Text:<br aria-hidden> **Overused Yet?**

The CSS code for gradient text has become too simple---**everyone's doing it!**

Look at it! Fancy CSS has never been this simple:


```css
h1.gradient-text {
	background-image: linear-gradient(
		90deg, teal, skyblue);
	color: transparent;
	-webkit-background-clip: text;
}
```

---

*__Developer note.__ Safari does not like block elements within an element with gradient text.*

<style>
	h1 {
		/* Gradient text. This is a problem: */
		background-image: linear-gradient(
			90deg, teal, skyblue);
		color: transparent;
		background-clip: text;
	}

	h1 {
		--h1-min-font-size: 2em;

		padding: calc(2 * var(--spacer, 1rem)) 0;
		position: relative;
		text-align: start;
	}

	h1::before {
		content: '';
		display: block;
		position: absolute;
		top: 0; left: 0; right: 0;
		height: .1em;
		background-image: linear-gradient(
			90deg,
			teal,
			skyblue
		);
	}

	@media (min-width: 900px) {
		h1 {
			--h1-min-font-size: 3em;
		}
	}

	@media (min-width: 1500px) {
		h1 {
			font-size: 4em;
			--h1-added-lead: 0;
			--h1-min-font-size: 4em;
		}
	}

	strong {
		text-transform: uppercase;
	}

	:not(h1) strong {
		font-weight: 800; font-weight: 900;
		background-image: linear-gradient(
			90deg, white, lightblue);
		color: transparent;
		-webkit-background-clip: text;
	}

	:global(:root) {
		--base-width: 55rem;
	}

	:global(.token.function),
	:global(.token.property) {
		font-weight: bold;
	}
</style>
