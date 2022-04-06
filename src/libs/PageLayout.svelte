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

<div lang={langAttr} class={`
	content
	${set.includes(`typography`) ? `content--typography` : ``}
	${set.includes(`sans`) ? `content--sans` : ``}
`}>
	<slot />
</div>

<style>
	.content {
		--space: calc(var(--font-size) * (1 + var(--added-lead, .6)));
		--added-lead: .6;
		--mono-font: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
		--cfs: var(--sans);

		font-family: var(--cfs);
		font-size: var(--font-size);

		padding-inline-start: var(--view-inline);
		padding-inline-end: var(--view-inline);

		display: flex;
		flex-direction: column;
	}

	.content--typography { text-rendering: optimizeLegibility; }
	.content--sans :global(h1 ~ :not(pre)) {
		font-family: var(--cfs);
	}

	:where(.content) > :global(:first-child) {
		--block-start: var(--space);
	}

	:where(.content) > :global(:not(h1,hr)) {
		--block-start: 0;
	}

	:where(.content) > :global(:not(h1,pre)) {
		width: var(--content-width);
	}

	:where(.content) :global(h1) {
		font-family: var(--cfs);
	}

	:where(.content) :global(:is(h1, h2)) {
		font-weight: 700; font-weight: 800; font-weight: 900;
	}

	:where(.content) :global(:is(ol, ul)) {
		padding-inline-start: var(--space);
	}

	:where(.content) :global(ul) {
		list-style: square;
	}

	:where(.content) :global(:is(em,cite) :is(em,cite)) {
		font-style: normal;
	}

	:where(.content) :global(a) {
		text-underline-offset:     .15em;
		text-decoration-thickness: .5ex;
		text-decoration-color: var(--sep-color);
	}

	:where(.content) :global(blockquote) {
		margin: 0;
		font-style: italic;
		font-variation-settings: "ital" 1;
	}

	/* Code */

	:where(.content) :global(:is(code,kbd,samp)) {
		font-size: .9em;
	}

	:where(.content) :global(:where(pre)) {
		hyphens: none;
		overflow: auto;
		tab-size: 2;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		word-wrap: normal;

		box-shadow: inset -1px 1px var(--sep-color);
		padding: var(--space) var(--space) var(--space) 0;
	}

	:where(.content) :global(:not(pre) > code) {
		background: var(--sep-color);
		border-radius: .4em;
		box-shadow:
			0 -.2em var(--sep-color),
			0  .1em var(--sep-color);
		padding: 0 .2em;
		white-space: normal;
	}
</style>
