<script>
	import ContainCss from "/src/libs/ContainCss.svelte";
	let contain = true;
</script>

{#if contain} <ContainCss /> {/if}

<div class="wrapper">
	<h1>Tests</h1>
	
	<p>
	<button on:click={() => {contain = !contain}}>
		{#if contain}
			(On)
		{:else}
			(Off)
		{/if}
		contain.css
	</button>
	</p>
	
	<pre>
<code>Asuperlonglineofcodetoseeifitwraps. Itisdifficultformetomakeupenoughcontentforthistest! Ihavetowriteevenmore?? Howwideisthiscontainer?</code>
	</pre>
</div>

<style>
	.wrapper {
		width: min(
			100vw - 2 * var(--view-inline),
			var(--max-content-width)
		);
		margin: 0 auto;

		position: relative;
	}

	.wrapper::after {
		--padding-inline: calc(.125 * var(--view-inline));
		border-left: var(--padding-inline) dashed yellow;
		border-right: var(--padding-inline) dashed yellow;
		content: '';
		position: absolute;
		inset: calc(-1 * var(--space, 1rem)) calc(-1 * var(--padding-inline));
		z-index: -1;
		opacity: .5;
	}
</style>
