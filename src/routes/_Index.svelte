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
		</ul>
	</div>

	<Hr --hr-width="100%" --hr-size="max(3rem, 48px)" />

	<slot />
</div>

<style lang="postcss">
	.index-container {
		/* Adjust font-size */
		font-size: var(--text-body);
		/*
		font-size: clamp(
			var(--text-body) + 0.125rem,
			var(--text-body) + min(0.75vw, 1.5vh),
			1.5rem
		);
		*/
	}

	.index-top {
		padding-inline: var(--space-edge-x);
	}

	.index-container :global(a) {
		display: block;
		min-height: 2.5em;
		min-width: 2.5em;
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
			gap: 0 var(--space-edge-x);
		}
	}
</style>
