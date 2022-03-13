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

<div lang={langAttr} class={`content ${set.includes(`typography`) ? `typography` : ``}`}>
	<slot />

	<style>
		@import '/src/contain.css';
		@import '/src/improve.css';
		@import '/src/space.css';

		small { font-size: 0.8em; }
		code { font-size: var(--code-inline-font-size); }
		pre code { font-size: 0.875em; }
	</style>
</div>

<style>
	.content {
		padding-inline-start: var(--body-gap-inline);
		padding-inline-end: var(--body-gap-inline);

		display: grid;
		grid-template-columns: min(100%, var(--base-width));
		justify-content: center;
	}

	.content.typography {
		--RELATIVE-LINE-HEIGHT: calc(var(--font-size) * var(--RLH));
		--font-size: clamp(1rem, 1rem + 0.55vw, 1.25rem);
		--spacer: var(--RELATIVE-LINE-HEIGHT);

		text-rendering: optimizeLegibility;
		text-align: start;
		font-size: var(--font-size);
		font-weight: 300;
	}

	@media (min-width: 1200px) {
		.content.typography {
			--font-size: 1.1rem;
		}
	}

	@media (min-width: 1500px) {
		.content.typography {
			--font-size: 1.125rem;
		}
	}
</style>
