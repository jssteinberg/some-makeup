<script context="module">
	export const load = async ({ fetch }) => {
		try {
			const response = await fetch('/index-posts-by-curry.json');
			const posts = await response.json();

			return {
				props: { posts }
			};
		} catch (error) {
			console.error(`Error in load function for /: ${error}`);
			return { props: { posts: [] }}
		}
	};
</script>

<script>
	import MetaTags from '/src/libs/MetaTags.svelte';
	import AccentHue from '/src/libs/AccentHue.svelte';
	import PostList from '/src/libs/PostList.svelte';
	import Sep from '../libs/Sep.svelte';

	export let posts;

	let hue = 358.7;
</script>

<MetaTags
	data={{
		title: `Some Makeup`,
		description: `Makeup frontend, design and life.`
	}}
/>

<Sep />
<PostList {posts} />

<AccentHue {hue} />
