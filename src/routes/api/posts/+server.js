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


	return json(
		allPosts
			.filter(post => !post.path.match(/\+page/gi))
			.sort((a, b) => Date.parse(b.meta.date[0]) - Date.parse(a.meta.date[0]))
	);
}
