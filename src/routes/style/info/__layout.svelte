<script>
	import { page } from '$app/stores';
	import Nav from '$libs/Nav.svelte';

	const links = [
		{
			label: 'Safe & Intuitive Defaults',
			href: '/style/info',
		},
		{
			label: '“Fix” it Safer',
			href: '/style/info/fix',
		},
		/* { */
		/* 	label: '“Do” it Intuitively', */
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
				{part}
			{/if}
		</h1>
	</header>

	<slot />

	<span class="sep" />

	<Nav {links} ariaLabel="In-depth Parts" sticky="bottom" />
</article>

<style>
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
