<script>
	import { page } from '$app/stores';
	import Nav from '$libs/Nav.svelte';

	const links = [
		{
			label: `1. Fix & Do CSS`,
			href: `/style/info`,
			subtitle: `Intuitive & Safer CSS Defaults`,
		},
		{
			label: `2. Typography`,
			href: `/style/info/typography`,
		},
		/* { */
		/* 	label: '“Do” it Intuitively', */
		/* 	href: '/style/space-flow-css', */
		/* }, */
	];

	$: part = links.filter(link => $page.routeId === link.href.replace(/^\//, ``))[0]?.label;
	$: subtitle = links.filter(link => $page.routeId === link.href.replace(/^\//, ``))[0]?.subtitle;
</script>

<article class="app-theme">
	<header>
		<h1>
			<small>
			makeup-style in-depth:
			</small>

			<br aria-hidden="true">

			{#if part}
				{part}
			{/if}
		</h1>

		{#if subtitle}
			<p><em>{subtitle}</em></p>
		{/if}
	</header>

	<slot />

	<span class="sep" />

	<Nav {links} ariaLabel="In-depth Parts" sticky="bottom" />
</article>

<style>
	article :global(.app-theme) {
		--space: calc(var(--font-size) * (1 + var(--added-lead, .6)));
	}

	header {
		margin-block-end: 1rem;
		padding-inline: var(--view-inline);
	}

	h1 small {
		font-style: italic;
		font-size: var(--font-size, 1rem);
	}

	.sep {
		display: block;
		height: var(--space, 1rem);
	}
</style>
