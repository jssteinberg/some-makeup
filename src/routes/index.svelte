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
	import AccentHue from "../libs/AccentHue.svelte";
	import PostList from "../libs/PostList.svelte";

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

<PostList {posts} />
<AccentHue {hue} />
