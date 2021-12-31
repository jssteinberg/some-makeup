<script context="module">
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
				posts: data,
			},
		};
	}
</script>

<script>
	import "../libs/app.css";

	import Dice from "../libs/css-dice/dice.svelte";
	import AccentHue from "../libs/AccentHue.svelte";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import { page } from "$app/stores";

	export let posts;


	let hue = 358.7;
	let js = "no-js";

	onMount(() => (js = "js"));
</script>

<svelte:head>
	<title>Some makeup</title>
</svelte:head>

<Dice />
<p>
	<a
		href="{$page.path}#dice"
		on:click|preventDefault={() => goto("/dice")}
		class:js
		>
		See Dice
	</a>
</p>

<ul class="posts">
	{#each posts as post}
		<li>
			<a
				class="touch-target"
				id={post.title.toLowerCase()}
				aria-current={$page.path === post.path ? "page" : undefined}
				href={post.path}
				sveltekit:prefetch
			>
				<span class="post-title link">{post.title}</span>

				{#if post.metadata?.date}
					<span class="date">
						<time>{post.metadata.date[0]}</time>
					</span>
				{/if}
			</a>
		</li>
	{/each}
</ul>

<AccentHue {hue} />

<style>
	.js:hover {
		cursor: pointer;
	}

	.posts {
		list-style: none;
		padding: 0;
	}
</style>
