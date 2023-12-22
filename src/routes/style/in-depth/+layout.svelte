<script>
	import { page } from "$app/stores";
	import Nav from "$lib/Nav.svelte";

	const links = [
		{
			label: `Introduction`,
			href: `/style/in-depth`,
			// subtitle: `Intuitive & Safer CSS Defaults`,
		},
		{
			label: `Default CSS`,
			href: `/style/in-depth/default`,
		},
		{
			label: `Develop CSS`,
			href: `/style/in-depth/develop`,
		},
		/* { */
		/* 	label: `Space Flow CSS`, */
		/* 	href: `/style/in-depth/typography`, */
		/* }, */
	];

	$: part = links.filter(link => $page.route.id === link.href)[0]?.label;
	$: subtitle = links.filter(link => $page.route.id === link.href)[0]?.subtitle;
</script>

<article class="app-theme">
	<header>
		<h1>
			<small>makeup-style in-depth:</small>

			{#if part}
				{part}{#if subtitle}—{/if}{#if subtitle}<em>
						{subtitle}
					</em>{/if}
			{/if}
		</h1>
	</header>

	<slot />

	<Nav {links} ariaLabel="In-depth Parts" sticky="bottom" />
</article>

<style lang="postcss">
	h1 em {
		display: block;
	}

	.app-theme,
	article :global(.app-theme) {
		--space: calc(var(--text-body) * (1 + var(--added-lead, 0.6)));
	}

	header {
		margin-block-end: 1rem;
		padding-inline-start: var(--space-edge-x);
		padding-inline-end: var(--space-edge-x);
	}

	h1 small {
		font-style: italic;
		font-size: var(--text-body, 1rem);
		display: block;
		padding-block-start: calc(0.5 * var(--space, 1em));
		padding-block-end: calc(0.5 * var(--space, 1em));
	}
</style>
