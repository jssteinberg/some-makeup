<script>
	import { page } from "$app/stores";
	/* import Nav from "$libs/Nav.svelte"; */

	const links = [
		{
			label: `Fix Do CSS`,
			href: `/style/in-depth`,
			subtitle: `Intuitive & Safer CSS Defaults`,
		},
		/* { */
		/* 	label: `Space Flow CSS`, */
		/* 	href: `/style/in-depth/typography`, */
		/* }, */
	];

	$: part = links.filter(
		link => $page.routeId === link.href.replace(/^\//, ``),
	)[0]?.label;
	$: subtitle = links.filter(
		link => $page.routeId === link.href.replace(/^\//, ``),
	)[0]?.subtitle;
</script>

<article class="app-theme">
	<header>
		<h1>
			<small> makeup-style in-depth: </small>
			<br aria-hidden="true" />

			{#if part}
				{part}{#if subtitle}—{/if}

				{#if subtitle}
					<br aria-hidden="true" />
					<em>{subtitle}</em>
				{/if}
			{/if}
		</h1>
	</header>

	<slot />

	<!--
	<span class="sep" />

	<Nav {links} ariaLabel="In-depth Parts" sticky="bottom" />
	-->
</article>

<style>
	article,
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
	}

	/* .sep { */
	/* 	display: block; */
	/* 	height: var(--space, 1rem); */
	/* } */
</style>
