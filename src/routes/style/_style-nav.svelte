<script>
	import Nav from "/src/libs/Nav.svelte";

	const links = [
		{
			label: "makeup-style",
			href: "/style",
		},
		{
			label: "in-depth",
			href: "/style/in-depth",
		},
		// {
		// 	label: 'tests',
		// 	href: '/style/tests',
		// },
	];
</script>

<Nav {links} />
