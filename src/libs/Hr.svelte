<!-- <Hr --hr-width="var(--content-width)" /> -->
<hr />

<style>
	* {
		--_content-width: var(--hr-width, var(--content-width, 100%));

		/* Some rules are normalizing `<hr>`. */
		background: transparent;
		border: none;
		box-shadow: inset 0 0 0 1px var(--hr-fg);
		color: inherit;
		display: block;
		width: calc(1.5 * var(--space, 1em));
		height: calc(1.5 * var(--space, 1em));
		margin: calc(2 * var(--space, 1em))
			calc(var(--_content-width) * 0.5 - var(--space, 1em) * 0.5);
		transform: rotate(45deg);
	}
</style>
