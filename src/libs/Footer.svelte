<script>
	import { page } from '$app/stores';
</script>

<footer class="footer">
	<h2 class="nav">
		<a
			sveltekit:prefetch
			aria-current={$page.url.pathname === '/' ? 'page' : undefined}
			href="/"
		>
			some.makeup</a>
		{new Date().getFullYear()}
	</h2>

	<ul class="nav">
		<li>
			<a
			sveltekit:prefetch
			aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
			href="/about"
			>
			About
			</a>
		</li>
		<li>
			<a
				aria-current={$page.url.pathname === '/wip' ? 'page' : undefined}
				href="/wip"
				sveltekit:prefetch
			>
				WIP
			</a>
		</li>
	</ul>

	<p>
		This site does not collect any personal information and uses no cookies.
	</p>

	<p>
		<a href="#">#</a>
	</p>
</footer>

<style>
	footer {
		margin: var(--TOUCH-TARGET-SIZE) var(--view-inline);
	}

	* {
		font-size: 1em;
	}

	h2, h2 + *, h2 + ul > li {
		display: inline;
		margin-inline-end: 1em;
		text-transform: lowercase;
		font-variant: small-caps;
	}

	ul {
		padding: 0;
	}

	a {
		display: inline-flex;
		align-items: center;
		min-height: var(--TOUCH-TARGET-SIZE);
		min-width: var(--TOUCH-TARGET-SIZE);
	}

	ul > :first-child a {
		justify-content: center;
	}

	h2 a::before { content: "//"; }

	.nav a::before {
		content: "/";
		font-weight: bolder;
	}

	a:not(:is(:hover,:focus)) {
		text-decoration: none;
	}
</style>
