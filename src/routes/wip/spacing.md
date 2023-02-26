---
title: "Unraveling Space Size: For Web Design & Development"
---

# Unraveling Space Size: For Web Design & Development

Spacing in web design refers to the old art of typographic spacing, and later spacing of graphical design---which usually is based on the aesthetics of typography. An important part of typographic spacing is the rhythm.

When deciding on spacing in web design you have to start with a base space. This space should be relative to your main font-sizes, either: 1rem (text-base), 1em of your body text (text-body) or 1 leading of one of the former.

If you choose `rem` your good to go, for `em`, you can't actually use `em` but use a variable e.g.:

```
:root {
	--text-body: clamp(
		1rem, 4.8vw, 1.3rem
	);
}

.prose {
	font-size: var(--text-body);
}
```

---

```
:root {
	/* --space - base space */
	--space: var(--text-body, 1rem);
	/* --space-inline - inline space for elements like `ol, ul`.
	 * You want a dedicated global var for this and not `calc()`-it incase `--space` changes. */
	--space-inline: calc(1.5 * var(--space));
	/* x-axis space for gap between viewport edge and content */
	--space-edge-x: 4.125vw;
}

@media (min-width: 600px) {
	:root {
		--space-edge-x: 8.25vw;
	}
}

@media (min-width: 1500px) {
	:root {
		--space-edge-x: 12.5vw;
	}
}
```
