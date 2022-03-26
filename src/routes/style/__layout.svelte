<nav>
	<a class="touch-target" href="/style" sveltekit:prefetch>makeup-style</a>
	<a class="touch-target" href="/style/tests" sveltekit:prefetch>Tests</a>
</nav>

<slot />

<style>
	nav {
		padding: .5rem var(--view-inline);
		display: flex;
		flex-wrap: wrap;
		gap: .5rem 1rem;
		text-transform: lowercase;
	}
</style>
