<script>
	import { page } from '$app/stores';
	// Featured
	import Dice from './css-dice/dice.svelte';

	export let posts;
	export let biggerTitles;
</script>

{#if posts}
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

					<span class="post-title" lang={post.metadata?.lang ? post.metadata.lang : undefined}>
						{@html post.title}
					</span>

					{#if post.metadata?.date}
						<small class="date">
							<time>{post.metadata.date[0]}</time>
						</small>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
{/if}

<style>
	ul {
		list-style: none;
		padding: 0;
		display: grid;
		justify-content: start;
		grid-template-columns: min(20em, 100%);
	}

	a {
		--padding-block: calc(.5 * var(--spacer, 1rem));
		--min-height: calc(var(--TOUCH-TARGET-SIZE) - var(--padding-block) * 2);

		display: grid;
		align-items: center;
		position: relative;

		margin: var(--space, 1rem) 0;
		min-height: var(--min-height);
		padding: var(--padding-block) 0;

		text-decoration: none;
	}

	.post-title {
		font-weight: bold;
		text-transform: uppercase;
	}

	a:hover .post-title {
		text-decoration: underline;
		text-decoration-color: var(--sep-color);
		text-underline-offset: 2px;
		text-decoration-thickness: calc(2 * var(--decor-width));
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
