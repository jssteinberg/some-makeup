<!-- Example

```
<Hr --hr-width="100%" />
``` -->

<hr />

<style>
	hr {
		--_content-width: min(100%, var(--hr-width, var(--content-width, 100%)));
		--_size: max(var(--TOUCH-TARGET-SIZE), 1.5 * var(--space, 1em));

		all: unset;
		box-shadow: inset 0 0 0 1px var(--hr-fg, currentColor);
		display: block;
		width: var(--_size);
		height: var(--_size);
		margin: calc(4 * var(--space, 1em))
			calc(var(--_content-width) * 0.5 - var(--_size) * 0.5);
		transform: rotate(45deg);
	}
</style>
