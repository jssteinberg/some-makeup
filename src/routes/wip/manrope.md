# Manrope Font

> A modern sans-serif for everyone.

---[manropefont.com](https://manropefont.com/)

It's open source and is available as a [variable font](https://web.dev/variable-fonts/) (don't use Google Fonts though).

<style>
	h1 ~ *,
	h1 {
		font-family: Manrope;
	}

	h1 {
		--h1-line-span: 3;
		--h1-added-lead: .4;
		font-variation-settings:
			'wght' 375;
	}

	h1 ~ :not(blockquote) {
		font-variation-settings:
			'wght' 375;
	}

	@media (min-width: 1200px) {
		h1 {
			--h1-line-span: 5;
		}
	}
</style>

<script>
	import FontManrope from '$libs/FontManrope.svelte'
</script>

<FontManrope />
