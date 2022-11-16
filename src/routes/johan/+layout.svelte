<script>
	import { page } from '$app/stores';
	import Nav from '/src/libs/Nav.svelte';
</script>

{#if $page.url.pathname !== '/johan'}
	<Nav links={[
		{
			href: `/johan`,
			label: `Johan Sebergsen Steinberg`,
		},
	]} />
{/if}

<slot />
