<script>
	import { page } from '$app/stores';
</script>

<footer class="footer">
	<p>
		<a
			sveltekit:prefetch
			class="touch-target"
			aria-current={$page.url.pathname === '/' ? 'page' : undefined}
			href="/"
		>
			Some Makeup</a>,
		{new Date().getFullYear()}
	</p>

	<ul>
		<li>
			<a
				class="touch-target"
				sveltekit:prefetch
				aria-current={$page.url.pathname === '/wip' ? 'page' : undefined}
				href="/wip"
			>
				WIP
			</a>
		</li>

		<li>
			<a
				class="touch-target"
				sveltekit:prefetch
				aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
				href="/about"
			>
				?
			</a>
		</li>
	</ul>
</footer>

<style>
	footer {
		box-shadow: inset 0 0 0 1px var(--sep-color);
		font-family: var(--mono-font);
		margin: 1em var(--body-gap-inline, 1em);
		text-align: center;
		word-spacing: -1ch;

		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
	}

	a {
		background-image: linear-gradient(currentColor, currentColor);
		background-position: center calc(50% + 1.5ex);
		background-repeat: no-repeat;
		background-size: calc(100% - 1ch) 1px;
		text-decoration: none;
	}

	p {
		font-weight: bolder;
		margin: 0;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;

		display: flex;
		flex-wrap: wrap;
		/* Do we need gap of 8px for lighthouse? */
	}

	ul a::before {
		content: '[';
		margin-inline-end: 1ch;
	}
	ul a::after {
		content: ']';
		margin-inline-start: 1ch;
	}
</style>
