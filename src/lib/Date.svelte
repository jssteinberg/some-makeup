<script>
	let classes = "";

	export { classes as class };
	export let date;
	export let small = false;

	$: isoDates = date ? date.map(d => new Date(d).toISOString()) : undefined;
</script>

<slot />

{#if date}
	<ol class={classes || undefined}>
		<li>
			<svelte:element this={small ? "small" : "span"}>
				<time datetime={isoDates[0]}>{isoDates[0].split("T")[0]}</time>
			</svelte:element>
		</li>
		{#if date.length > 1}
			<li>
				<svelte:element this={small ? "small" : "span"}>
					<time datetime={isoDates[date.length - 1]}
						>{isoDates[date.length - 1].split("T")[0]}</time
					>
				</svelte:element>
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
