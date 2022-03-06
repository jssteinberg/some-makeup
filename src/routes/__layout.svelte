<svelte:head>
	<link rel="canonical" href={`https://some.makeup${$page.url.pathnme}`} />
</svelte:head>

<nav>
	<a href="/" class="touch-target">/</a>
</nav>

<slot />

<Footer />

<style>
	nav {
		font-family: var(--mono-font);
		text-align: center;
	}

	a {
		padding: 1em;
		text-decoration: none;
	}
</style>

<script>
	import '/src/libs/app.css'
	import { page } from '$app/stores'
	import Footer from '/src/libs/Footer.svelte'
</script>
