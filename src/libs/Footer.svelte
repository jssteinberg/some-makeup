<script>
	import { page } from '$app/stores';
</script>

<footer class="footer">
	<h2>
		<a
			sveltekit:prefetch
			aria-current={$page.url.pathname === '/' ? 'page' : undefined}
			href="/"
		>
			some.makeup</a>
		{new Date().getFullYear()}
	</h2>

	<p>
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
</footer>

<style>
	footer {
		margin: calc(1.5 * var(--TOUCH-TARGET-SIZE)) var(--view-inline) 0;
		padding: 1em;
		position: relative;
	}

	footer::before {
		background: currentColor;
		content: "";
		position: absolute;
		width: 1px;
		inset: 0;
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

	a::before {
		content: "/";
		font-weight: bold;
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
