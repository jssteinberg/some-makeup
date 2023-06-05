---
title: some.makeup
description: "Makeup for the web and tools."
layout: no
---

<Index>
	{#each posts as post}
		<div>
			<Date date={post.meta?.date} small />

			<p>
				<a href={post.path} lang={
					post.meta?.lang
						? post.meta.lang
						: undefined
				}>
					{@html post.meta.title}
				</a>
			</p>
		</div>
	{/each}
</Index>

<script>
	import Index from "./_Index.svelte"
	import Date from "$lib/Date.svelte"
	export let data;
	const posts = data?.posts;
</script>

<style lang="postcss">
	p {
		margin: 0;
		padding-inline: var(--space-edge-x);
	}
</style>
