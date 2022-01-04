<script>
	import { page } from "$app/stores";
</script>

{#if $page.path !== "/johan"}
	<p><a href="/johan">Johan Sebergsen Steinberg</a></p>
{/if}

<slot></slot>
