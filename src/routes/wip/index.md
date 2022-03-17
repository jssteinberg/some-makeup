---
title: WIP
set: ['logo']
---

# WIP

<Sep />

<PostList posts={[...posts, {title: 'Svelte Layout Reset', path: '/reset'}]} />

<AccentHue {hue} />

<script>
	import AccentHue from '/src/libs/AccentHue.svelte';
	import PostList from '/src/libs/PostList.svelte';
	import Sep from '/src/libs/Sep.svelte';

	export let posts;

	let hue = 358.7;
</script>

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
