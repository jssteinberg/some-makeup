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
		padding: 0 var(--body-gap-inline, 16px) calc(2 * var(--spacer, 1rem));
		text-align: center;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: .5em 1em;
	}

	a {
		text-decoration: none;
		box-shadow: inset 0 -1px;
	}

	ul {
		display: flex;
		gap: .5em;
		list-style: none;
		padding: 0;
	}

	ul li::before { content: '(' }
	ul li::after { content: ')' }
</style>
