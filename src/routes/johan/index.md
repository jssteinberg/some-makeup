---
title: Johan Sebergsen Steinberg
lang: nb
---

# Johan Sebergsen Steinberg

<PostList {posts} />

<script context="module">
	const markdownFiles = import.meta.globEager(`./*.md`);
	const getSlug = (path) => path.replace(/.*\/([^/]*)\..*$/, "$1");

	export async function load({ url }) {
		const data = Object.keys(markdownFiles)
			.map((path) => {
				return {
					filePath: path,
					slug: getSlug(path),
					path: `${url.pathname}/${getSlug(path)}`,
					title: markdownFiles[path].metadata?.title || getSlug(path),
					metadata: markdownFiles[path].metadata,
				};
			})
			.filter((item) => !['index'].includes(item.title));

		return {
			props: {
				posts: data,
			},
		};
	}
</script>

<script>
	import PostList from "../../libs/PostList.svelte";
	export let posts;
</script>
