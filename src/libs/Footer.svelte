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

	<div aria-hidden="true" class="button-container">
		<a href="#top" tabindex="-1" class="touch-target" on:click|preventDefault={() => {window.scrollTo(0,0)}}>Top</a>
	</div>
</footer>

<style>
	*, ::before, ::after {
		box-sizing: border-box;
		font-size: 1em;
	}

	footer {
		margin: var(--TOUCH-TARGET-SIZE) var(--view-inline);
	}


	h2, h2 + *, h2 + ul > li {
		display: inline;
		margin-inline-end: 1em;
	}

	ul {
		padding: 0;
	}

	a {
		display: inline-flex;
		align-items: center;
		min-height: var(--TOUCH-TARGET-SIZE);
		min-width: var(--TOUCH-TARGET-SIZE);
		text-transform: lowercase;
		font-variant: small-caps;
	}

	a:is(:focus-visible,:active) {
		text-decoration: underline;
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

	.button-container {
		display: flex;
		gap: .5rem;
	}

	.button-container > ::after {
		content: '.';
	}
</style>
