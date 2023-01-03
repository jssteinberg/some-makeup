<script>
	export let data;
	const posts = data?.posts;
</script>

<h1>WIP</h1>

<ol>
	{#each posts as post}
		<li class={post.meta?.title ? `` : `knot`}>
			<p>
				{#if post.meta?.date}<small><time>{post.meta.date[0]}</time></small><br
					/>{/if}
				<a href={post.path} lang={post.meta?.lang ? post.meta.lang : undefined}>
					<span>{@html post.meta?.title || `knot`}</span>
				</a>
			</p>
		</li>
	{/each}
</ol>

<style>
	h1,
	h1 ~ :global(*) {
		margin-inline-start: var(--view-inline);
		margin-inline-end: var(--view-inline);
	}

	ol {
		counter-reset: reversed(no);
		padding: 0;
		list-style: none;
	}

	li.knot a::after {
		counter-increment: no;
		content: counter(no);
	}
</style>
