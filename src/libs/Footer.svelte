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
			some.makeup</a>
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
		margin: 1em var(--body-gap-inline, 1em);

		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1em;
	}

	a {
		/* background-image: linear-gradient(var(--sep-color), var(--sep-color)); */
		/* background-position: center calc(50% + 2ex); */
		/* background-repeat: no-repeat; */
		/* background-size: 1ex 1ex; */
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
		gap: max(8px, .5rem);
	}

	ul a::before {
		content: '(';
		margin-inline-end: 1ch;
	}

	ul a::after {
		content: ')';
		margin-inline-start: 1ch;
	}

	a[href="/"]::before {
		content: '//';
	}
</style>
