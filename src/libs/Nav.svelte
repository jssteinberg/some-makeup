<nav>
	<slot />
</nav>

<style>
	nav {
		padding: .5rem var(--view-inline);
		display: flex;
		flex-wrap: wrap;
		gap: .5rem 1rem;
	}

	nav :global(a) {
		display: inline-flex;
		align-items: center;
		flex-wrap: wrap;

		min-height: var(--TOUCH-TARGET-MIN-SIZE, 48px);
		min-width: var(--touch-target-min-width, var(--TOUCH-TARGET-MIN-SIZE, 48px));
	}
</style>
