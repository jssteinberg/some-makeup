---
title: Some Makeup
description: Makeup front and life.
layout: no
---

<div class="wrapper">

# _some_**.**makeup

- [style](/style)

</div>

<style>
	.wrapper {
		font-size: max(2rem, min(5.125vh,7.5vw));

		padding-inline-start: var(--body-gap-inline);
		padding-inline-end: var(--body-gap-inline);

		display: grid;
		grid-template-columns: min(100%, var(--base-width));
		justify-content: center;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li::before {
		content: '-';
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
