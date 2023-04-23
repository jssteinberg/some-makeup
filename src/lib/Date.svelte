<script>
	export let date;
	$: isoDates = date ? date.map(d => new Date(d).toISOString()) : undefined;
</script>

{#if date}
	<dl>
		{#if date.length > 1}
			<dt>Updated</dt>
			<dd>
				<time datetime={isoDates[date.length - 1]}
					>{isoDates[date.length - 1].split("T")[0]}</time
				>
			</dd>
		{/if}
		<dt>Published</dt>
		<dd>
			<time datetime={isoDates[0]}>{isoDates[0].split("T")[0]}</time>
		</dd>
	</dl>
{/if}

<style lang="postcss">
	dl {
		margin-block-end: 0;
		padding-inline: var(--space-edge-x);
	}

	dl > * {
		display: inline;
		margin: 0;
	}

	dl > :not(:last-child) {
		margin-inline-end: 0.5em;
	}
</style>
