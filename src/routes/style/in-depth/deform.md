---
title: Deform CSS
description: "deform.css normalizes styles for buttons and inputs across browsers."
set: ["code"]
---

Some rulesets are not always needed, but are still more than usual for more custom designs and when coding lots of CSS. In a way browser default styling needs to be deformed to be formed. These rulesets does deforming by normalizing needed elements and eases forming new style.

### More Consistent Cross-Browser Styling

1. Remove confusing body margin when doing styling.
3. Remove the margin on form related elements (Safari).

```css
body,
button, input, select, textarea {
	margin: 0;
}
```

---

Set `search` to textfield.

```css
input[type="search" i] {
	-webkit-appearance: textfield;
}
```

---

Remove search cancel button.

```css
input[type="search"]::-webkit-search-cancel-button {
	-webkit-appearance: none;
}
```

---

1. Fix inability to style buttons (Ios and Safari).
2. Cross-browser variable/`none` `border` .
3. Cross-browser variable/`unset` `box-shadow`.
4. Cross-browser variable/`inherit` `line-height`.

```css
button, ::file-selector-button, [type="button" i], [type="reset" i], [type="submit" i] {
	-webkit-appearance: button;
	border: none;
	box-shadow: unset;
	line-height: inherit;
}
```

---

1. Consistent, usable `border-radius`.
2. Inherit font-family.

```css
::file-selector-button, button, input, textarea, select {
	border-radius: .125em;
	font-family: inherit;
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
	import Details from "$libs/Details.svelte"
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
