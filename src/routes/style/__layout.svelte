<nav>
	<a class="touch-target" href="/style">Makeup Style</a>
	<a class="touch-target" href="/style/tests">Tests</a>
</nav>

<slot />

<style>
	nav {
		padding: .5rem 0;
		width: min(
			100vw - 2 * var(--view-inline),
			var(--max-content-width)
		);
		margin: 0 auto;
		
		display: flex;
		flex-wrap: wrap;
		gap: .5rem;
	}
</style>
