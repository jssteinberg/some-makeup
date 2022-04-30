<script>
	import { page } from '$app/stores';
	import Nav from '$libs/Nav.svelte';

	const links = [
		{
			label: '1. Introduction',
			href: '/style/info'
		},
		{
			label: '2. Fix CSS',
			href: '/style/info/fix'
		}
		/* { */
		/* 	label: 'Space & Flow CSS', */
		/* 	href: '/style/space-flow-css', */
		/* }, */
	];
</script>

<Nav {links} ariaLabel="In-depth Parts" />

<article>
	<header>
		<h1>
			makeup-style <strong>in-depth</strong>
			<br aria-hidden="true">
			{links.filter(link => $page.routeId === link.href.replace(/^\//, ``))[0].label}
		</h1>
	</header>

	<slot />
</article>

<style>
	header {
		margin-block-end: 1rem;
		padding-inline: var(--view-inline);
	}

	.header {
		--bg-1: hsl(var(--bg-h) var(--bg-s) var(--bg-l) / .9);
		--bg-2: hsl(var(--bg-h) var(--bg-s) var(--bg-l) / .45);

		background: linear-gradient(
			var(--bg-1) 50%,
			var(--bg-2),
			transparent
		);
		overflow-x: auto;

		display: flex;
		align-items: center;
		gap: 1em;

		position: sticky;
		top: 0;
		z-index: 1;
	}

	.header * {
		white-space: nowrap;
	}
</style>
