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
		isolation: isolate;
		margin-block: max(2em, 1.5 * var(--space, 1em));
		padding-inline-end: var(--space, 1em);
		padding-block-end: var(--space, 1em);
		position: relative;
	}

	summary {
		display: inline-block;
		min-height: var(--touch-target-size, 48px);
		max-width: 100%;
		position: sticky;
		top: 0;
		z-index: 1;

		box-shadow: inset 1px -1px;
		outline: none;
	}

	summary > :global(:last-child) {
		padding-inline-end: 1em;
	}

	summary:focus-visible {
		box-shadow: inset 0 0 0 2px;
	}

	:where(details[open]) summary {
		margin-block-end: var(--space, 1em);
	}

	:where(details[open]) summary:not(:focus-visible) {
		box-shadow: unset;
		color: var(--bg);
	}

	:where(details[open]) summary:not(:focus-visible)::after {
		content: "";
		position: absolute;
		inset: 0;
		z-index: -1;
		background: var(--fg);
		opacity: 0.925;
	}

	details[open] {
		box-shadow: inset -2px -2px;
	}

	/* Summary icon */

	summary::-webkit-details-marker {
		display: none;
	}

	summary::before {
		content: "+";
		display: inline-block;
		line-height: var(--touch-target-size, 48px);
		min-width: var(--touch-target-size, 48px);
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
