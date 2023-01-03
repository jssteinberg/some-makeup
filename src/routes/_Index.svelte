<script>
	import Hr from "$lib/Hr.svelte";
</script>

<div class="index-container">
	<div class="index-top">
		<h1>
			Some.<span class="visually-hidden">makeup</span>
		</h1>

		<p>
			<em>Makeup for the web and tools</em>
		</p>

		<ul>
			<li>
				Base CSS library—<a href="/style">makeup-style</a>
			</li>

			<li>
				Code & terminal colors—<a href="/nightcool">nightcool</a>
			</li>
		</ul>
	</div>

	<Hr --hr-width="100%" />

	<slot />
</div>

<style>
	.index-container {
		padding-inline-start: var(--v-inline-gap);
		padding-inline-end: var(--v-inline-gap);

		/* Adjust font-size */
		font-size: clamp(
			var(--font-size) + 0.125rem,
			var(--font-size) + min(0.75vw, 1.5vh),
			1.75rem
		);
	}

	.index-container :global(a) {
		display: block;
		min-height: var(--TOUCH-TARGET-SIZE, 48px);
		min-width: var(--TOUCH-TARGET-SIZE, 48px);
	}

	h1,
	h1 + p em {
		text-transform: lowercase;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0 var(--v-inline-gap);
		list-style: none;
		padding: 0;
	}

	h1,
	h1 + * {
		display: inline;
	}

	h1::before,
	h1 + *::after {
		content: "";
		display: block;
		height: var(--space, 1em);
	}
</style>
