<script>
	import IntuitiveCss from '/src/libs/IntuitiveCss.svelte';
	import DxCss from '/src/libs/DxCss.svelte';
	import SpaceCss from '/src/libs/SpaceCss.svelte';
	import LineHeightCss from '/src/libs/LineHeightCss.svelte';
	import Nav from '/src/libs/Nav.svelte';
	import { afterUpdate } from 'svelte';
	import { page } from '$app/stores';

	const links = [
		{
			label: 'overflow',
			href: '/style/tests/overflow',
		},
		{
			label: 'line-height',
			href: '/style/tests/line-height',
		},
		{
			label: 'media',
			href: '/style/tests/media',
		},
		{
			label: 'inputs',
			href: '/style/tests/inputs',
		},
		{
			label: 'usability',
			href: '/style/tests/usability',
		},
	];
	const toggleCss = (file) => {
		css[file] = !css[file];
	};

	let css = {
		fix: true,
		do: false,
		space: false,
		flow: false,
	};
	let els;
	let scrollY = 0;

	afterUpdate(() => {
		els = document.body.querySelectorAll('#tests section :is(p,h2)');
	});
</script>

{#if css.fix} <IntuitiveCss /> {/if}
{#if css.do} <DxCss /> {/if}
{#if css.space} <SpaceCss /> {/if}
{#if css.flow} <LineHeightCss /> {/if}

<svelte:head>
	<title>
		test {links.find(val => val.href === $page.url.pathname)?.label || `…`}, makeup-style
	</title>
</svelte:head>

<svelte:window bind:scrollY />

{#if els}
	<div aria-hidden="true" id="element-heights">
		<span class="header">px</span>
		{#each els as item}
			<span
				style:transform={
					`translate3d(0, ${item.getBoundingClientRect().top + scrollY}px, 0)`
				}
			>
				{item.offsetHeight}
			</span>
		{/each}
	</div>
{/if}

<Nav {links} ariaLabel="Test-pages" />

<div id="tests" class="wrapper">
	<p class="button-container">
		{#each Object.keys(css) as file}
			<button on:click={() => toggleCss(file)} class={`${css[file] ? `on` : `off`}`}>
				<span class="status">
					{#if css[file]} (On) {:else} (Off) {/if}
				</span>
				<span class="file">
					{file === 'lineHeight' ? 'line-height' : file}.css
				</span>
			</button>
		{/each}
	</p>

	<slot />
</div>

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
		opacity: 0.9;
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
		box-shadow: inset 0 -0.5ex var(--sep-color);
	}

	#element-heights {
		position: absolute;
		top: 0;
	}

	#element-heights::after {
		content: "";
		background: no-repeat top right/1px 100% linear-gradient(transparent 25vh,var(--sep-color),transparent 75vh);
		width: calc(var(--view-inline) - 1px);
		position: fixed;
		inset: 0;
		height: 100%;
	}

	#element-heights span {
		opacity: .5;
		font-family: var(--sans);
		font-weight: 100; font-weight: 300;
		font-size: min(var(--view-inline) - .9em, 1.7ex);
		line-height: 1;
		width: calc(var(--view-inline) - 3px);
		position: absolute;
		left: 1px;
		top: 0;
		text-align: end;
	}

	#element-heights .header {
		position: fixed;
		top: calc(50vh - .5em);
	}
</style>
