---
title: some.makeup
description: "Some makeup for the web."
layout: no
---

<script context="module">
	import { getPostsFromFiles } from '$libs/utils/index.js';

	const markdownFiles = import.meta.globEager(`./*.md`);
	const excludeFiles = ["index"];

	export const hydrate = false;

	export const load = async ({ url }) => {
		return {
			props: {
				posts: getPostsFromFiles(markdownFiles, url).filter(
					item => !excludeFiles.includes(item.title),
				),
			},
		};
	};
</script>

<script>
	export let posts = [];
</script>

<div class="wrapper">

# _some_**.**[makeup-style](/style)

{#if posts}
	<ul>
		{#each posts as post}
			<li>
				{#if post.metadata?.date}
					<small>
						<time>{post.metadata.date[0]}</time>
					</small>
				{/if}

				<a
					href={post.path}
					sveltekit:prefetch
					lang={post.metadata?.lang ? post.metadata.lang : undefined}
				>
					<span>{@html post.title}</span>
				</a>
			</li>
		{/each}
	</ul>
{/if}

</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: var(--content-width);
		padding-inline-start: var(--view-inline);
		padding-inline-end: var(--view-inline);
		text-rendering: optimizeLegibility;

		/* Adjust font-size */
		font-size: clamp(
			var(--font-size) + .125rem,
			var(--font-size) + min(1vw,1.5vh),
			2.125rem
		);
	}

	h1 strong::after {
		content: '';
		display: block;
	}

	a {
		display: inline-flex;
		flex-wrap: wrap;

		min-height: var(--TOUCH-TARGET-SIZE, 48px);
		min-width: var(--TOUCH-TARGET-SIZE, 48px);
	}

	ul {
		display: grid;
		gap: 1em;
		list-style: none;
		padding: 0;
	}

	time {
		display: block;
	}
</style>
