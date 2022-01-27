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
	import MetaTags from "/src/libs/MetaTags.svelte";
	import AccentHue from "/src/libs/AccentHue.svelte";
	import PostList from "/src/libs/PostList.svelte";

	export let posts;

	let hue = 358.7;
</script>

<MetaTags
	data={{
		title: `Some Makeup`,
		description: `Makeup frontend, design and life.`,
	}}
/>

<PostList {posts} />
<AccentHue {hue} />
