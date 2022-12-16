export const load = async ({ fetch }) => {
	const response = await fetch(`/api/posts/wip`);
	const posts = await response.json();

	return {
		posts
	};
}
