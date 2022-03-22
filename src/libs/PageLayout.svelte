<script>
	import MetaTags from './MetaTags.svelte';
	import ContainCss from './ContainCss.svelte';
	import IntuitiveCss from './IntuitiveCss.svelte';
	import SpaceCss from './SpaceCss.svelte';
	import LineHeightCss from './LineHeightCss.svelte';

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

<ContainCss />
<IntuitiveCss />
<SpaceCss />
<LineHeightCss />

<div lang={langAttr} class={`content ${set.includes(`typography`) ? `typography` : ``}`}>
	<slot />
</div>

<style>
	.content {
		--space: calc(var(--font-size) * (1 + var(--added-lead, .6)));
		--added-lead: .6;

		font-family: var(--sans);
		font-size: var(--font-size);

		padding-inline-start: var(--view-inline);
		padding-inline-end: var(--view-inline);

		display: grid;
		grid-template-columns: var(--content-width);
		justify-content: center;
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

	.content :global(h1) {
		font-weight: 700; font-weight: 800; font-weight: 900;
	}

	.content :global(:is(p,li)) {
		font-weight: 300;
	}

	.content :global(code) { font-size: .85em; }

	.content :global(small),
	.content :global(pre code) {
		font-size: 0.85em;
	}

	.content :global(:is(ol, ul)) {
		padding-inline-start: var(--space);
	}

	:where(.content) :global(pre) {
		hyphens: none;
		overflow: auto;
		tab-size: 2;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		word-wrap: normal;

		border-radius: 0 0 .5rem 0;
		box-shadow: 1px 1px var(--sep-color);
		padding: 0 var(--space) var(--space) 0;
	}

	.content :global(:not(pre) > code) {
		white-space: normal;
	}
</style>
