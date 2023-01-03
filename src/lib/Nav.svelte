<script>
	import { page } from "$app/stores";

	export let links = [];
	export let ariaLabel;
	export let ariaHidden;
	export let sticky = ``;

	let classes = `
		${sticky ? `sticky` : ``}
		${sticky === `bottom` ? `sticky--bottom` : ``}
	`;
</script>

<nav
	aria-label={ariaLabel}
	aria-hidden={ariaHidden ? `true` : undefined}
	class={classes}
	data-sveltekit-prefetch
>
	{#each links as link}
		<a
			href={link.href}
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
		margin-block-start: 0.5rem;
		margin-block-end: 0.5rem;
		margin-inline-start: var(--v-inline-gap);
		padding-inline-end: var(--v-inline-gap);
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
		min-width: max(
			min-content,
			var(--touch-target-min-width, var(--TOUCH-TARGET-SIZE, 48px))
		);
		white-space: nowrap;

		outline: none;
		padding: 0 1em;
		text-decoration: none;
	}

	nav.sticky a {
		box-shadow: inset 0 0 0 1px;
	}

	nav :global([aria-current="page"]) {
		text-decoration: underline;
	}

	nav.sticky :global(a:focus-visible),
	nav :global(a:focus-visible) {
		box-shadow: inset 0 0 0 2px;
	}

	nav :global(a:is(:hover, :focus-visible)) {
		text-decoration: underline;
	}

	/* nav.sticky a:not(:focus), */
	/* nav :global([aria-current="page"]) { */
	/* 	text-decoration: none; */
	/* } */

	/* :where(nav):not(:has([aria-current="page"])) :global(a.parent) { */
	/* 	box-shadow: inset 0 1px; */
	/* } */

	nav.sticky {
		--_offset: 1vh;
		position: sticky;
	}
	nav.sticky a {
		background: hsl(var(--bg-h) var(--bg-s) var(--bg-l) / 0.9);
	}
	nav.sticky:not(.sticky--bottom) {
		top: var(--_offset);
	}
	nav.sticky--bottom {
		bottom: var(--_offset);
	}
</style>
