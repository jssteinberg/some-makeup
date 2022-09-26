<script>
	import { page } from "$app/stores";
</script>

<footer class="footer">
	<h2 class="nav">
		<a
			sveltekit:prefetch
			aria-current={$page.url.pathname === "/" ? "page" : undefined}
			href="/"
		>
			some.makeup</a
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
		<li>
			<a
				aria-current={$page.url.pathname === "/wip" ? "page" : undefined}
				href="/wip"
				sveltekit:prefetch
			>
				WIP
			</a>
		</li>
	</ul>

	<p>
		This site does not store any of your data, does not track you and does not
		use other trackers.
	</p>

	<p aria-hidden="true">
		<a
			href="#document"
			tabindex="-1"
			class="touch-target"
			on:click|preventDefault={() => {
				window.scrollTo(0, 0);
			}}
		>
			Top of page
		</a>
	</p>
</footer>

<style>
	*,
	::before,
	::after {
		box-sizing: border-box;
		font-size: 1em;
	}

	footer {
		margin: var(--TOUCH-TARGET-SIZE) var(--view-inline);
	}

	h2,
	h2 + *,
	h2 + ul > li {
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

	ul > :first-child a {
		justify-content: center;
	}

	h2 a::before {
		content: "//";
	}

	.nav a::before {
		content: "/";
		font-weight: bolder;
	}
</style>
