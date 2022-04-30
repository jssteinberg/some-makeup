<script>
	import { page } from '$app/stores';

	export let links = [];
	export let ariaLabel;
	export let ariaHidden;
	export let sticky = ``;

	let classes = `
		${sticky ? `sticky` : ``}
		${sticky === `bottom` ? `sticky--bottom` : ``}
	`;
</script>

<nav aria-label={ariaLabel} aria-hidden={ariaHidden ? `true` : undefined} class={classes}>
	{#each links as link}
		<a
			href={link.href}
			sveltekit:prefetch
			aria-current={$page.url.pathname === link.href ? `page` : undefined}
			class:parent={$page.url.pathname.includes(link.href)}
			tabindex={ariaHidden ? `-1` : undefined}
		>
			{link.label}
		</a>
	{/each}

	<slot />
</nav>

<style>
	nav {
		margin-block: 0.5rem;
		margin-inline-start: var(--view-inline);
		padding-inline-end: var(--view-inline);
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

	/* :where(nav) :global(a.parent) { */
	/* 	box-shadow: inset 0 1px; */
	/* } */

	nav.sticky {
		--bg-1: hsl(var(--bg-h) var(--bg-s) var(--bg-l) / .9);
		--bg-2: hsl(var(--bg-h) var(--bg-s) var(--bg-l) / .45);

		background: linear-gradient(
			var(--bg-1) 50%,
			var(--bg-2),
			transparent
		);

		position: sticky;
		z-index: 1;
	}
	nav.sticky:not(.sticky--bottom) {
		top: 0;
	}
	nav.sticky--bottom {
		bottom: 0;
	}
</style>
