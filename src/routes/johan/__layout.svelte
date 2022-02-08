<script>
	import { page } from '$app/stores';
</script>

{#if $page.url.pathname !== '/johan'}
	<p><a href="/johan">Johan Sebergsen Steinberg</a></p>
{/if}

<slot />
