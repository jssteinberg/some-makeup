<header class="site-header">
	<a href="/" class="touch-target-center">/</a>
</header>

<style lang="postcss">
	* {
		box-sizing: border-box;
	}

	.site-header {
		padding: 2em var(--space-edge-x) 0;
		margin-block-end: calc(0.5 * var(--space, 1rem));
		display: flex;
		justify-content: space-between;
	}

	.site-header a {
		text-decoration: none;
		outline: none;
	}

	.site-header a {
		box-shadow: inset 0 0 0 1px var(--fg);
	}

	.site-header a:is(:hover, :focus-visible) {
		box-shadow: inset 0 0 0 2px var(--fg);
	}
</style>
