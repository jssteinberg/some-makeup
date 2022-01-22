<script>
	export let hr;
</script>

{#if hr}
	<hr />
{:else}
	<div role="separator" />
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
		background: currentColor;
		display: block;
		margin: var(--block-start-size) auto;
		padding: 0;
		width: var(--decor-width);
		height: var(--sep-size);
	}
</style>
