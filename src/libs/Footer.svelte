<script>
	import { page } from '$app/stores';

	let dark = true;
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
		<button class="touch-target" on:click={() => {dark = !dark}}>Dark/light</button>
		<button class="touch-target" on:click={() => {window.scrollTo(0,0)}}>Top</button>
	</div>
</footer>

<svelte:head>
	{#if !dark}
		<style>
			:root {
				--bg: white;
			}

			body {
				--fg-l: 0%;
				--fg: hsla(var(--fg-h) var(--fg-s) var(--fg-l) / var(--fg-a));
			}
		</style>
	{/if}
</svelte:head>

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

	a, button {
		all: unset;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		min-height: var(--TOUCH-TARGET-SIZE);
		min-width: var(--TOUCH-TARGET-SIZE);
		text-transform: lowercase;
		font-variant: small-caps;
	}

	:is(a, button):is(:focus-visible,:active) {
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
