<!-- <Hr --hr-width="var(--content-width)" /> -->
<hr />

<style>
	* {
		--_content-width: var(--hr-width, var(--content-width, 100%));
		--_base-size: max(var(--TOUCH-TARGET-SIZE) / 3, var(--space, 1em));
		--_size: max(var(--TOUCH-TARGET-SIZE), 1.5 * var(--space, 1em));

		/* Some rules are normalizing `<hr>`. */
		background: transparent;
		border: none;
		box-shadow: inset 0 0 0 1px var(--hr-fg);
		color: inherit;
		display: block;
		width: var(--_size);
		height: var(--_size);
		margin: calc(2 * var(--space, 1em))
			calc(var(--_content-width) * 0.5 - var(--_base-size) * 0.5);
		transform: rotate(45deg);
	}
</style>
