<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<meta name="robots" content="noindex">
</svelte:head>

<div class={$page?.url?.pathname.replace(/^\//, ``).replace(/\//g, `-`) || `home`}>
	<slot />
</div>
