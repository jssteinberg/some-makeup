---
title: Develop CSS
description: "develop.css defines additional CSS rulesets for more convenient and intuitive styling."
set: ["code", "book"]
---

Develop CSS with additional CSS rulesets for more convenient and intuitive styling. For HTML documents (usually), all selectors has a variant preceded with `html` for convenience, to override certain cases of `:where()`.

### Convenient/Intuitive Styling

Background and mask images are not repeated.

```css
*, html *, ::before, html ::before, ::after, html ::after {
	background-repeat: no-repeat;
	mask-repeat: no-repeat;
}
```

---

1. Inherit border-radius.
2. Inherit vertical alignment.

```css
::before, html ::before, ::after, html ::after {
	border-radius: inherit;
	vertical-align: inherit;
}
```

### Reduce Motion

First seen in [A Modern CSS Reset][amcr],
remove animations and transitions when user prefers it.

```css
@media (prefers-reduced-motion: reduce) {
	*, html *, ::before, html ::before, ::after, html ::after {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
		scroll-behavior: auto !important;
	}
}
```

<!--
### Notes

- Think about what CSS is/can be used to, and in what order from basic to advanced sites/apps: typography, layouts, usability, accessibility, more typography and graphical design, animations, 3D rendering.

- If all needed elements where to be normalized across browsers, that would cause a lot of unused code for most apps and sites. Rather style those elements when they are used a lot. Perhaps it can be code-split. It obviously results in more focused and lean CSS when only what really needs correction is styled.
-->

[amcr]: https://piccalil.li/blog/a-modern-css-reset/
[cc]: https://cube.fyi/
[cr]: https://github.com/jensimmons/cssremedy
[mn]: https://github.com/sindresorhus/modern-normalize
[ms]: https://some.makeup/style
[nc]: https://github.com/necolas/normalize.css/
[op]: https://open-props.style/
[sc]: https://github.com/csstools/sanitize.css

<script>
	import Details from "$lib/Details.svelte"
</script>
