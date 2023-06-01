<script>
	export let date;
	$: isoDates = date ? date.map(d => new Date(d).toISOString()) : undefined;
</script>

<slot />

{#if date}
	<ol>
		<li>
			<time datetime={isoDates[0]}>{isoDates[0].split("T")[0]}</time>
		</li>
		{#if date.length > 1}
			<li>
				<time datetime={isoDates[date.length - 1]}
					>{isoDates[date.length - 1].split("T")[0]}</time
				>
			</li>
		{/if}
	</ol>
{/if}

<style lang="postcss">
	ol {
		display: flex;
		flow: row wrap;
		font-style: italic;
		list-style: none;
		margin-block-end: 0;
		padding-inline: var(--space-edge-x);
	}

	li:not(:last-child)::after {
		content: ";\00a0";
	}
</style>
