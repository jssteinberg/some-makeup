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
			label: 'notes',
			href: '/style/notes',
		},
	];
</script>

<Nav {links} />

<slot />
