<script>
	import { page } from '$app/stores';
	// Featured
	import Dice from '../libs/css-dice/dice.svelte';

	export let posts;
	export let biggerTitles;
</script>

<ul class={`posts ${biggerTitles ? `bigger-titles` : ``}`}>
	{#each posts as post}
		<li>
			<a
				id={post.title.toLowerCase()}
				aria-current={$page.url.pathname === post.path ? 'page' : undefined}
				href={post.path}
				sveltekit:prefetch
			>
				{#if post.metadata?.set && post.metadata.set.includes('featured')}
					<Dice />
				{/if}

				<span class="post-title" lang={post.metadata?.lang ? post.metadata.lang : undefined}
					>{@html post.title}</span
				>

				{#if post.metadata?.date}
					<small class="date">
						<time>{post.metadata.date[0]}</time>
					</small>
				{/if}
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding: 0;
		display: grid;
		justify-content: center;
		grid-template-columns: min(20em, 100%);
	}

	a {
		--padding-block: calc(.5 * var(--spacer, 1rem));
		--min-height: calc(var(--TOUCH-TARGET-MIN-SIZE) - var(--padding-block) * 2);

		display: grid;
		align-items: center;
		position: relative;

		margin: var(--spacer, 1rem) 0;
		min-height: var(--min-height);
		padding: var(--padding-block) 1em;

		text-decoration: none;
	}

	a::after {
		background: var(--bg-to);
		border-radius: inherit;
		content: '';
		position: absolute;
		z-index: -1;
		top: -.5rem; right: 0; bottom: -.5rem; left: 0;
		transition: opacity .25s ease;
		outline: 2px solid hsla(var(--fg-h), var(--fg-s), var(--fg-l), 0.1);
	}

	a:not(:is(:focus,:active))::after {
		opacity: 0;
	}

	a:focus {
		--bg-to: linear-gradient(
			-160deg,
			hsla(var(--fg-h), var(--fg-s), var(--fg-l), 0.015),
			hsla(var(--fg-h), var(--fg-s), var(--fg-l), 0.025)
		);
		outline: none;
	}

	a:active {
		--bg-to: hsla(var(--fg-h), var(--fg-s), var(--fg-l), 0.1);
	}

	.post-title {
		font-weight: bold;
		text-transform: uppercase;
	}

	a:hover .post-title {
		text-decoration: underline;
		text-underline-offset: var(--decor-width);
		text-decoration-thickness: var(--decor-width);
	}

	@media (min-width: 600px) {
		.bigger-titles .post-title {
			/* Bigger size, same leading */
			--line-height: 1.3;
			font-size: calc(1em * var(--RLH) / var(--line-height));
			line-height: var(--line-height);
		}
	}

</style>
