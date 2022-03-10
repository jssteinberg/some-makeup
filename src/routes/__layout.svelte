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

<style lang="postcss">
	.site-header {
		font-family: var(--mono-font);
		text-align: center;
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
		opacity: .25;
	}

	.site-header a::after {
		background: currentColor;
		content: '';
		opacity: 0;
		position: absolute;
		inset: 0;
		z-index: -1;
	}

	.root-layout {
		display: grid;
		grid-template-columns: 100vw;
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
	}
</style>

<script>
	import '/src/libs/app.css'
	import { page } from '$app/stores'
	import Footer from '/src/libs/Footer.svelte'
</script>
