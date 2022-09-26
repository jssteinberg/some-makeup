<script>
	import DefaultCss from "/src/libs/DefaultCss.svelte";
	import DevelopCss from "/src/libs/DevelopCss.svelte";
	import FormCss from "/src/libs/FormCss.svelte";
	import SpaceCss from "/src/libs/SpaceCss.svelte";
	import LineHeightCss from "/src/libs/FlowCss.svelte";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();
	const toggleCss = file => {
		css[file] = !css[file];
		dispatch("toggle", true);
	};

	let css = {
		default: true,
		develop: false,
		form: false,
		space: false,
		flow: false,
	};
</script>

<div class="sep" />

<div class="container">
	{#each Object.keys(css) as file}
		<label>
			<input
				type="checkbox"
				checked={css[file] || false}
				on:click={() => toggleCss(file)}
			/>
			{file === "lineHeight" ? "line-height" : file}.css
		</label>
	{/each}
</div>

{#if css.default} <DefaultCss /> {/if}
{#if css.develop} <DevelopCss /> {/if}
{#if css.form} <FormCss /> {/if}
{#if css.space} <SpaceCss /> {/if}
{#if css.flow} <LineHeightCss /> {/if}

<style>
	*,
	::before,
	::after {
		box-sizing: border-box;
	}

	.container {
		color-scheme: var(--color-scheme);
		margin-block: 0.5em;
		padding-inline-start: var(--view-inline);
		padding-inline-end: 1rem;

		display: flex;
		flex-wrap: nowrap;
		gap: 0.5rem;
		overflow-x: auto;

		position: sticky;
		top: 0.5rem;
		z-index: 1;
	}

	label {
		--_a: 0.9;
		background: var(--bg);
		border-radius: 0.5rem;
		border: 1px solid var(--sep-color);
		box-shadow: inset 0 0 1em 1px var(--sep-color);
		color: inherit;
		cursor: pointer;
		line-height: 1;
		padding: 0.5em 1em;
		white-space: nowrap;
		opacity: var(--_a);
		transition: all 0.25s;
	}

	label:hover,
	label:focus-within {
		--_a: 1;
	}

	input {
		margin: 0;
	}

	.sep {
		border-top: 1px solid;
	}
</style>
