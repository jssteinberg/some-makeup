// NOT USED! Kept if need code...
import fs from 'fs';
import path from 'path';

const imports = import.meta.globEager('./*.md');

/**
	* Return md|mdx files from folder (also "index" named markdown files from subfolders, first level).
	* @arg {string} path
	* @arg {object} opt
	* @arg {array} opt.ignore - array of filesnames to ignore
	*/
const getMarkdownFilesSyncFromFolder = (folderPath, opt = { ignore: ['index'] }) => {
	const ignore = typeof opt !== undefined && typeof opt.ignore !== undefined ? opt.ignore : [];

	try {
		const fileTypes = /(.md|.mdx)$/i
		const files = fs.readdirSync(folderPath)
			.filter((item) => {
				if (ignore.includes(path.basename(item)
					.replace(/(\.|\/).*$/, ''))) return false
				if (path.extname(item).match(fileTypes)) return true;
				// else if (path.extname(in) === '/' ...) ... return true;
				else return false;
			})
			// .map((item) => {
			// 	if (path.extname(item) === '/' ...) ... return in + 'index.(md|mdx)'
			// });

		return files;
	} catch (error) {
		console.log(error);
		return [];
	}
};

export function get() {
	// const files = await getMarkdownFilesSyncFromFolder('src/routes/');
	// const data = await JSON.stringify(files);
	// console.log(data);
	console.log(imports);

	const data = JSON.stringify(imports);

	if (data) return { data };
}
