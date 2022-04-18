<script>
	import Nav from '/src/libs/Nav.svelte';

	const links = [
		{
			label: 'makeup-style',
			href: '/style',
		},
		{
			label: 'In-depth',
			href: '/style/info',
		},
		{
			label: 'Tests',
			href: '/style/tests',
		},
	];
</script>

<Nav {links} />

<slot />
