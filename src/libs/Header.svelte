<header class="site-header">
	<a href="/" class="touch-target-center">/</a>
	<a
		href={colorThemeParameter}
		role="button"
		title="Dark/light background and colors"
		class="touch-target-center color-switcher"
		on:click|preventDefault={setColorThemeParameter}
	>
		<span aria-hidden="true">Aa</span>
	</a>

	{#if !dark}
		<style>
			:root {
				--bg-l: 100%;
				--fg-l: 0%;
				--sep-fg-l: 90%;
				--color-scheme: light;
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
	.site-header a:hover {
		box-shadow: inset 0 0 0 1px var(--fg);
	}

	.site-header a:focus-visible {
		box-shadow: inset 0 0 0 2px var(--fg);
	}

	.site-header [href="/"] {
		box-shadow: inset 1px 1px;
	}

	.color-switcher {
		background: var(--fg);
		color: var(--bg);
		position: relative;
		z-index: 2;
	}

	.color-switcher::after {
		--_off: calc(.5rem - 1px);
		--_duration: .375s;

		background: transparent;
		content: "";
		display: block;
		outline: none;
		transform: translate(0,0);
		transition: transform var(--_duration) ease;

		position: absolute;
		inset: calc(-1 * var(--_off)) var(--_off) var(--_off) calc(-1 * var(--_off));
		z-index: 1;
	}

	.color-switcher:is(:hover,:focus-visible)::after {
		transform: translate(var(--_off), var(--_off));
	}

	.color-switcher:focus-visible::after {
		animation: outline calc(.75 * var(--_duration)) forwards var(--_duration);
	}

	@keyframes outline {
		from {
			outline: 2px solid transparent;
			outline-offset: 0;
		}
		to {
			outline: 2px solid var(--fg);
			outline-offset: 1px;
		}
	}
</style>

<script>
	const setColorThemeParameter = () => {
		dark = !dark;
		colorThemeParameter = getColorThemeParameter();
	};
	const getColorThemeParameter = () => {
		return `?c=${dark ? `light` : `dark`}`;
	};
	let dark = true;
	let colorThemeParameter = getColorThemeParameter();
</script>
