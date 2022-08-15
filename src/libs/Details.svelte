<!-- Use:
<Details title="More" open>
	<span slot="summary">More</span>
	<p>
		<a href="/wip" sveltekit:prefetch>WIP</a>
	</p>
</Details>
-->
<script>
	export let title;
	export let open;
</script>

<details {open} class="details-component">
	<summary {title}>
		<span class="summary-content">
			<slot name="summary" />
		</span>
	</summary>

	<slot />
</details>

<style>
	details {
		margin-block: max(2em, 1.5 * var(--space, 1em));
		padding-inline-end: var(--space, 1em);
		padding-block-end: var(--space, 1em);
	}

	summary {
		display: inline-flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;

		min-height: var(--TOUCH-TARGET-SIZE, 48px);

		box-shadow: inset 1px -1px;
		outline: none;

		position: sticky;
		top: 0;
		background: linear-gradient(
			hsl(var(--bg-h) var(--bg-s) var(--bg-l) / 0.75) 25%,
			transparent
		);
		text-shadow: 1px 1px 2px var(--bg);
	}

	summary:focus-visible {
		box-shadow: inset 0 0 0 1px;
	}

	summary::before {
		content: "+";

		display: inline-grid;
		place-items: center;

		min-height: var(--TOUCH-TARGET-SIZE, 48px);
		min-width: var(--TOUCH-TARGET-SIZE, 48px);

		font-size: 1rem;
	}

	summary::-webkit-details-marker {
		display: none;
	}

	details[open] summary {
		box-shadow: inset 1px 1px;
	}

	details[open] summary::before {
		transform: rotate(45deg);
	}

	details[open] {
		box-shadow: inset -1px -1px;
	}

	.summary-content {
		display: inline-flex;
	}

	.summary-content > :global(*) {
		margin-block: 0;
	}

	.summary-content > :global(:last-child) {
		padding-inline-end: 1em;
	}

	/* Details content */

	:where(summary) + :global(:where(*)) {
		margin-block-start: var(--space, 1em);
	}
</style>
