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

<div>
	<slot />

	<style>
		@import '/src/containing.css';
	</style>
</div>
