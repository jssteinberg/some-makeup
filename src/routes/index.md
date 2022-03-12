---
title: Some Makeup
description: Makeup front and life.
layout: no
---

<div class="wrapper">

# Some <span aria-hidden aria-label="Makeup">Makeup</span>

- [Style](#)

</div>

<style>
	.wrapper {
		font-size: max(3rem, min(5.25vh,7.5vw));

		padding-inline-start: var(--body-gap-inline);
		padding-inline-end: var(--body-gap-inline);

		display: grid;
		grid-template-columns: min(100%, var(--base-width) + 10vw);
		justify-content: center;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	h1 [aria-hidden] {
		display: block;
		-webkit-text-stroke: 1px var(--fg);
		color: var(--bg);
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
