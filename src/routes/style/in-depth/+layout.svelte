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

	page.subscribe(val => console.log(val));
</script>

<article class="app-theme">
	<header>
		<h1>
			<small>makeup-style in-depth:</small>

			{#if part}
				{part}{#if subtitle}—{/if}{#if subtitle}<em class="block">
						{subtitle}
					</em>{/if}
			{/if}
		</h1>
	</header>

	<slot />

	<Nav {links} ariaLabel="In-depth Parts" sticky="bottom" />
</article>

<style lang="postcss">
	.app-theme,
	article :global(.app-theme) {
		--space: calc(var(--font-size) * (1 + var(--added-lead, 0.6)));
	}

	header {
		margin-block-end: 1rem;
		padding-inline-start: var(--v-inline-gap);
		padding-inline-end: var(--v-inline-gap);
	}

	h1 small {
		font-style: italic;
		font-size: var(--font-size, 1rem);
		display: block;
		padding-block-start: calc(0.5 * var(--space, 1em));
		padding-block-end: calc(0.5 * var(--space, 1em));
	}
</style>
