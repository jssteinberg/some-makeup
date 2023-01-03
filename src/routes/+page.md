---
title: some.makeup
description: "Makeup for the web and tools."
layout: no
---

<Index>
{#each posts as post}
	<p>
		{#if post.meta?.date}<small><time>{post.meta.date[0]}</time></small>{/if}
		<a href={post.path} lang={
			post.meta?.lang
				? post.meta.lang
				: undefined
		}>
			<span>{@html post.meta.title}</span>
		</a>
	</p>
{/each}
</Index>

<script>
	import Index from "./Index.svelte"
	export let data;
	const posts = data?.posts;
</script>
