<header class="site-header">
	<a href="/" class="touch-target-center">/</a>
	<a role="button" href="?theme=dark" aria-hidden="true" class="touch-target-center color-switcher" on:click|preventDefault={() => {dark = !dark}}>Aa</a>

	{#if !dark}
		<style>
			:root {
				--bg-l: 100%;
				--fg-l: 0%;
				--sep-fg-a: .15;

				color-scheme: light;
			}

			:is(pre,code) .token {
				color: var(--fg) !important;
			}
		</style>
	{/if}
</header>

<style>
	* {
		box-sizing: border-box;
	}

	.site-header {
		padding: 2em var(--view-inline) 0;
		margin-block-end: calc(.5 * var(--space, 1rem));
		display: flex;
		justify-content: space-between;
	}

	.site-header a {
		text-decoration: none;
		outline: none;
	}

	.color-switcher::after,
	.color-switcher,
	.site-header a:is(:hover, :focus-visible) {
		box-shadow: inset 0 0 0 1px var(--fg);
	}

	.site-header [href="/"] {
		box-shadow: inset 1px 1px;
	}

	.color-switcher {
		background: transparent;
		color: var(--bg);
		position: relative;
	}

	.color-switcher::after {
		background: var(--fg);
		content: "";
		display: block;
		position: absolute;
		inset: 0;
		transform: translate(.5rem, .5rem);
		z-index: -1;
		transition: transform .5s ease;
	}

	.color-switcher:is(:hover,:focus)::after {
		transform: none;
	}
</style>

<script>
	let dark = true;
</script>
