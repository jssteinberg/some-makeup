<script>
	import "../libs/app.css";
	import { page } from "$app/stores";
	import Footer from "../libs/Footer.svelte";
	import Logo from "../libs/Logo.svelte";
</script>

<svelte:head>
	<link rel="canonical" href={`https://some.makeup${$page.url.pathnme}`} />
</svelte:head>

<main class={$page.url.pathname.replace(/^\//, "").replace(/\//g, "-") || 'home'}>
	{#if $page.url.pathname === "/"}
		<h1>
			<a href="/" sveltekit:prefetch>
				<Logo />
			</a>
		</h1>
	{:else if $page.url.pathname.match(/^\/johan/)}
		<p>
			<a href="/">
				<Logo text={false} />
			</a>
		</p>
	{/if}

	<slot />
</main>

<Footer />

<style>
	h1 {
		font-size: 1em;
	}

	:global(h1),
	main.home :global(.posts),
	a {
		text-align: center;
	}

	main.home :global(.posts),
	:global(.footer h2),
	a {
		font-weight: normal;
		text-transform: uppercase;
	}

	@media (min-width: 600px) {
		main.home :global(.post-title) {
			/* Bigger size, same leading */
			--line-height: 1.3;
			font-size: calc(1em * var(--ROOT-LINE-HEIGHT, 1.2) / var(--line-height));
			line-height: var(--line-height);
		}
	}

	main {
		margin: calc(2 * var(--spacer, 1em)) 0;
		text-align: center;
	}
</style>
