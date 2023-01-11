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

<style lang="postcss">
	.index-container {
		padding-inline: var(--v-inline-gap);

		/* Adjust font-size */
		font-size: clamp(
			var(--font-size) + 0.125rem,
			var(--font-size) + min(0.75vw, 1.5vh),
			1.75rem
		);
	}

	.index-container :global(a) {
		display: block;
		min-height: var(--touch-target-size, 48px);
		min-width: var(--touch-target-size, 48px);
	}

	h1,
	h1 + p em {
		text-transform: lowercase;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	/* if supports flex with gap */
	@supports (display: flex) and (gap: 1em) {
		ul {
			display: flex;
			flex-wrap: wrap;
			gap: 0 var(--v-inline-gap);
		}
	}
</style>
