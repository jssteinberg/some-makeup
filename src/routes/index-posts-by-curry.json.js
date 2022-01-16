import getPostsFrom from '../libs/utils/getPosts.js';

const rootPages = () => {
	const mdFiles = import.meta.globEager(`./*.md`);
	const getSlug = path => path.replace(/.*\/(.*)\..*$/, "$1");

	return Object.keys(mdFiles)
		.map(path => new Object({
			filePath: path,
			slug: getSlug(path),
			path: `/${getSlug(path)}`,
			title: mdFiles[path].metadata?.title || getSlug(path),
			date: mdFiles[path].metadata?.date[0] ? new Date(mdFiles[path].metadata.date[0]) : null,
			metadata: mdFiles[path].metadata,
		}));
};

export async function get({ params }) {
	const { slug } = params;
	const pages = rootPages();

	return {
		status: 200,
<<<<<<< HEAD
		body: getPostsFrom(pages)([`date`, `title`]),
=======
		body: listPosts(pages)([`date`, `title`]),
>>>>>>> c95038f9719780b7ca994795d7427d5a05107569
		// body: listPosts(pages)([[`metadate.date`, 0], `title`])
	};
}
