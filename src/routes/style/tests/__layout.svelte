<MetaTags
	title={`
		makeup-style
		${testLabel ? `${testLabel} test` : `tests`}
	`}
	description={`Test makeup-style code for ${testLabel ? testLabel : ``}.`}
/>

<svelte:head>
	<meta name="robots" content="noindex">
</svelte:head>

<svelte:window bind:scrollY />

<Nav {links} ariaLabel="Test-pages" />

<CssToggle on:toggle={updateTest} />

{#if els && els.length}
	<div aria-hidden="true" id="element-heights">
		{#each els as item,i}
			<span
				class="element-height-val"
				style:transform={
					`translate3d(0, ${item.getBoundingClientRect().top + scrollY}px, 0)`
				}
			>
				{#if i === 0}px:{/if}
				{item.offsetHeight}
			</span>
		{/each}
	</div>
{/if}

<div id="tests" class="wrapper">
	<slot />

	<TestsNav {links} />

	<details>
		<summary><em>Your browser</em></summary>

		{#if typeof navigator !== "undefined"}
			{navigator.userAgent}
		{:else}
			Not loaded
		{/if}
	</details>
</div>

<script>
	import CssToggle from './_css-toggle.svelte';
	import Nav from '$libs/Nav.svelte';
	import { page } from '$app/stores';
	import MetaTags from '$libs/MetaData.svelte';
	import TestsNav from './_tests-nav.svelte';
	import { onMount } from 'svelte';

	const links = [
		{
			label: 'Overflow',
			href: '/style/tests/overflow',
		},
		{
			label: 'Line-height',
			href: '/style/tests/line-height',
		},
		{
			label: 'Media',
			href: '/style/tests/media',
		},
		{
			label: 'Inputs',
			href: '/style/tests/inputs',
		},
		{
			label: 'Usability',
			href: '/style/tests/usability',
		},
	];

	let els;
	let scrollY = 0;
	$: testLabel = links.find(val => val.href === $page.url.pathname)?.label;
	$: if ($page) { updateTest(); }

	const updateTest = () => {
		if (typeof document !== 'undefined')
			els = document.body.querySelectorAll(
				'#tests section :is(p,h2)'
			);
	};

	onMount(() => { updateTest(); });
</script>

<style>
	*, ::before, ::after {
		box-sizing: border-box;
	}

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

	.wrapper :global(h2) {
		background:
			0 1em/100% 1px
			linear-gradient(var(--sep-color), var(--sep-color))
			no-repeat;
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

	.element-height-val {
		background: var(--bg);
		color: hsla(var(--fg-h) var(--fg-s) var(--fg-l) / .5);
		font-family: var(--sans);
		font-weight: 100; font-weight: 300;
		font-size: clamp(1ex, var(--view-inline) - .9em, 1.5ex);
		line-height: .9;
		width: calc(var(--view-inline) - 3px);
		position: absolute;
		left: 1px;
		top: 0;
		text-align: end;
	}
</style>
