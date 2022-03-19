<script>
	import ContainCss from "/src/libs/ContainCss.svelte";
	let contain = false;
</script>

{#if contain} <ContainCss /> {/if}

<div class="wrapper">
	<h1>Test</h1>
	
	<p>
	<button on:click={() => {contain = !contain}}>
		contain.css
		{#if contain}
			(yes)
		{:else}
			(no)
		{/if}
	</button>
	</p>
	
	<pre>
<code>Asuperlonglineofcodetoseeifitwraps. Itisdifficultformetomakeupenoughcontentforthistest! Ihavetowriteevenmore?? Howwideisthiscontainer?</code>
	</pre>
</div>

<style>
	.wrapper {
		padding: var(--space, 1rem) var(--body-gap-inline);
		width: var(--base-width);
		max-width: 100%;

		position: relative;
	}

	.wrapper::after {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--fg);
		z-index: -1;
		opacity: .1;
	}
</style>
