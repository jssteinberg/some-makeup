<nav>
	<a class="touch-target" href="/style">Makeup Style</a>
	<a class="touch-target" href="/style/tests">Tests</a>
</nav>

<slot />

<style>
	nav {
		padding: .5rem var(--view-inline);
		display: flex;
		flex-wrap: wrap;
		gap: .5rem 1rem;
	}
</style>
