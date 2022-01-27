<script>
	import Logo from "./Logo.svelte";
	import MetaTags from "./MetaTags.svelte";

	export let title = "Knut";
	export let metaTitle;
	export let lang;
	export let description;
	export let author;
	export let tags;
	//export let date;
	export let set = [];

	$: langAttr = lang ?? set?.includes("nb") ? "nb" : undefined;
</script>

<MetaTags data={
	{
		title,
		metaTitle,
		author,
		keywords: tags,
		description: description ?? (langAttr && langAttr === 'nb' ?
				`Et innlegg på bokmål om ${metaTitle || title}.` :
				`A post about ${metaTitle || title}.`),
	}
} />

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
			--h1-min-font-size: 2rem;
		}
	}

	@media (min-width: 1500px) {
		article.typography {
			--font-size: 1.125rem;
		}
	}

	article.typography :global(h1) {
		text-transform: none;
	}

	article.typography :global(h1) {
		/* Bigger size, same leading */
		--internal-h-added-lead: .2;
		--internal-h-line-height: calc(
			1 +
			var(--h1-added-lead, var(--internal-h-added-lead))
		);
		font-size: calc(
			var(--h1-min-font-size, 1em)
			* (1 + var(--added-lead, .6)) /
			var(--internal-h-line-height)
		);
		line-height: var(--internal-h-line-height);
	}
</style>
