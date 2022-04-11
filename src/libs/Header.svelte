<header class="site-header">
	<a href="/" class="touch-target-center">/</a>
</header>

<style>
	* {
		box-sizing: border-box;
	}

	.site-header {
		padding: 2em var(--view-inline) 0;
		margin-block-end: calc(.5 * var(--space, 1rem));
	}

	.site-header a {
		box-shadow: inset 1px 1px;
		text-decoration: none;
		outline: none;
	}

	.site-header a:is(:hover, :focus-visible) {
		box-shadow: inset 0 0 0 1px;
	}
</style>
