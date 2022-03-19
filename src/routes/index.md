---
title: some.makeup
description: makeup style for life
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

</div>

<style>
	.wrapper {
		font-size: clamp(var(--font-size) + .125rem, var(--font-size) + min(1vw,1.5vh), 2.125rem);

		padding-inline-start: var(--body-gap-inline);
		padding-inline-end: var(--body-gap-inline);

		display: grid;
		grid-template-columns: min(100%, var(--base-width));
		justify-content: center;
	}

	h1 strong::after {
		content: '';
		display: block;
	}

	/* Touch target class */
	a {
		display: inline-flex;
		align-items: center;
		flex-wrap: wrap;

		min-height: var(--TOUCH-TARGET-MIN-SIZE);
		min-width: var(--TOUCH-TARGET-MIN-SIZE);
	}

	ul {
		padding: 0;
		list-style: none;
	}
</style>
