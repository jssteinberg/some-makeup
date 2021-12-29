---
title: J. Sebergsen Steinberg
lang: nb
---

# J. Sebergsen Steinberg

<ul class="posts">
	{#each posts as post}
	<li>
		<a
			id={post.title.toLowerCase()}
			href={post.path}
			sveltekit:prefetch
			>

			<span class="post-title link">{post.title}</span>

			{#if post.metadata?.date}
				<span class="date">
					<time>{post.metadata.date[0]}</time>
				</span>
			{/if}

		</a>
	</li>
	{/each}
</ul>

<style>
	.posts {
		list-style: none;
		padding: 0;
	}

	.posts a { text-decoration: none; }

	.posts .date {
		display: block;
		font-size: .8em;
	}
</style>

<script context="module">
	const markdownFiles = import.meta.globEager(`./*.md`);
	const getSlug = (path) => path.replace(/.*\/(.*)\..*$/, "$1");

	export async function load({ page }) {
		const data = Object.keys(markdownFiles)
			.map((path) => {
				return {
					filePath: path,
					slug: getSlug(path),
					path: `${page.path}/${getSlug(path)}`,
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
	export let posts;
</script>
