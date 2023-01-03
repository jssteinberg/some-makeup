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

<style>
	.date-info {
		/* text-align: end; */
		padding-inline-start: var(--v-inline-gap);
		padding-inline-end: var(--v-inline-gap);
	}
</style>
