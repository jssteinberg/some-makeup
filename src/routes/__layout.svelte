<script>
	import { prod } from '$app/env';
	import '../libs/app.css';
	import { page } from '$app/stores';
	import Header from '/src/libs/Header.svelte';
	import Footer from '/src/libs/Footer.svelte';
</script>

<svelte:head>
	<link rel="canonical" href={`https://some.makeup${$page.url.pathname}`} />

	{#if prod}
		<!-- Plausible -->
		<script defer data-domain="some.makeup" src="https://plausible.io/js/plausible.js"></script>
	{/if}
</svelte:head>

<div id="document">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	main {
		min-height: 25vh;
	}
</style>
