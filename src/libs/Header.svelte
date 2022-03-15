<nav class="site-header">
	<a href="/" class="touch-target">/</a>
</nav>

<style>
	.site-header {
		padding: var(--body-gap-inline);
		padding-block-end: var(--space, 1rem);
	}

	.site-header a {
		box-shadow: 0 0 0 1px, inset 0 -1ex;
		position: relative;
		text-decoration: none;
	}

	.site-header a:focus {
		outline: none;
	}

	.site-header a:is(:hover, :focus)::after {
		opacity: 1;
	}

	.site-header a::after {
		background: black;
		content: '';
		opacity: 0;
		position: absolute;
		inset: 0;
		z-index: -1;
	}
</style>
