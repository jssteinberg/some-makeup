<script>
	import MetaTags from './MetaData.svelte';
	import ContainCss from './IntuitiveCss.svelte';

	export let title = 'A knot';
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
	{title}
	{metaTitle}
	{author}
	keywords={tags}
	description={
		description ??
		(langAttr && langAttr === 'nb'
			? `Et innlegg om ${metaTitle || title}.`
			: `A post about ${metaTitle || title}.`)
	}
/>

<slot />

<ContainCss />
