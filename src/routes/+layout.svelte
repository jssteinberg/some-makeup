<script>
	import "../libs/app.css";
	import { page } from "$app/stores";
	import Header from "/src/libs/Header.svelte";
	import Footer from "/src/libs/Footer.svelte";

	export const prerender = true;
</script>

<svelte:head>
	<link rel="canonical" href={`https://some.makeup${$page.url.pathname}`} />
</svelte:head>

<div id="document">
	<Header />

	<main>
		<slot />
	</main>

	<Footer title="some.makeup">
		<h2>
			<a
				sveltekit:prefetch
				aria-current={$page.url.pathname === "/" ? "page" : undefined}
				href="/">some.makeup</a
			>
			2021-{new Date().getFullYear()}
		</h2>

		<ul class="nav">
			<li>
				<a
					sveltekit:prefetch
					aria-current={$page.url.pathname === "/about" ? "page" : undefined}
					href="/about"
				>
					About
				</a>
			</li>
			<!-- <li> -->
			<!-- 	<a -->
			<!-- 		aria-current={$page.url.pathname === "/wip" ? "page" : undefined} -->
			<!-- 		href="/wip" -->
			<!-- 		sveltekit:prefetch -->
			<!-- 	> -->
			<!-- 		WIP -->
			<!-- 	</a> -->
			<!-- </li> -->
		</ul>
	</Footer>
</div>

<style>
	main {
		min-height: 25vh;
	}
</style>
