<h1>WIP</h1>

<PostList {posts} />

<script>
	import PostList from '$libs/PostList.svelte';

	export let posts;
	console.log(posts)
</script>

<script context="module">
	const markdownFiles = import.meta.globEager(`./*.md`);
	const getSlug = (path) => path.replace(/.*\/([^/]*)\..*$/, "$1");

	export const load = async ({ url }) => {
		const posts = Object.keys(markdownFiles)
			.map((path) => {
				return {
					filePath: path,
					slug: getSlug(path),
					path: `${url.pathname}/${getSlug(path)}`,
					title: markdownFiles[path].metadata?.title || getSlug(path).replace(/-/, ' '),
					metadata: markdownFiles[path].metadata,
				};
			})
			.filter((item) => !['index'].includes(item.title));

		return {
			props: {
				posts: [
					...posts,
					{ title: 'Svelte Layout Reset', path: '/reset' },
				]
					.sort((a, b) => a.title.localeCompare(b.title))
					.sort((a, b) => {
						const aDate = new Date(a.metadata?.date ? a.metadata.date[0] : `1990-01-01`);
						const bDate = new Date(b.metadata?.date ? b.metadata.date[0] : `1990-01-01`);

						return bDate - aDate;
					}),
			},
		};
	};
</script>

<style>
h1, h1 ~ :global(*) {
	margin-inline: var(--view-inline);
}
</style>
