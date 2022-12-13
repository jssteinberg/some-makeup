<script>
	export let data;
	const posts = data?.posts;
</script>

<h1>WIP</h1>

<ol>
	{#each posts as post}
		<li>
			{#if post.meta?.date}<small><time>{post.meta.date[0]}</time></small>{/if}
			<a href={post.path} lang={post.meta?.lang ? post.meta.lang : undefined}>
				<span>{@html post.meta?.title || `knot`}</span>
			</a>
		</li>
	{/each}
</ol>

<style>
	h1,
	h1 ~ :global(*) {
		margin-inline: var(--view-inline);
	}
</style>
