<script>
	export let hr;
	export let sep;
</script>

{#if hr}
	<hr />
{:else if sep}
	<div role="separator" />
{:else}
	<span aria-hidden="true" />
{/if}

<style>
	::before,
	::after {
		all: unset;
	}

	* {
		--block-start-size: calc(4 * var(--spacer, 1rem));
		--sep-size: calc(2 * var(--spacer, 1rem));

		all: unset;
		background: var(--sep-color);
		display: block;
		margin: calc(2 * var(--block-start-size)) auto var(--block-start-size);
		padding: 0;
		width: var(--decor-width);
		height: var(--sep-size);
	}
</style>
