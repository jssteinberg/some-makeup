<script>
	import { page } from '$app/stores';
	import Nav from '$libs/Nav.svelte';

	const links = [
		{
			label: '1—Background',
			href: '/style/info'
		},
		{
			label: '2—Fix CSS',
			href: '/style/info/fix'
		}
		/* { */
		/* 	label: 'Space & Flow CSS', */
		/* 	href: '/style/space-flow-css', */
		/* }, */
	];

	$: part = links.filter(link => $page.routeId === link.href.replace(/^\//, ``))[0]?.label;
</script>

<article>
	<header>
		<h1>
			<small>
			makeup-style in-depth:
			</small>

			<br aria-hidden="true">

			{#if part}
				Part {part}
			{/if}
		</h1>
	</header>

	<slot />

	<Nav {links} ariaLabel="In-depth Parts" sticky="bottom" />
</article>

<style>
	header {
		margin-block-end: 1rem;
		padding-inline: var(--view-inline);
	}

	h1 small {
		font-style: italic;
	}
</style>
