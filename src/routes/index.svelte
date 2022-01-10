<script context="module">
	import sortPosts from '../libs/utils/getSortedListOfMarkdownPosts';

	const markdownFiles = import.meta.globEager(`./*.md`);
	const getSlug = (path) => path.replace(/.*\/(.*)\..*$/, "$1");
	const data = Object.keys(markdownFiles)
		.map((path) => {
			return {
				filePath: path,
				slug: getSlug(path),
				path: `/${getSlug(path)}`,
				title: markdownFiles[path].metadata?.title || getSlug(path),
				metadata: markdownFiles[path].metadata,
			};
		})
		.filter((item) => !["index"].includes(item.title));

	export async function load() {
		return {
			props: {
				posts: sortPosts(data, { sortBy: { property: ['metadata.date'], type: 'date' } }),
			},
		};
	}
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
	<meta name="description" content={(`
		Presenting the ideas of Johan Sebergsen Steinberg—frontend, design or
		societally related—with some makeup.
		`).trim().replace(/[\n\t]/g, ' ')}>
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
				{#if post.metadata?.set && post.metadata.set.includes('featured')}
					<Dice />
				{/if}

				<span class="post-title link" lang={post.metadata?.lang ? post.metadata.lang : undefined}>{post.title}</span>

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
		--padding-block: calc(.5 * var(--spacer, 1rem));
		--min-height: calc(var(--TOUCH-TARGET-MIN-SIZE) - var(--padding-block) * 2);

		display: grid;
		align-items: center;
		margin: var(--spacer, 1rem) 0;
		min-height: var(--min-height);
		padding: var(--padding-block) 1em calc(var(--padding-block) + var(--shadow-size));

		font-weight: 300;
		text-decoration: none;
	}

	.post-title {
		text-transform:  uppercase;
	}
</style>
