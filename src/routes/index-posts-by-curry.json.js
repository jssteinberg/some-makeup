import listPosts, { sortPosts } from '../libs/utils/listPosts.js';

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
		body: listPosts(pages)([`date`, `title`]),
		// body: listPosts(pages)([[`metadate.date`, 0], `title`])
	};
}
