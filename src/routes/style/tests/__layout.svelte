<script>
	import ContainCss from "/src/libs/ContainCss.svelte";
	import IntuitiveCss from "/src/libs/IntuitiveCss.svelte";
	import SpaceCss from "/src/libs/SpaceCss.svelte";
	import LineHeightCss from "/src/libs/LineHeightCss.svelte";

	let contain = true;
	let intuitive = true;
	let space = true;
	let lineHeight = true;
</script>

{#if contain} <ContainCss /> {/if}
{#if intuitive} <IntuitiveCss /> {/if}
{#if space} <SpaceCss /> {/if}
{#if lineHeight} <lineHeightCss /> {/if}

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
		<button on:click={() => {intuitive = !intuitive}}>
			{#if intuitive}
				(On)
			{:else}
				(Off)
			{/if}
			intuitive.css
		</button>
		<button on:click={() => {space = !space}}>
			{#if space}
				(On)
			{:else}
				(Off)
			{/if}
			space.css
		</button>
		<button on:click={() => {lineHeight = !lineHeight}}>
			{#if lineHeight}
				(On)
			{:else}
				(Off)
			{/if}
			line-height.css
		</button>
	</p>

	<hr>

	<slot />
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
		--padding-inline: calc(1 * var(--view-inline));
		border-left: var(--padding-inline) solid yellow;
		border-right: var(--padding-inline) solid yellow;
		content: '';
		position: absolute;
		inset: calc(-1 * var(--space, 1rem)) calc(-1 * var(--padding-inline));
		z-index: -1;
		opacity: .125;
	}
</style>
