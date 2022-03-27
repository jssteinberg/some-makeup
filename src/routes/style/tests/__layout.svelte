<script>
	import IntuitiveCss from "/src/libs/IntuitiveCss.svelte";
	import DxCss from "/src/libs/DxCss.svelte";
	import SpaceCss from "/src/libs/SpaceCss.svelte";
	import LineHeightCss from "/src/libs/LineHeightCss.svelte";
	import Nav from "/src/libs/Nav.svelte";

	const toggleCss = (file) => { css[file] = !css[file] };

	let css = {
		fix: true,
		dx: false,
		space: false,
		lineHeight: false,
	};
</script>
	
<hr>
<Nav ariaLabel="Test scenarios">
	<a href="/style/tests/overflow" sveltekit:prefetch>overflow</a>
	<a href="/style/tests/line-height" sveltekit:prefetch>line-height</a>
	<a href="/style/tests/media" sveltekit:prefetch>media</a>
</Nav>

<div class="wrapper">
	<p class="button-container">
		{#each Object.keys(css) as file}
			<button on:click={toggleCss(file)} class={`${css[file] ? `on` : `off`}`}>
				<span class="status">
					{#if css[file]} (On) {:else} (Off) {/if}
				</span>
				<span class="file">
					{
						file === 'lineHeight' ?
							'line-height'
							: file
					}.css
				</span>
			</button>
		{/each}
	</p>

	<slot />
</div>

{#if css.fix} <IntuitiveCss /> {/if}
{#if css.dx} <DxCss /> {/if}
{#if css.space} <SpaceCss /> {/if}
{#if css.lineHeight} <LineHeightCss /> {/if}

<style>
	.wrapper {
		max-width: var(--content-width);
		margin: 0 var(--view-inline);

		position: relative;
	}

	.wrapper::after {
		--padding-inline: 1px;
		border-right: var(--padding-inline) dashed;
		content: '';
		position: absolute;
		inset: calc(-1 * var(--space, 1rem)) calc(-1 * var(--padding-inline));
		z-index: -1;
		opacity: 1;
	}

	.button-container {
		box-sizing: border-box;
		margin: 0 0 1em;

		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1px;

		position: sticky;
		top: 1px;
		z-index: 1;
	}

	button {
		background: var(--bg);
		box-shadow: inset 0 0 0 1px var(--fg);
		border: none;
		border-radius: none;
		box-sizing: border-box;
		color: inherit;
		cursor: pointer;
		font-family: inherit;
		font-size: inherit;
		padding: 1em;
		text-align: start;
		opacity: .9;
	}

	button.on {
		background: var(--fg);
		color: var(--bg);
	}

	button .status {
		min-width: 5ch;
	}

	@media (min-width: 75ch) {
		.button-container {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.wrapper :global(h2) {
		box-shadow: inset 0 -1ex var(--sep-color);
	}
</style>
