---
title: WIP
set: ['logo']
---

# WIP

<PostList posts={[...posts, {title: 'Svelte Layout Reset', path: '/reset'}]} />

<script context="module">
	import listPosts from '../../libs/utils/getPosts.js';

	const markdownFiles = import.meta.globEager(`./*.md`);
	const getSlug = (path) => path.replace(/.*\/([^/]*)\..*$/, "$1");

	export const load = async ({ url }) => {
		const data = Object.keys(markdownFiles)
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
				posts: listPosts(data)([[`metadata.date`, 0], `title`])
			},
		};
	};
</script>

<script>
	import PostList from "../../libs/PostList.svelte";
	export let posts;
</script>
