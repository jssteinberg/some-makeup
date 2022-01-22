import {getValue} from './loSplash.js'

export const sortPosts = (a, b, key, i) => {
	const valA = getValue(a, key, i)
	const valB = getValue(b, key, i)

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
	const key = props[i] instanceof Array ? props[i][0] : props[i]
	const valIndex = props[i] instanceof Array ? props[i][1] : null
	const newList = !opt?.exclude ?
		listPosts(list, opt)(props, i + 1)
			.sort((a, b) => sortPosts(a, b, key, valIndex)) :
		listPosts(list, opt)(props, i + 1)
			.filter(obj => !getValue(obj, key, valIndex))

	return reverse ? newList.reverse() : newList
}

export default listPosts

/*
# listPosts

A mini library to sort a list of posts, or exclude posts that does not have the required properties. It uses currying which was kind of an experiment to use something I didn't know very well---it seems to make the main function quite flexible and readable. Not really necessary for this functionality though.

Todo: add filter on normal not exclude (use recursive function in filter that returns false if not has any props)

Example use:

listPosts(pages)([`date`, `title`])

listPosts(pages)([[`metadate.date`, 0], `title`])

listPosts(pages, { exclude: true })([`date`])

pages
	.sort((a, b) => sortPosts(a, b, `title`)).reverse()
	.sort((a, b) => sortPosts(a, b, `metadate.date`, 0)).reverse()

---

Without currying the usage of the main function would be something like:

listPosts(pages, [`date`, `title`])

listPosts(pages, [[`metadate.date`, 0], `title`])

listPosts(pages, [`date`], { exclude: true })

*/
