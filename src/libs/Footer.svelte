<script>
	import { page } from '$app/stores';
	import Sep from './Sep.svelte';
</script>

<Sep />

<footer class="footer">
	<h2>
		<a
			sveltekit:prefetch
			class="touch-target"
			aria-current={$page.url.pathname === '/' ? 'page' : undefined}
			href="/"
		>
			Some Makeup
		</a>
	</h2>

	<p>
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
				(WIP)
			</a>
		</li>

		<li>
			<a
				class="touch-target"
				sveltekit:prefetch
				aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
				href="/about"
			>
				(?)
			</a>
		</li>
	</ul>
</footer>

<style>
	footer {
		font-family: var(--mono-font);
		font-size: var(--code-inline-font-size);
		padding: 0 var(--body-gap-inline, 16px) calc(2 * var(--spacer, 1rem));
		text-align: center;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1ch;
	}

	a {
		text-underline-offset: 0.5em;
		text-decoration-thickness: var(--decor-width);
		text-decoration-color: var(--sep-color);
	}

	a:is(:hover, :focus) {
		text-decoration-color: currentColor;
	}

	ul {
		display: flex;
		list-style: none;
	}
</style>
