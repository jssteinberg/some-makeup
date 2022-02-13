import getPostsFrom from '../libs/utils/getPosts.js';

const rootPages = () => {
	const mdFiles = import.meta.globEager(`./*.md`);
	const getSlug = (path) => path.replace(/.*\/(.*)\..*$/, '$1');

	return Object.keys(mdFiles).map(
		(path) =>
			new Object({
				filePath: path,
				slug: getSlug(path),
				path: `/${getSlug(path)}`,
				title: mdFiles[path].metadata?.title || getSlug(path).replace(/-/, ' '),
				date: mdFiles[path].metadata?.date[0] ? new Date(mdFiles[path].metadata.date[0]) : null,
				metadata: mdFiles[path].metadata
			})
	);
};

export const get = async () => {
	const pages = rootPages();

	return {
		status: 200,
		body: getPostsFrom(pages)([`date`, `title`])
	};
};
