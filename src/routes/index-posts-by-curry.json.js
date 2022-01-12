const rootPages = () => {
	const mdFiles = import.meta.globEager(`./*.md`)
	const getSlug = (path) => path.replace(/.*\/(.*)\..*$/, "$1")

	return Object.keys(mdFiles)
		.map(path => new Object({
			filePath: path,
			slug: getSlug(path),
			path: `/${getSlug(path)}`,
			title: mdFiles[path].metadata?.title || getSlug(path),
			metadata: mdFiles[path].metadata,
		}))
		.filter(file => !["index"].includes(file.slug))
}

export async function get({ params }) {
	const { slug } = params
	const pages = rootPages()
	const getPropValFromObj = (obj, prop) =>
		prop.split('.').reduce((acc, c) => acc && acc[c], obj)

	const sublist = (page, notHas = false) => {
		return prop =>
			(notHas === `!`) || notHas ?
				page.filter(doc => !getPropValFromObj(doc,prop)) :
				page.filter(doc => getPropValFromObj(doc,prop))
	}

	const organize = (pageA, pageB, [propStr, index = null]) => {
		const valA = typeof index === 'number' ?
			getPropValFromObj(pageA,propStr)[index] :
			getPropValFromObj(pageA,propStr)
		const valB = typeof index === 'number' ?
			getPropValFromObj(pageA,propStr)[index] :
			getPropValFromObj(pageA,propStr)

		if (new Date(valA) instanceof Date)
			return new Date(valA) - new Date(valB)
		if (typeof valA === 'string')
			return valA > valB ? -1 : valB > valA ? 1 : 0
		return 0
	}

	return { status: 200, body: [
		...sublist(pages)(`metadata.date`)
		.sort((pageA, pageB) => organize(pageA, pageB, [`metadata.date`, 0]))
		.reverse(),
		...sublist(pages, `!`)(`metadata.date`)
		.sort((pageA, pageB) => organize(pageA, pageB, [`title`]))
	]}
}
