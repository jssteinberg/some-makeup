---
title: some.makeup
description: Makeup some style for the web
layout: no
---

<div class="wrapper">

# _some_**.**[makeup-style](/style)

- <a href="/vanilla-svelte-parallax" sveltekit:prefetch>
	Vanilla Svelte Parallax
	</a>

- <a href="/gradient-text" sveltekit:prefetch>
	Gradient Text CSS:
	Overused Yet?
	</a>

- <a href="/dice" sveltekit:prefetch>
	CSS Dice
	</a>

</div>

<style>
	.wrapper {
		font-size: clamp(
			var(--font-size) + .125rem,
			var(--font-size) + min(1vw,1.5vh),
			2.125rem
		);

		padding-inline-start: var(--body-gap-inline);
		padding-inline-end: var(--body-gap-inline);

		display: grid;
		grid-template-columns: var(--content-width);
		justify-content: center;
	}

	h1 strong::after {
		content: '';
		display: block;
	}

	a {
		display: inline-flex;
		flex-wrap: wrap;

		min-height: var(--TOUCH-TARGET-MIN-SIZE, 48px);
		min-width: var(--TOUCH-TARGET-MIN-SIZE, 48px);
	}

	ul {
		display: grid;
		gap: 1em;
		list-style: none;
		padding: 0;
	}

	ul a {
		align-items: center;
	}
</style>
