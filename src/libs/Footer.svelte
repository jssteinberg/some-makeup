<script>
	import { page } from '$app/stores';
</script>

<footer class="footer">
	<h2>
		<a
			sveltekit:prefetch
			class="touch-target-center"
			aria-current={$page.url.pathname === '/' ? 'page' : undefined}
			href="/"
		>
			some.makeup</a>
		{new Date().getFullYear()}
	</h2>

	<ul>
		<li>
			<a
				class="touch-target-center"
				sveltekit:prefetch
				aria-current={$page.url.pathname === '/wip' ? 'page' : undefined}
				href="/wip"
			>
				WIP
			</a>
		</li>

		<li>
			<a
				class="touch-target-center"
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
		padding: var(--body-gap-inline, 1em);

		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
		gap: max(8px, .5rem) 1em;
	}

	* {
		font-size: 1em;
		margin: 0;
		text-decoration: none;
	}

	a[href="/"]::before {
		content: '//';
	}

	ul {
		list-style: none;
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
</style>
