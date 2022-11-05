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
		<slot name="summary" />
	</summary>

	<slot />
</details>

<style>
	details {
		margin-block-start: max(2em, 1.5 * var(--space, 1em));
		margin-block-end: max(2em, 1.5 * var(--space, 1em));
		padding-inline-end: var(--space, 1em);
		padding-block-end: var(--space, 1em);
	}

	summary {
		display: flex; /* For Ios Safari v14 */
		display: inline-flex;
		align-items: center;
		min-height: var(--TOUCH-TARGET-SIZE, 48px);
		padding-inline-end: 1em;

		box-shadow: inset 1px -1px;
		outline: none;

		position: sticky;
		top: 0;
	}

	summary:focus-visible {
		box-shadow: inset 0 0 0 1px;
	}

	summary::before {
		content: "+";

		display: grid;
		place-items: center;

		min-height: var(--TOUCH-TARGET-SIZE, 48px);
		min-width: var(--TOUCH-TARGET-SIZE, 48px);
		max-width: max-content;

		font-size: 1rem;
	}

	summary::-webkit-details-marker {
		display: none;
	}

	summary > :global(*) {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		max-width: max-content;
	}

	:where(details[open]) summary {
		box-shadow: inset 1px 1px;
	}

	details[open] summary::before {
		transform: rotate(45deg);
	}

	details[open] {
		box-shadow: inset -1px -1px;
	}

	/* Details content */

	:where(summary) + :global(:where(*)) {
		margin-block-start: var(--space, 1em);
	}
</style>
