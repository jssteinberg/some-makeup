# Notes on styling forms

This is not needed in Safari anymore (still on Ios?):

```css
::file-selector-button, [type="button" i], [type="reset" i], [type="submit" i], button {
	/* Fix inability to style buttons (Ios and Safari). */
	-webkit-appearance: button; }
```

See https://moderncss.dev for how to style form related elements.
