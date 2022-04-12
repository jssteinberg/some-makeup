<script>
	import IntuitiveCss from '/src/libs/IntuitiveCss.svelte';
	import DxCss from '/src/libs/DxCss.svelte';
	import SpaceCss from '/src/libs/SpaceCss.svelte';
	import LineHeightCss from '/src/libs/FlowCss.svelte';

	const toggleCss = (file) => {
		css[file] = !css[file];
	};

	let css = {
		fix: true,
		do: false,
		space: false,
		flow: false
	};
</script>

<div class="sep" />
<div class="container">
	{#each Object.keys(css) as file}
		<label>
			<input
				type="checkbox"
				id="scales"
				name="scales"
				checked={css[file] || undefined}
				on:click={() => toggleCss(file)}
			/>
			{file === 'lineHeight' ? 'line-height' : file}.css
		</label>
	{/each}
</div>

{#if css.fix} <IntuitiveCss /> {/if}
{#if css.do} <DxCss /> {/if}
{#if css.space} <SpaceCss /> {/if}
{#if css.flow} <LineHeightCss /> {/if}

<style>
	*,
	::before,
	::after {
		box-sizing: border-box;
	}

	.container {
		margin-block: .5em;
		padding-inline: var(--view-inline);

		display: flex;
		flex-wrap: nowrap;
		gap: 0.5rem;
		overflow-x: auto;

		position: sticky;
		top: .5rem;
		z-index: 1;
	}

	label {
		--_a: .825;
		background: hsla(0 0% 0%/var(--_a));
		border-radius: .5rem;
		border: 1px solid var(--sep-color);
		box-shadow: inset 0 0 1em 1px var(--sep-color);
		color: hsla(0 0% 100%/var(--_a));
		cursor: pointer;
		line-height: 1;
		padding: .5em 1em;
		white-space: nowrap;
	}

	label:hover, label:focus-within {
		--_a: 1;
	}

	input {
		margin: 0;
	}

	.sep {
		border-top: 1px solid;
	}
</style>
