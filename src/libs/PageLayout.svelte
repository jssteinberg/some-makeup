<script>
	import MetaTags from './MetaTags.svelte';

	export let title = 'Knut';
	export let metaTitle;
	export let lang;
	export let description;
	export let author;
	export let tags;
	//export let date;
	export let set = [];

	$: langAttr = lang ?? set?.includes('nb') ? 'nb' : undefined;
</script>

<MetaTags
	data={{
		title,
		metaTitle,
		author,
		keywords: tags,
		description:
			description ??
			(langAttr && langAttr === 'nb'
				? `Et innlegg på bokmål om ${metaTitle || title}.`
				: `A post about ${metaTitle || title}.`)
	}}
/>

<article lang={langAttr} class={set.includes('typography') ? 'typography post' : 'post'}>
	<slot />
</article>

<style>
	article {
		padding-inline-start: var(--body-gap-inline);
		padding-inline-end: var(--body-gap-inline);

		display: grid;
		grid-template-columns: min(100%, var(--base-width));
		justify-content: center;
	}

	article.typography {
		--RELATIVE-LINE-HEIGHT: calc(var(--font-size) * var(--RLH));
		--font-size: clamp(1rem, 1rem + 0.55vw, 1.25rem);
		--spacer: var(--RELATIVE-LINE-HEIGHT);

		text-rendering: optimizeLegibility;
		text-align: start;
		font-size: var(--font-size);
		font-weight: 300;
	}

	@media (min-width: 1200px) {
		article.typography {
			--font-size: 1.1rem;
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
</style>
