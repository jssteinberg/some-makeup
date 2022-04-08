---
title: Johan Sebergsen Steinberg
lang: nb
set: ["typography"]
---

# Johan Sebergsen Steinberg

Johan is currently working as a senior engineer, coding React, Next.js, CSS and HTML---making it usable and accessible---and sometimes designing in Figma, and; always thinking about pleasing, minimalistic, optimized and ethical web products. *Previously worked with Svelte, and still loves and uses it after work.*

<PostList {posts} />

<script context="module">
	const markdownFiles = import.meta.globEager(`./*.md`);
	const getSlug = (path) => path.replace(/.*\/([^/]*)\..*$/, "$1");

	export const load = async ({ url }) => {
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
	};
</script>

<script>
	import PostList from "/src/libs/PostList.svelte";
	export let posts;
</script>
