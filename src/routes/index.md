---
title: some.makeup
description: makeup style for life
layout: no
---

<div class="wrapper">

# _some_**.**[makeup-style](/style)

</div>

<style>
	.wrapper {
		font-size: clamp(var(--font-size) + .125rem, min(5vw,5.5vh), 2.25rem);

		padding-inline-start: var(--body-gap-inline);
		padding-inline-end: var(--body-gap-inline);

		display: grid;
		grid-template-columns: min(100%, var(--base-width));
		justify-content: center;
	}

	h1 strong::after {
		content: '';
		display: block;
	}

	/* Touch target class */
	a {
		display: inline-flex;
		align-items: center;
		flex-wrap: wrap;

		min-height: var(--TOUCH-TARGET-MIN-SIZE);
		min-width: var(--TOUCH-TARGET-MIN-SIZE);
	}
</style>

<!--
<PostList {posts} biggerTitles />

<script>
	import PostList from '/src/libs/PostList.svelte';
	export let posts;
</script>

<script context="module">
	export const load = async ({ fetch }) => {
		try {
			const response = await fetch('/index-posts-by-curry.json');
			const posts = await response.json();

			return { props: { posts } };
		} catch (error) {
			console.error(`Error in load function for /: ${error}`);
			return { props: { posts: [] }}
		}
	};
</script>
-->
