<script>
	import Hr from "$lib/Hr.svelte";
</script>

<div class="index-container">
	<div class="index-top">
		<h1>
			Some.<span class="visually-hidden">makeup</span>
		</h1>

		<p>
			<em>Makeup for the web and tools.</em>
		</p>

		<p>
			Base CSS library—<a href="/style">makeup-style</a>
		</p>

		<p>
			Code & terminal colors—<a href="/nightcool">nightcool</a>
		</p>
	</div>

	<Hr --hr-width="100%" />

	<slot />
</div>

<style>
	.index-container {
		padding-inline-start: var(--view-inline);
		padding-inline-end: var(--view-inline);

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
</style>
