<script>
	import { page } from "$app/stores";
	import Nav from "$libs/Nav.svelte";

	const links = [
		{
			label: `Background`,
			href: `/style/in-depth`,
			// subtitle: `Intuitive & Safer CSS Defaults`,
		},
		{
			label: `Default CSS`,
			href: `/style/in-depth/default`,
		},
		{
			label: `Deform CSS`,
			href: `/style/in-depth/deform`,
		},
		/* { */
		/* 	label: `Space Flow CSS`, */
		/* 	href: `/style/in-depth/typography`, */
		/* }, */
	];

	$: part = links.filter(
		link => $page.routeId === link.href.replace(/^\//, ``)
	)[0]?.label;
	$: subtitle = links.filter(
		link => $page.routeId === link.href.replace(/^\//, ``)
	)[0]?.subtitle;
</script>

<Nav {links} ariaLabel="In-depth Parts" />
<article class="app-theme">
	<header>
		<h1>
			<small>makeup-style in-depth:</small>

			{#if part}
				{part}{#if subtitle}—{/if}{#if subtitle}<em class="block">{subtitle}</em
					>{/if}
			{/if}
		</h1>
	</header>

	<slot />
</article>

<style>
	.app-theme,
	article :global(.app-theme) {
		--space: calc(var(--font-size) * (1 + var(--added-lead, 0.6)));
	}

	header {
		margin-block-end: 1rem;
		padding-inline: var(--view-inline);
	}

	h1 small {
		font-style: italic;
		font-size: var(--font-size, 1rem);
		display: block;
		padding-block: calc(0.5 * var(--space, 1em));
	}
</style>
