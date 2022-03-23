<script>
	import { page } from '$app/stores';
	import Nav from '/src/libs/Nav.svelte';
</script>

{#if $page.url.pathname !== '/johan'}
	<Nav>
		<a href="/johan">Johan Sebergsen Steinberg</a>
	</Nav>
{/if}

<slot />
