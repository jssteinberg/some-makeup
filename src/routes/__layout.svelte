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
		position: relative;
		text-decoration: none;
		width: 100%;
	}

	a:focus {
		outline: none;
	}

	a:is(:hover,:focus)::after {
		opacity: .25;
	}

	a::after {
		background: currentColor;
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
