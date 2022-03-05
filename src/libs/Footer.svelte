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
		align-items: center;
		flex-wrap: wrap;
		gap: 0 1ch;
		justify-content: center;
	}

	ul {
		display: flex;
		flex-wrap: wrap;

		list-style: none;
		padding: 0;
	}

	footer::before { content: '{' }
	footer::after { content: '}' }

	ul a::before,
	ul a::after {
		padding: 0 1ch;
	}
	ul a::before { content: '[' }
	ul a::after { content: ']' }
</style>
