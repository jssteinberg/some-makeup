<script>
	import "../libs/app.css";
	import { page } from "$app/stores";
</script>

<main class={$page.path.replace(/^\//, "")}>
	{#if $page.path === "/"}
		<h1>Some Makeup</h1>
	{/if}

	<slot />
</main>

<footer class="footer">
	<h2>Nav</h2>
	<ul>
		<li>
		<a class="touch-target" aria-current={$page.path === '' ? "page" : undefined} href="/">Index</a>
		</li>
		<li>
			<a class="touch-target" aria-current={$page.path === '/johan' ? "page" : undefined} href="/johan">Johan</a>
		</li>
	</ul>

	<p>
		<a class="touch-target"
			sveltekit:prefetch
			href="/">Some makeup</a>

		{new Date().getFullYear()};

		<a class="touch-target"
			aria-current={$page.path === '/about' ? "page" : undefined}
			href="/about">
			About</a>
	</p>
</footer>

<style>
	:global(h1),
	h2,
	a {
		font-family: var(--mono-font, monospace);
		font-weight: normal;
		text-align: center;
		text-transform: uppercase;
	}

	@media (min-width: 600px) {
		main > :global(*),
		.footer {
			margin-inline-start: auto;
			margin-inline-end: auto;
			padding-inline-start: 5vw;
			padding-inline-end: 5vw;
			width: min(100%, 50rem);
		}
	}

	main {
		margin: calc(2 * var(--spacer, 1em)) 0;
		text-align: center;
	}

	p::before,
	.footer::before {
		--block-start-size: calc(4 * var(--spacer, 1rem));
		--sep-size: calc(2 * var(--spacer, 1rem));

		background: currentColor;
		content: "";
		display: block;
		margin: var(--block-start-size) auto;
		padding: 0;
		width: var(--decor-width);
		height: var(--sep-size);
	}

	.footer {
		font-size: 16px;
		font-family: var(--mono-font, monospace);
		text-align: center;
	}

	.footer ul {
		list-style: none;
		padding: 0;
	}
</style>
