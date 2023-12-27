---
title: 'CSS for gradient text: Overused yet?'
description: The CSS code for gradient text has become too simple.
date: ['2022-01-26']
tags: ['css']
set: ['code']
---

# CSS for gradient text:<br aria-hidden> Overused yet?

The CSS code for gradient text has become too simple---**everyone's doing it!** Look at it! Fancy CSS has never been this simple:

```css
h1.gradient-text {
	--to: orange;
	--from: purple;
	background-image: linear-gradient(-165deg, var(--to), var(--from) 75%, var(--from));
	color: transparent;
	-webkit-background-clip: text;
}
```

---

## Developer notes

- Safari does not like block elements within an element with gradient text.
- Safari will not break inline gradient elements to new line.

<style>
	strong {
		text-transform: uppercase;
	}

	h1 {
		--to: orange;
		--from: purple;
		background-image: linear-gradient(-165deg, var(--to), var(--from) 75%, var(--from));
		color: transparent;
		background-clip: text;
	}

	@media (min-width: 900px) { h1 { --h1-line-span: 3; } }
	@media (min-width: 1200px) { h1 { --h1-line-span: 4; } }
</style>
