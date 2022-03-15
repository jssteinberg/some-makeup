<script>
	import '../libs/app.css';
	import { page } from '$app/stores';
	import Header from '/src/libs/Header.svelte';
	import Footer from '/src/libs/Footer.svelte';
</script>

<svelte:head>
	<link rel="canonical" href={`https://some.makeup${$page.url.pathname}`} />
</svelte:head>

<div class="root-layout">
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
