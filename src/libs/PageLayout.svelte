<script>
	import MetaTags from "./MetaData.svelte";
	import ContainCss from "./DefaultCss.svelte";
	import IntuitiveCss from "./DeformCss.svelte";
	import SpaceCss from "./SpaceCss.svelte";
	import LineHeightCss from "./FlowCss.svelte";
	import PrismCss from "./PrismCss.svelte";
	import Date from "./Date.svelte";

	export let title = "A knot";
	export let metaTitle;
	export let lang;
	export let description;
	export let author;
	export let tags;
	export let date;
	export let set = [];

	$: langAttr = lang ?? set?.includes("nb") ? "nb" : undefined;
</script>

<MetaTags
	{title}
	{metaTitle}
	{author}
	keywords={tags}
	description={description ??
		(langAttr && langAttr === "nb"
			? `Et innlegg om ${metaTitle || title}.`
			: `A post about ${metaTitle || title}.`)}
/>

<ContainCss />
<IntuitiveCss />
<SpaceCss />
<LineHeightCss />

{#if set.includes("code")}
	<PrismCss />
{/if}

<Date {date} />

<div
	lang={langAttr}
	class={`
	app-theme
	app-theme-main-content
	${set.includes(`sans`) ? `sans-theme` : ``}
	${set.includes(`mixed`) ? `` : `typography`}
`}
>
	<slot />
</div>
