<script>
	let classes;

	export let title;
	export { classes as class };
</script>

<footer class={classes}>
	<slot />

	<p class="footer-privacy-statement">
		{title || `This site`} does not collect any data, and does not use cookies or
		other tracking technologies.
	</p>

	<p aria-hidden="true">
		<a
			href="#document"
			tabindex="-1"
			on:click|preventDefault={() => {
				window.scrollTo(0, 0);
			}}
		>
			Top of page
		</a>
	</p>
</footer>

<style>
	footer {
		--_TOUCH-TARGET-SIZE: max(48px, 3rem);
		margin: var(--_TOUCH-TARGET-SIZE) var(--view-inline);
	}

	footer :global(*) {
		font-size: 1em;
		padding: 0;
	}

	footer :global(h2),
	footer :global(h2 + :not(.footer-privacy-statement)),
	footer :global(h2 + :not(.footer-privacy-statement) :not(a)) {
		display: inline;
		margin-inline-end: 1em;
	}

	footer :global(a) {
		display: inline-flex;
		align-items: center;
		min-height: var(--_TOUCH-TARGET-SIZE);
		min-width: var(--_TOUCH-TARGET-SIZE);
		text-transform: lowercase;
		font-variant: small-caps;
	}

	footer :global(h2 + * > :first-child a) {
		justify-content: center;
	}

	footer :global(ul a::before) {
		content: "/";
		font-weight: bolder;
	}
</style>
