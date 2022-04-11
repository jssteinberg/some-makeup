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

<p class="container">
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
</p>

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
		margin: 0 0 1em;

		display: flex;
		gap: 0.5rem;

		position: sticky;
		top: 1px;
		z-index: 1;
	}

	label {
		background: white;
		border-radius: .125rem;
		color: black;
		cursor: pointer;
		line-height: 1;
		opacity: 0.9;
		padding: .5em 1em;
	}

	label:hover, label:focus-within {
		opacity: 1;
	}

	input {
		margin: 0;
	}
</style>
