---
title: Develop CSS
description: "develop.css defines additional CSS rulesets for more convenient and intuitive styling."
set: ["code"]
---

Develop CSS with additional CSS rulesets for more convenient and intuitive styling.

### Convenient/Intuitive Styling

Background and mask images are not repeated.

```css
*, ::before, ::after {
	background-repeat: no-repeat;
	mask-repeat: no-repeat;
}
```

---

1. Inherit border-radius.
2. Inherit vertical alignment.

```css
::before, ::after {
	border-radius: inherit;
	vertical-align: inherit;
}
```

### Reduce Motion

Remove animations and transitions when user prefers it.

```css
@media (prefers-reduced-motion: reduce) {
	*, ::before, ::after {
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

<style>
	/* Book style stuff */

	p {
		margin-block-end: 0;
	}

	ol, ul,
	li > p,
	p + p {
		margin-block-start: 0;
	}

	p + p {
		text-indent: var(--space);
	}
</style>
