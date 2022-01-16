const getProp = (obj, prop, i=null) => {
	const val = prop.split('.').reduce((acc, c) => acc && acc[c], obj)
	return val && typeof i === `number` ? val[i] : val
}

export const sortPosts = (a, b, prop, i) => {
	const valA = getProp(a, prop, i)
	const valB = getProp(b, prop, i)

	if (valA instanceof Date && valB instanceof Date)
		return valA - valB
	if (new Date(valA) instanceof Date)
		return new Date(valB) instanceof Date ? new Date(valA) - new Date(valB) : 0
	if (typeof valA === `string` && typeof valB === `string`)
		return valA.localCompare(valB)
	return 0
}

const listPosts = (list=[], opt={ exclude: 0 }) => (props=[[]], i=0) => {
	if (!(props.length > i)) return list

	const reverse = opt?.reverse ?? true
	const prop = props[i] instanceof Array ? props[i][0] : props[i]
	const propI = props[i] instanceof Array ? props[i][1] : null
	const newList = !opt?.exclude ?
		listPosts(list, opt)(props, i + 1)
			.sort((a, b) => sortPosts(a, b, prop, propI)) :
		listPosts(list, opt)(props, i + 1)
			.filter(obj => !getProp(obj, prop, propI))

	return reverse ? newList.reverse() : newList
}

export default listPosts

/*
Example use:

listPosts(pages)([`date`, `title`])

listPosts(pages)([[`metadate.date`, 0], `title`])

pages
	.sort((a, b) => sortPosts(a, b, `title`)).reverse()
	.sort((a, b) => sortPosts(a, b, `metadate.date`, 0)).reverse()
*/
