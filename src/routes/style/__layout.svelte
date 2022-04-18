<script>
	import Nav from '/src/libs/Nav.svelte';

	const links = [
		{
			label: 'makeup-style',
			href: '/style',
		},
		{
			label: 'tests',
			href: '/style/tests',
		},
		{
			label: 'in-depth',
			href: '/style/info',
		},
	];
</script>

<Nav {links} />

<slot />
