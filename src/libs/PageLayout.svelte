<script>
	import MetaTags from './MetaTags.svelte';
	import ContainCss from './IntuitiveCss.svelte';
	import IntuitiveCss from './DxCss.svelte';
	import SpaceCss from './SpaceCss.svelte';
	import LineHeightCss from './LineHeightCss.svelte';
	import PrismCss from './PrismCss.svelte';

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

{#if set.includes('code')}
	<PrismCss />
{/if}

<ContainCss />
<IntuitiveCss />
<SpaceCss />
<LineHeightCss />

<div lang={langAttr} class={`content ${set.includes(`typography`) ? `typography` : ``}`}>
	<slot />
</div>

<style>
	.content {
		/* --space: calc(var(--font-size) * (1 + var(--added-lead, .6))); */
		--added-lead: .6;
		--mono-font: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace; /* Mono elements' fonts are set to --mono-font */

		font-size: var(--font-size);

		padding-inline-start: var(--view-inline);
		padding-inline-end: var(--view-inline);

		display: grid;
		grid-template-columns: var(--content-width);
		justify-content: start;
	}

	.content > :global(:not(hr)) {
		--block-start: 0;
	}

	.content.typography {
		text-rendering: optimizeLegibility;
	}

	.content :global(h1 ~ :not(pre)) {
		font-family: var(--sans);
	}

	.content > :global(:first-child) {
		--block-start: var(--space);
	}

	.content :global(h2) {
		font-weight: 700; font-weight: 800; font-weight: 900;
	}

	.content :global(:is(p,li)) {
		font-weight: 300;
	}

	.content :global(:is(ol, ul)) {
		padding-inline-start: var(--space);
	}

	.content :global(ul) {
		list-style: square;
	}

	/* Code */

	:where(.content) :global(:is(code,kbd,samp)) {
		font-size: 1.625ex;
	}

	:where(.content) :global(pre code) {
		font-size: 1.625ex;
	}

	:where(.content) :global(pre) {
		hyphens: none;
		overflow: auto;
		tab-size: 2;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		word-wrap: normal;

		box-shadow: inset -1px -1px var(--sep-color);
		padding: 0 var(--space) var(--space) 0;
	}

	.content :global(:not(pre) > code) {
		white-space: normal;
	}
</style>
