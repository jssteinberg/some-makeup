import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPostFiles = import.meta.glob('/src/routes/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath,
			};
		})
	);

	// const sortedPosts = allPosts.sort((a, b) => {
	// 	return new Date(b.meta.date[0]) - new Date(a.meta.date[0]);
	// });

	return json(allPosts.filter(post => !post.path.match(/\+page/gi)));
}
