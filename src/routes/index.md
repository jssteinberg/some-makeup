---
title: some.makeup
description: Makeup some style for the web
layout: no
---

<div class="wrapper">

# _some_**.**[makeup-style](/style)

- <a href="/gradient-text" sveltekit:prefetch>
Gradient Text CSS:
Overused Yet?
</a>

<details>
	<summary title="More"></summary>

	<p>
	<a href="/wip" sveltekit:prefetch>WIP</a>
	</p>
</details>

</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: var(--content-width);
		padding-inline-start: var(--view-inline);
		padding-inline-end: var(--view-inline);

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

	a, summary {
		display: inline-flex;
		flex-wrap: wrap;

		min-height: var(--TOUCH-TARGET-MIN-SIZE, 48px);
		min-width: var(--TOUCH-TARGET-MIN-SIZE, 48px);
	}

	ul a, summary {
		align-items: center;
	}

	ul {
		display: grid;
		gap: 1em;
		list-style: none;
		padding: 0;
	}

	/* Details */

	summary {
		box-shadow: inset 1px -1px;
		cursor: pointer;
		justify-content: center;
		font-size: calc(.5 * var(--TOUCH-TARGET-MIN-SIZE));
	}

	summary::-webkit-details-marker { display: none; }

	summary::before { content: "+"; }

	details[open] summary {
		box-shadow: inset 1px 1px;
	}

	details[open] summary::before {
		transform: rotate(45deg);
	}

	details[open] {
		box-shadow: inset -1px -1px var(--sep-color);
	}
</style>
