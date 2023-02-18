---
title: "Unraveling Space & Size: For Web Design & Development"
---

# Unraveling Space: For Web Design & Development

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
