<script>
	import { page } from '$app/stores';

	export let links = [];
	export let ariaLabel;
	export let ariaHidden;
</script>

<nav aria-label={ariaLabel} aria-hidden={ariaHidden ? `true` : undefined}>
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
		margin: 0.5rem 0;
		margin-inline-start: var(--view-inline);
		display: flex;
		flex: 1;
		gap: 0.5rem 1rem;
		overflow-x: auto;
		position: relative;

		box-shadow: inset 1px 0;
	}

	nav :global(a) {
		display: inline-flex;
		align-items: center;
		flex-wrap: wrap;

		min-height: var(--TOUCH-TARGET-SIZE, 48px);
		min-width: max(min-content, var(--touch-target-min-width, var(--TOUCH-TARGET-SIZE, 48px)));
		white-space: nowrap;

		outline: none;
		padding: 0 1em;
	}

	nav :global(a[aria-current="page"]),
	nav :global(a:is(:hover,:focus)) {
		box-shadow: inset 0 0 0 1px;
	}

	nav :global(a[aria-current="page"]) {
		text-decoration: none;
	}

	:where(nav) :global(a.parent) {
		box-shadow: inset 0 1px;
	}

	/* nav ~ :global(nav a) { */
	/* 	box-shadow: none; */
	/* } */
</style>
