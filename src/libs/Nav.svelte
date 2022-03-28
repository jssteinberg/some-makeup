<script>
	import { page } from '$app/stores';

	export let ariaLabel;
	export let links = [];
</script>

<nav aria-label={ariaLabel}>
	{#each links as link}
		<a
			href={link.href}
			sveltekit:prefetch
			aria-current={$page.url.pathname === link.href ? `page` : undefined}
			class:parent={$page.url.pathname.includes(link.href)}
		>
			{link.label}
		</a>
	{/each}

	<slot />
</nav>

<style>
	nav {
		padding: 0.5rem var(--view-inline);
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1rem;
	}

	nav :global(a) {
		display: inline-flex;
		align-items: center;
		flex-wrap: wrap;

		min-height: var(--TOUCH-TARGET-SIZE, 48px);
		min-width: var(--touch-target-min-width, var(--TOUCH-TARGET-SIZE, 48px));

		outline: none;
		padding: 0 1em;
	}

	nav :global(a[aria-current="page"]) {
		box-shadow: inset -1px -1px;
		text-decoration: none;
	}

	nav :global(a:is(:hover,:focus-visible)) {
		box-shadow: inset 0 0 0 1px;
		text-decoration: none;
	}

	:where(nav) :global(a.parent) {
		box-shadow: inset 0 1px;
	}

	/* nav ~ :global(nav a) { */
	/* 	box-shadow: none; */
	/* } */
</style>
