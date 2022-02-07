<script>
	export let title = '';
	export let lang;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<article class="read" {lang}>
	<slot />
</article>

<style>
	article {
		--ROOT-LINE-HEIGHT: calc(1 + var(--added-lead, .6));
		--RELATIVE-LINE-HEIGHT: calc(var(--font-size) * var(--ROOT-LINE-HEIGHT));

		--font-size: 1.125rem;
		--spacer: var(--RELATIVE-LINE-HEIGHT);

		text-rendering: optimizeLegibility;
		text-align: start;
		font-size: var(--font-size);
		font-weight: 300;
	}

	@media (min-width: 1200px) {
		article {
			--font-size: 1rem;
		}
	}

	article :global(h1) {
		text-align: inherit;
		font-family: inherit;
		text-transform: none;

		/* Bigger size, same leading */
		--h1-line-height: 1.25;
		font-size: calc(
			1em * (1 + var(--added-lead, .6))
			/ var(--h1-line-height)
		);
		line-height: var(--h1-line-height);
	}
</style>
