---
title: Some
description: "Makeup for the web and tools."
layout: no
---

<div class="wrapper">

# *Some*

*Makeup for the web and tools.*

CSS---[makeup-style](/style)

Palette---[makeup darkness 1.](/darkness-1)

<Hr --hr-width="100%" />

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
		font-size: clamp(
			var(--font-size) + .125rem,
			var(--font-size) + min(.75vw,1.5vh),
			1.75rem
		);
	}

	h1, h1 + p em {
		text-transform: lowercase;
	}

	a {
		display: block;
		min-height: var(--TOUCH-TARGET-SIZE, 48px);
		min-width: var(--TOUCH-TARGET-SIZE, 48px);
	}
</style>

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
	import Hr from "$libs/Hr.svelte"
	export let posts = [];
</script>
