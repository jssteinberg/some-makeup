<script context="module">
	import { getPostsFromFiles } from "$libs/utils/index.js";

	const markdownFiles = import.meta.glob("./*.md", { eager: true });
	const excludeFiles = ["index"];

	export const load = async ({ url }) => {
		const posts = getPostsFromFiles(markdownFiles, url).filter(
			item => !excludeFiles.includes(item.title)
		);

		return {
			props: {
				posts,
			},
		};
	};
</script>

<script>
	import PostList from "$libs/PostList.svelte";

	export let posts;
</script>

<h1>WIP</h1>

<PostList {posts} />

<style>
	h1,
	h1 ~ :global(*) {
		margin-inline: var(--view-inline);
	}
</style>
