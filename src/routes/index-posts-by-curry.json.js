const rootPages = () => {
	const mdFiles = import.meta.globEager(`./*.md`)
	const getSlug = path => path.replace(/.*\/(.*)\..*$/, "$1")

	return Object.keys(mdFiles)
		.map(path => new Object({
			filePath: path,
			slug: getSlug(path),
			path: `/${getSlug(path)}`,
			title: mdFiles[path].metadata?.title || getSlug(path),
			metadata: mdFiles[path].metadata,
		}))
		.filter(file => ![`index`].includes(file.slug))
}

export async function get({ params }) {
	const { slug } = params
	const pages = rootPages()
	const getProp = (obj, prop, i=null) => {
		const val = prop.split('.').reduce((acc, c) => acc && acc[c], obj)
		return val && typeof i === `number` ? val[i] : val
	}
	const listPosts = (list, hasProp=1) => (prop, i) => !hasProp ?
		list
			.filter(obj => !getProp(obj, prop, i))
		: list
			.filter(obj => getProp(obj, prop, i))
			.sort((a, b) => organize(a, b, prop, i))
	const organize = (a, b, prop, i) => {
		const valA = getProp(a, prop, i)
		const valB = getProp(b, prop, i)

		if (valA instanceof Date)
			return valA - valB
		if (new Date(valA) instanceof Date)
			return new Date(valA) - new Date(valB)
		if (typeof valA === `string`)
			return valA.localCompare(valB)
		return 0
	}

	return { status: 200, body: [
		...listPosts(pages)(`metadata.date`, 0).reverse(),
		...listPosts(pages, false)(`metadata.date`)
			.sort((a, b) => organize(a, b, `title`))
	]}
}
