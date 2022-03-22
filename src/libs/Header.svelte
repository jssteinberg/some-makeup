<header class="site-header">
	<a href="/" class="touch-target-center">/</a>
</header>

<style>
	.site-header {
		padding: var(--view-inline);
		padding-block-end: var(--space, 1rem);
	}

	.site-header a {
		box-shadow: -1px -1px;
		font-weight: bold;
		text-decoration: none;
	}

	.site-header a:focus {
		outline: none;
	}

	.site-header a:is(:hover, :focus) {
		box-shadow: 0 0 0 1px;
	}
</style>
