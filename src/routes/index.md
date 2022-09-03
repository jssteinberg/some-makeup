---
title: some.makeup
description: "Some makeup for the web."
layout: no
---

<script context="module">
	import { getPostsFromFiles } from '$libs/utils/index.js';

	const markdownFiles = import.meta.glob("./*.md", { eager: true });
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

# some.makeup

CSS---[makeup-style](/style)

Palette---[makeup darkness 1.](/darkness-1)

---

{#each posts as post}
	<p>
		{#if post.metadata?.date}
			<small>
				<time>{post.metadata.date[0]}</time>
			</small>
			<br aria-hidden="true">
		{/if}

		<a
			href={post.path}
			sveltekit:prefetch
			lang={post.metadata?.lang ? post.metadata.lang : undefined}
		>
			<span>{@html post.title}</span>
		</a>
	</p>
{/each}

</div>

<style>
	.wrapper {
		padding-inline-start: var(--view-inline);
		padding-inline-end: var(--view-inline);

		/* Adjust font-size */
		/*
		font-size: clamp(
			var(--font-size) + .125rem,
			var(--font-size) + min(1vw,1.5vh),
			2.125rem
		);
		*/
	}

	a {
		display: block;
		min-height: var(--TOUCH-TARGET-SIZE, 48px);
		min-width: var(--TOUCH-TARGET-SIZE, 48px);
	}
</style>
