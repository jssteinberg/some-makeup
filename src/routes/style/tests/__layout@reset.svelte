<script>
	import CssToggle from "./_css-toggle.svelte";
	import StyleNav from "../_style-nav.svelte";
	import Nav from "$lib/Nav.svelte";
	import { page } from "$app/stores";
	import MetaTags from "$lib/MetaData.svelte";
	import { onMount } from "svelte";
	import Header from "$lib/Header.svelte";

	const links = [
		{
			label: "Overflow",
			href: "/style/tests/overflow",
		},
		{
			label: "Inline",
			href: "/style/tests/inline",
		},
		{
			label: "Media",
			href: "/style/tests/media",
		},
		{
			label: "Inputs",
			href: "/style/tests/inputs",
		},
		{
			label: "Usability",
			href: "/style/tests/usability",
		},
		{
			label: "Other",
			href: "/style/tests/other",
		},
	];

	let els;
	let scrollY = 0;
	$: testLabel = links.find(val => val.href === $page.url.pathname)?.label;
	$: if ($page) {
		updateTest();
	}

	const updateTest = () => {
		if (typeof document !== "undefined")
			els = document.body.querySelectorAll("#tests :is(p, h2, li, hr)");
	};

	onMount(() => {
		updateTest();
	});
</script>

<MetaTags
	title={`makeup-style ${testLabel ? `${testLabel} test` : `tests`}`}
	description={`Test makeup-style code for ${testLabel ? testLabel : ``}.`}
/>

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<svelte:window bind:scrollY />

<Header />

<StyleNav />

<CssToggle on:toggle={updateTest} />

{#if els && els.length}
	<div aria-hidden="true" id="element-heights">
		{#each els as item, i}
			<span
				class="element-height-val"
				style:transform={`translate3d(0, ${
					item.getBoundingClientRect().top + scrollY
				}px, 0)`}
			>
				{#if i === 0}px:{/if}
				{item.offsetHeight}
			</span>
		{/each}
	</div>
{/if}

<section id="tests" class="wrapper">
	<slot />

	<h2><em>Browser information</em></h2>

	{#if typeof navigator !== "undefined"}
		<p>
			{navigator.userAgent} (<a
				href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent"
				>MDN</a
			>)
		</p>
	{:else}
		<p>Not loaded</p>
	{/if}
</section>

<Nav {links} ariaLabel="Test-pages" sticky="bottom" />

<style>
	*,
	::before,
	::after {
		box-sizing: border-box;
	}

	.wrapper {
		max-width: var(--content-width);
		margin: 0 var(--v-inline-gap);

		position: relative;
		border-left: 1px solid;
	}

	.wrapper::after {
		--padding-inline: 1px;

		border-right: var(--padding-inline) dashed;
		content: "";
		position: absolute;
		inset: calc(-1 * var(--space, 1rem)) calc(-1 * var(--padding-inline));
		z-index: -1;
		opacity: 1;
	}

	.wrapper :global(h2) {
		background: 0 1em/100% 1px
			linear-gradient(var(--sep-color), var(--sep-color)) no-repeat;
	}

	#element-heights {
		position: absolute;
		top: 0;
	}

	#element-heights::after {
		content: "";
		/* background: no-repeat top right/1px 100% */
		/* 	linear-gradient(transparent 25vh, var(--sep-color), transparent 75vh); */
		width: calc(var(--v-inline-gap) - 1px);
		position: fixed;
		inset: 0;
		height: 100%;
	}

	.element-height-val {
		background: var(--bg);
		color: hsla(var(--fg-h) var(--fg-s) var(--fg-l) / 0.5);
		font-family: var(--sans);
		font-weight: 100;
		font-weight: 300;
		font-size: clamp(10px, var(--v-inline-gap) - 0.9em, 15px);
		line-height: 0.9;
		width: calc(var(--v-inline-gap) - 3px);
		position: absolute;
		left: 1px;
		top: 0;
		text-align: end;
	}
</style>
