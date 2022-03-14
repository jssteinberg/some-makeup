<svelte:head>
	<link rel="canonical" href={`https://some.makeup${$page.url.pathnme}`} />
</svelte:head>

<div class="root-layout">
	<nav class="site-header">
		<a href="/" class="touch-target">/</a>
	</nav>
	
	<main>
		<slot />
	</main>
	
	<Footer />
</div>

<style>
	.site-header {
		text-align: center;
		margin: 0 0 1em;
	}

	.site-header a {
		position: relative;
		text-decoration: none;
		width: 100%;
	}

	.site-header a:focus {
		outline: none;
	}

	.site-header a:is(:hover,:focus)::after {
		opacity: 1;
	}

	.site-header a::after {
		background: black;
		content: '';
		opacity: 0;
		position: absolute;
		inset: 0;
		z-index: -1;
	}
</style>

<script>
	import '/src/libs/app.css'
	import { page } from '$app/stores'
	import Footer from '/src/libs/Footer.svelte'
</script>
