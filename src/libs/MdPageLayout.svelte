<script>
	import Logo from "./Logo.svelte";

	export let title = "Knut";
	export let lang;
	export let date;
	export let set = [];

	$: langAttr = lang ?? set.includes("nb") ? "nb" : "";
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

{#if set.includes('logo')}
	<p>
		<a href="/" sveltekit:prefetch>
			<Logo text={false} />
		</a>
	</p>
{/if}

<article
	lang={langAttr}
	class={set.includes("typography") ? "typography" : undefined}
>
	<slot />
	{#if date}
		<p class="date"><time>{date[0]}</time></p>
	{/if}
</article>

<style>
	article.typography {
		--ROOT-LINE-HEIGHT: calc(1 + var(--added-lead, 0.6));
		--RELATIVE-LINE-HEIGHT: calc(var(--font-size) * var(--ROOT-LINE-HEIGHT));

		--font-size: 1.125rem;
		--spacer: var(--RELATIVE-LINE-HEIGHT);

		text-rendering: optimizeLegibility;
		text-align: start;
		font-size: var(--font-size);
		font-weight: 300;
	}

	@media (min-width: 1200px) {
		article.typography {
			--font-size: 1rem;
		}
	}

	article.typography p.date,
	article.typography :global(h1) {
		font-family: var(--serif);
		text-align: center;
		text-transform: none;
	}

	article.typography :global(h1) {
		/* Bigger size, same leading */
		--h1-line-height: 1.25;
		font-size: calc(1em * (1 + var(--added-lead, 0.6)) / var(--h1-line-height));
		line-height: var(--h1-line-height);
	}

	article.typography :global(:not(h1, h2, h3, h4, h5, h6) strong) {
		color: hsl(var(--fg-h), var(--fg-s), calc(5% + var(--fg-l)));
	}
</style>
