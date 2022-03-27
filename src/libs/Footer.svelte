<script>
	import { page } from '$app/stores';
</script>

<footer class="footer border-l">
	<h2 class="nav">
		<a
			sveltekit:prefetch
			aria-current={$page.url.pathname === '/' ? 'page' : undefined}
			href="/"
		>
			some.makeup</a>
		{new Date().getFullYear()}
	</h2>

	<p class="nav">
		<a
		sveltekit:prefetch
		aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
		href="/about"
		>
		About
		</a>
	</p>

	<p>
		This site does not collect any personal information and uses no cookies.
	</p>

	<p>
		<a href="#">#</a>
	</p>
</footer>

<style>
	footer {
		margin: calc(1.5 * var(--TOUCH-TARGET-SIZE)) var(--view-inline) 0;
		padding: 1em calc(var(--TOUCH-TARGET-SIZE, 48px) / 2 - .5ch);
	}

	* {
		font-size: 1em;
	}

	a {
		display: inline-flex;
		align-items: center;
		min-height: var(--TOUCH-TARGET-SIZE);
		min-width: var(--TOUCH-TARGET-SIZE);
	}

	h2 a::before { content: "//"; }

	.nav a::before {
		content: "/";
		font-weight: bolder;
	}

	a:not(:is(:hover,:focus)) {
		text-decoration: none;
	}

	h2, h2 + * {
		display: inline;
		margin-inline-end: 1em;
		text-transform: lowercase;
	}
</style>
