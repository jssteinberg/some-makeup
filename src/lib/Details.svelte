<!-- Use:
<Details title="More" open>
	<span slot="summary">More</span>
	<p>
		<a href="/wip">WIP</a>
	</p>
</Details>
-->
<script>
	export let title;
	export let open;
</script>

<details {open} class="details-component">
	<summary {title}>
		<slot name="summary" />
	</summary>

	<slot />
</details>

<style lang="postcss">
	details {
		margin-block: max(2em, 1.5 * var(--space, 1em));
		padding-inline-end: var(--space, 1em);
		padding-block-end: var(--space, 1em);
	}

	summary {
		display: inline-block;
		min-height: var(--TOUCH-TARGET-SIZE, 48px);
		max-width: 100%;
		position: sticky;
		top: 0;

		box-shadow: inset 1px -1px;
		outline: none;
	}

	summary > :global(:last-child) {
		padding-inline-end: 1em;
	}

	summary:focus-visible {
		box-shadow: inset 0 0 0 1px;
	}

	:where(details[open]) summary {
		box-shadow: inset 1px 1px;
	}

	details[open] {
		box-shadow: inset -1px -1px;
	}

	/* Summary icon */

	summary::-webkit-details-marker {
		display: none;
	}

	summary::before {
		content: "+";
		display: inline-block;
		line-height: var(--TOUCH-TARGET-SIZE, 48px);
		min-width: var(--TOUCH-TARGET-SIZE, 48px);
		max-width: max-content;
		text-align: center;
	}

	details[open] summary::before {
		transform: rotate(45deg);
	}

	/* Details content */

	:where(summary) + :global(:where(*)) {
		margin-block-start: var(--space, 1em);
	}
</style>
