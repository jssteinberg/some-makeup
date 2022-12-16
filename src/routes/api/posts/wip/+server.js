import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPostFiles = import.meta.glob('/src/routes/wip/**/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const all = await resolver();
			const postPath = path.match(/\+page\./g)
				? path
					.slice(11, -3)
					.replace(/\/[^/]*$/g, ``)
				: path.slice(11, -3);

			return {
				meta: all.metadata,
				path: postPath,
			};
		})
	);

	return json(
		allPosts
			.sort((a, b) => (a.meta?.title || `z`).localeCompare(b.meta?.title || `z`))
			.sort((a, b) => {
				const getDate = meta => meta?.date && meta.date[0]
					? Date.parse(meta.date[0])
					: new Date("1990-12-20");

				const dateA = getDate(a.meta);
				const dateB = getDate(b.meta);

				return dateB - dateA;
			})
	);
}
