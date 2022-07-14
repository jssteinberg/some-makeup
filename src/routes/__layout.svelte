<script>
	import { onMount } from "svelte";
	import { prod } from "$app/env";
	import "../libs/app.css";
	import { page } from "$app/stores";
	import Header from "/src/libs/Header.svelte";
	import Footer from "/src/libs/Footer.svelte";

	let prodHref = false;

	onMount(() => {
		prodHref = !!window?.location.href.match(/\/\/some.makeup/);
	});
</script>

<svelte:head>
	<link rel="canonical" href={`https://some.makeup${$page.url.pathname}`} />

	{#if prod && prodHref}
		<!-- Plausible -->
		<script
			defer
			data-domain="some.makeup"
			src="https://plausible.io/js/plausible.js"></script>
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
