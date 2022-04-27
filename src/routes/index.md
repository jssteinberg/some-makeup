---
title: some.makeup
description: Makeup some style for the web
layout: no
---

<div class="wrapper">

# _some_**.**[makeup-style](/style)

- <small><time>2022-04-20</time></small>
	<a href="/manrope" sveltekit:prefetch>

	Manrope `@font-face`

	</a>
- <small><time>2022-01-26</time></small>
	<a href="/gradient-text" sveltekit:prefetch>

	Gradient Text CSS: Overused Yet?

	</a>

</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: var(--content-width);
		padding-inline-start: var(--view-inline);
		padding-inline-end: var(--view-inline);
		text-rendering: optimizeLegibility;

		/* Adjust font-size */
		font-size: clamp(
			var(--font-size) + .125rem,
			var(--font-size) + min(1vw,1.5vh),
			2.125rem
		);
	}

	h1 strong::after {
		content: '';
		display: block;
	}

	a {
		display: inline-flex;
		flex-wrap: wrap;

		min-height: var(--TOUCH-TARGET-SIZE, 48px);
		min-width: var(--TOUCH-TARGET-SIZE, 48px);
	}

	ul a > p {
		margin: 0;
	}

	ul {
		display: grid;
		gap: 1em;
		list-style: none;
		padding: 0;
	}

	time {
		display: block;
	}
</style>
