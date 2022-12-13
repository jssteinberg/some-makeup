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
		{
			label: "github",
			href: "https://github.com/jssteinberg/some-makeup",
		},
	];
</script>

<Nav {links} />
