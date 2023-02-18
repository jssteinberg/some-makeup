<!-- Example

```
<Hr --hr-width="100%" />
``` -->

<hr />

<style lang="postcss">
	hr {
		--_content-width: min(100%, var(--hr-width, var(--content-width, 100%)));
		--_size: 3rem;

		all: unset;
		box-shadow: inset 0 0 0 1px var(--hr-fg, currentColor);
		display: block;
		width: var(--hr-size, var(--_size));
		height: var(--hr-size, var(--_size));
		margin: calc(4 * var(--space, 1em))
			calc(var(--_content-width) * 0.5 - var(--hr-size, var(--_size)) * 0.5);
		transform: rotate(45deg);
		/* animate to spin once after 1s delay */
		animation: spin 2s 1s forwards;
	}

	@keyframes spin {
		0% {
			transform: rotate(45deg);
		}
		100% {
			transform: rotate(405deg);
		}
	}
</style>
