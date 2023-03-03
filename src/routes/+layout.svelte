<script>
	import "../lib/app.css";
	import { page } from "$app/stores";
	import Header from "/src/lib/Header.svelte";
	import Footer from "/src/lib/Footer.svelte";
</script>

<svelte:head>
	<link rel="canonical" href={`https://some.makeup${$page.url.pathname}`} />
	<!-- theme-color for Safari -->
	<meta
		name="theme-color"
		content="#0c0a19"
		media="(prefers-color-scheme: dark)"
	/>
	<meta
		name="theme-color"
		content="#ffffff"
		media="(prefers-color-scheme: light)"
	/>
</svelte:head>

<div id="document">
	<Header />

	<main>
		<slot />
	</main>

	<Footer title="some.makeup">
		<div data-sveltekit-prefetch>
			<h2>
				<a
					aria-current={$page.url.pathname === "/" ? "page" : undefined}
					href="/">some.makeup</a
				>
				2021-{new Date().getFullYear()}
			</h2>

			<ul>
				<li>
					<a
						aria-current={$page.url.pathname === "/about" ? "page" : undefined}
						href="/about"
					>
						About
					</a>
				</li>
				<li>
					<a
						aria-current={$page.url.pathname === "/wip" ? "page" : undefined}
						href="/wip"
					>
						WIP
					</a>
				</li>
			</ul>
		</div>
	</Footer>
</div>

<style>
	main {
		min-height: 25vh;
	}
</style>
