<script>
	import "../libs/app.css";
	import { page } from "$app/stores";
	import Sep from "../libs/Sep.svelte";
	import Logo from "../libs/Logo.svelte";
</script>

<svelte:head>
	<link rel="canonical" href={`https://some.makeup${$page.path}`} />
</svelte:head>

<main class={$page.path.replace(/^\//, "") || 'home'}>
	{#if $page.path === "/"}
		<h1>
			<a href="/" sveltekit:prefetch>
				<Logo />
			</a>
		</h1>
	{:else if $page.path.match(/^\/johan/)}
		<p>
			<a href="/">
				<Logo text={false} />
			</a>
		</p>
	{/if}

	<slot />
</main>

<Sep />
<footer class="footer">
	<h2>
		<a
			sveltekit:prefetch
			class="touch-target"
			aria-current={$page.path === "/" ? "page" : undefined}
			href="/"
		>
			Some Makeup
		</a>
	</h2>

	<p>
		{new Date().getFullYear()}
	</p>

	<p>
		<a
			class="touch-target"
			sveltekit:prefetch
			aria-current={$page.path === "/about" ? "page" : undefined}
			href="/about"
		>
			?
		</a>
	</p>
</footer>

<style>
	:global(h1),
	main.home :global(.posts),
	h2,
	a {
		text-align: center;
	}

	main.home :global(.posts),
	h2,
	a {
		font-weight: normal;
		text-transform: uppercase;
	}

	@media (min-width: 600px) {
		main.home :global(.post-title) {
			/* Bigger size, same leading */
			--line-height: 1.05;
			font-size: calc(1em * (1 + var(--added-lead, 0.6)) / var(--line-height));
			line-height: var(--line-height);
			font-variant: small-caps;
			text-transform: lowercase;
		}

		/* Content width */
		main > :global(*),
		.footer {
			margin-inline-start: auto;
			margin-inline-end: auto;
		}
		main > :global(*) {
			padding-inline-start: var(--body-gap, 5vw);
			padding-inline-end: var(--body-gap, 5vw);
			width: min(100%, calc(var(--base-width, 40rem) + 15vw));
		}
		.footer {
			padding-inline-start: 5vw;
			padding-inline-end: 5vw;
			width: min(100%, calc(40rem + 15vw));
		}
	}

	main {
		margin: calc(2 * var(--spacer, 1em)) 0;
		text-align: center;
	}

	.footer {
		font-size: 16px;
		text-align: center;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1ch;
	}
</style>
