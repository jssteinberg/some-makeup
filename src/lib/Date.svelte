<script>
	export let date;
</script>

{#if date}
	<p class="date-info">
		<em>
			{#if date.length > 1}
				(Up)date ({date[date.length - 1]}) {date[0]}
			{:else}
				Date {date[0]}
			{/if}
		</em>
	</p>
{/if}

<style lang="postcss">
	.date-info {
		/* text-align: end; */
		padding-inline: var(--space-vx);
	}
</style>
