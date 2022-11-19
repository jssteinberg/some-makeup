---
title: Some
description: "Makeup for the web and tools."
layout: no
---

<div
	class="wrapper"
	data-sveltekit-prefetch
>

# *Some*

*Makeup for the web and tools.*

CSS library---[makeup-style](/style)

Code & terminal colors---[nightcool](/nightcool)

<Hr --hr-width="100%" />

{#each posts as post}
	<p>
		{#if post.meta?.date}<small><time>{post.meta.date[0]}</time></small>{/if}—<a href={post.path} lang={
			post.meta?.lang
				? post.meta.lang
				: undefined
		}>
			<span>{@html post.meta.title}</span>
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

<script>
	import Hr from "$libs/Hr.svelte"
	export let data;
	const posts = data?.posts;
</script>
