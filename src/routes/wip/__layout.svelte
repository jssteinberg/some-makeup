<script>
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';

	let loadGlobalCss = true;

	onDestroy(() => {
		loadGlobalCss = false;
	});
</script>

<div class={$page.url.pathname.replace(/^\//, '').replace(/\//g, '-') || 'home'}>
	<slot />

	<style>
		@import "/line-height.css";
	</style>
</div>

<style>
	div {
		font-family: var(--sans);
		text-align: center;
		margin: 0 auto;
	}

	div :global(:where(h1)) {
		--h1-added-lead: .125;
		font-weight: 800; font-weight: 900;
		margin-block-end: calc(2 * var(--spacer, 1rem));
	}

	/* Link */
	div :global(a),
	div :global(.link) {
		color: inherit;
		text-decoration: underline;
		text-decoration-color: var(--sep-color);
		text-decoration-thickness: calc(2 * var(--decor-width));
		text-underline-offset: 2px;
	}

	:global(a:is(:hover)),
	:global(.link:is(:hover)) {
		text-decoration-color: currentColor;
	}

	/* List styles */
	div :global(ol) { list-style: decimal inside; }
	div :global(ul) { list-style: disc inside; }

	/* Horizontal rule */
	div :global(hr) {
		all: unset;
		background-image: linear-gradient(90deg, transparent, var(--sep-color), transparent);
		display: block;
		margin: calc(3 * var(--spacer, 1rem) - .5 * var(--decor-width)) auto;
		padding: 0;
		position: relative;
		height: var(--decor-width);
		width: calc(100% - var(--body-gap-inline) * 2);
	}
	div :global(hr::before) {
		--size: calc(1 * var(--spacer, 1em));
		border: var(--decor-width) solid;
		border-image-slice: 1;
		border-image-source: linear-gradient(
			var(--from, hsl(var(--fg-h), var(--fg-s), calc(var(--fg-l) * 0.3))),
			hsla(var(--fg-h) var(--fg-s) calc(var(--fg-l) * 0.3) / .1)
		);
		content: '';
		display: block;
		position: absolute;
		top: calc(var(--size) * -.5 - -.5 * var(--decor-width));
		left: calc(50% + var(--size) * -0.5 - var(--decor-width) / 2);
		width: var(--size);
		height: var(--size);
		transform: rotate(-225deg);
	}

	/* Blockquote */
	div :global(blockquote) {
		--blockquote-border-size: calc(var(--spacer, 1rem) * 0.1);
		margin-inline-start: 0;
		margin-inline-end: 0;
		padding-inline-start: calc(var(--spacer, 1em) - var(--blockquote-border-size));
		border-left: var(--blockquote-border-size) solid;
	}
</style>
