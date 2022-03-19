<nav>
	<a class="touch-target" href="/style">Makeup Style</a>
	<a class="touch-target" href="/style/test">Test</a>
</nav>

<slot />

<style>
	nav {
		padding: .5rem var(--body-gap-inline);
		
		display: flex;
		flex-wrap: wrap;
		gap: .5rem;
	}
</style>
