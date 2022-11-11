import { fetchMarkdownPosts } from '$libs/utils/fetchMarkdownPosts';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();

	// const sortedPosts = allPosts.sort((a, b) => {
	// 	return new Date(b.meta.date[0]) - new Date(a.meta.date[0]);
	// });

	return json(allPosts.filter(post => !post.path.match(/\+page/gi)));
}
