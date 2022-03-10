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
		font-family: var(--mono-font);
		padding: 0 var(--body-gap-inline, 16px) calc(2 * var(--spacer, 1rem));
		text-align: center;
		word-spacing: -1ch;

		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
	}

	a {
		--touch-target-width: none;
		background-image: linear-gradient(currentColor, currentColor);
		background-position: center calc(50% + 1.25ex);
		background-repeat: no-repeat;
		background-size: calc(100% - 1ch) .125ex;
		text-decoration: none;
	}

	p {
		font-weight: bolder;
	}

	ul {
		list-style: none;
		padding: 0;

		display: flex;
		flex-wrap: wrap;
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
