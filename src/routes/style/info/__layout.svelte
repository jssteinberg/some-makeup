<script>
	import Nav from '/src/libs/Nav.svelte';

	const links = [
		{
			label: 'Fix & Do CSS',
			href: '/style/info/fix-do-css',
		},
		/* { */
		/* 	label: 'Space & Flow CSS', */
		/* 	href: '/style/space-flow-css', */
		/* }, */
	];
</script>

<Nav {links} />

<slot />
