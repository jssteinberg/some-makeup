<script context="module">
	export const load = async ({ fetch }) => {
		try {
			const response = await fetch("/index-posts-by-curry.json");
			const posts = await response.json();

			return {
				props: { posts },
			};
		} catch (error) {
			console.error(`Error in load function for /: ${error}`);
		}
	};
</script>

<script>
	import Dice from "../libs/css-dice/dice.svelte";
	import AccentHue from "../libs/AccentHue.svelte";
	import { page } from "$app/stores";

	export let posts;

	let hue = 358.7;
</script>

<svelte:head>
	<title>Some Makeup</title>
	<meta
		name="description"
		content={`
		Presenting the ideas of Johan Sebergsen Steinberg—frontend, design or
		societally related—with some makeup.
	`
			.trim()
			.replace(/[\n\t]/g, " ")}
	/>
</svelte:head>

<ul class="posts">
	{#each posts as post}
		<li>
			<a
				id={post.title.toLowerCase()}
				aria-current={$page.path === post.path ? "page" : undefined}
				href={post.path}
				sveltekit:prefetch
			>
				{#if post.metadata?.set && post.metadata.set.includes("featured")}
					<Dice />
				{/if}

				<span
					class="post-title link"
					lang={post.metadata?.lang ? post.metadata.lang : undefined}
					>{post.title}</span
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

<AccentHue {hue} />

<style>
	.posts {
		list-style: none;
		padding: 0;
	}

	.posts a {
		--padding-block: calc(0.5 * var(--spacer, 1rem));
		--min-height: calc(var(--TOUCH-TARGET-MIN-SIZE) - var(--padding-block) * 2);

		display: grid;
		align-items: center;

		margin: var(--spacer, 1rem) 0;
		min-height: var(--min-height);
		padding: var(--padding-block) 1em;

		border-radius: 0.5rem;
		text-decoration: none;
		transition: background .25s;
	}

	.posts a:hover {
		background: hsla(var(--fg-h), var(--fg-s), var(--fg-l), 0.03);
	}

	.posts a:focus {
		outline: 2px solid hsla(var(--fg-h), var(--fg-s), var(--fg-l), 0.06);
		background: linear-gradient(
			-160deg,
			hsla(var(--fg-h), var(--fg-s), var(--fg-l), 0.025),
			hsla(var(--fg-h), var(--fg-s), var(--fg-l), 0.045)
		);
	}

	.post-title {
		text-transform: uppercase;
	}
</style>
