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

<details {open}>
	<summary {title}>
		<span class="summary-content">
			<slot name="summary" />
		</span>
	</summary>

	<slot />
</details>

<style>
	details {
		margin-block-end: calc(2 * var(--space, 1em));
		padding-inline-end: 1em;
	}

	summary {
		display: inline-flex;
		align-items: center;
		flex-wrap: wrap;

		min-height: var(--TOUCH-TARGET-SIZE, 48px);

		box-shadow: inset 1px -1px;
		justify-content: center;
	}

	summary::before {
		content: "+";

		display: inline-grid;
		place-items: center;

		min-height: var(--TOUCH-TARGET-SIZE, 48px);
		min-width: var(--TOUCH-TARGET-SIZE, 48px);

		font-size: 1rem;
	}

	summary::-webkit-details-marker { display: none; }

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

	summary ~ :global(:not(hr)) {
		background-image: none;
		box-shadow: none;
		border-right: none;
		border-left: none;
	}

	summary ~ :global(:last-child) {
		padding-block-end: var(--space, 1em);
	}
</style>
