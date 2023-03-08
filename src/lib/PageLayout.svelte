<script>
	import MetaData from "./MetaData.svelte";
	import DefaultCss from "./DefaultCss.svelte";
	import SpaceCss from "./SpaceCss.svelte";
	import LineHeightCss from "./FlowCss.svelte";
	// import PrismCss from "./PrismCss.svelte";
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

<MetaData
	{title}
	{metaTitle}
	{author}
	keywords={tags}
	description={description ??
		(langAttr && langAttr === "nb"
			? `Et innlegg om ${metaTitle || title}.`
			: `A post about ${metaTitle || title}.`)}
/>

<DefaultCss />
<SpaceCss />
<LineHeightCss />

<!-- {#if set.includes("code")} -->
<!-- 	<PrismCss /> -->
<!-- {/if} -->

<Date {date} />

<div
	lang={langAttr}
	class={`
		app-theme
		app-theme-main-content
		${set.includes(`sans`) ? `sans-theme` : ``}
		${set.includes(`mixed`) ? `` : `typography`}
		${set.includes(`book`) ? `prose-book` : ``}
	`}
>
	<slot />
</div>
