---
title: WIP
description: Works in progress.
layout: no
---

# WIP

<PostList posts={[...posts, {title: 'Svelte Layout Reset', path: '/reset'}]} />

<script>
	import PostList from '/src/libs/PostList.svelte';

	export let posts;
</script>

<script context="module">
	import listPosts from '../../libs/utils/sortPosts.js';

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
				//posts: listPosts(posts)([[`metadata.date`, 0], `title`])
				posts: sortPosts(posts)
			},
		};
	};
</script>

<style>
h1, h1 ~ :global(*) {
	margin-inline: var(--view-inline);
}
</style>
