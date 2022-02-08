<script>
	import { page } from '$app/stores';
	// Featured
	import Dice from '../libs/css-dice/dice.svelte';

	export let posts;
</script>

<ul class="posts">
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
	.posts {
		list-style: none;
		padding: 0;
	}

	a {
		--padding-block: calc(0.5 * var(--spacer, 1rem));
		--min-height: calc(var(--TOUCH-TARGET-MIN-SIZE) - var(--padding-block) * 2);

		display: grid;
		align-items: center;

		margin: var(--spacer, 1rem) 0;
		min-height: var(--min-height);
		padding: var(--padding-block) 1em;

		border-radius: 0.5rem;
		text-decoration: none;
		transition: background 0.25s;
	}

	a:hover {
		background: hsla(var(--fg-h), var(--fg-s), var(--fg-l), 0.03);
	}

	a:focus {
		background: linear-gradient(
			-160deg,
			hsla(var(--fg-h), var(--fg-s), var(--fg-l), 0.025),
			hsla(var(--fg-h), var(--fg-s), var(--fg-l), 0.045)
		);
		outline: 2px solid hsla(var(--fg-h), var(--fg-s), var(--fg-l), 0.1);
	}

	a:active {
		background: hsla(var(--fg-h), var(--fg-s), var(--fg-l), 0.1);
	}

	.post-title {
		font-weight: bold;
	}
</style>
