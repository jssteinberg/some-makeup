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

	<style lang="scss">
		@use '../static/contain.css';
		@use '../static/intuitive.css';
		@use '../static/space.css';
		@use '../static/line-height.css';
		@use './prism.css';

		main {
			--space: calc(var(--font-size) * (1 + var(--added-lead, .6)));
			--added-lead: .6;
		}

		code {
			font-size: var(--code-inline-font-size);
		}

		small,
		pre code {
			font-size: 0.85em;
		}

		ol, ul {
			padding-inline-start: var(--space);
		}

		pre {
			border-radius: 0 0 .5rem 0;
			box-shadow: 1px 1px var(--sep-color);
			padding: 0 calc(.5 * var(--space)) var(--space) 0;
		}
	</style>
</div>

<style>
	.content {
		font-family: var(--sans);
		font-size: var(--font-size);

		padding-inline-start: var(--body-gap-inline);
		padding-inline-end: var(--body-gap-inline);

		display: grid;
		grid-template-columns: min(100%, var(--base-width));
		justify-content: center;
	}

	.content > :global(:not(:where(h1,h2,h3,h4,h5,h6,pre,kbd,samp))) {
		font-weight: 300;
	}

	.content.typography {
		text-rendering: optimizeLegibility;
	}

	@media (min-width: 1200px) {
		.content {
			--font-size: 1.1rem;
		}
	}

	@media (min-width: 1500px) {
		.content {
			--font-size: 1.125rem;
		}
	}
</style>
