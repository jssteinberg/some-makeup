<script>
	export let title = '';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<article>
	<slot />
</article>

<style>
	article {
		--spacer: var(--RLH);
		text-rendering: optimizeLegibility;
		text-align: start;
		font-size: 1.125rem;
	}

	article :global(h1) {
		font-family: inherit;
		text-transform: none;
	}
</style>
