/** (String|Array prop, Object obj, [index number=0]) - get prop val, even if deepl
 	* @return {any} value */
const getValFromProp = (prop, obj, index = 0) => {
	if (prop instanceof Array && prop.length > index) {
		// turn object.property string to object's property value
		const res = prop[index].split('.').reduce((acc, c) => acc && acc[c], obj);

		// can be recursive
		if (!res) return getValFromProp(prop, obj, index + 1);
		else return res;

	} else if (typeof prop === 'string') {
		// turn object.property string to object's property value
		return prop.split('.').reduce((acc, c) => acc && acc[c], obj);
	}
};

/** (string, object[]) - @return {object[]} */
const getListSortedByString = (arr, sortByProp) => arr.
	sort((a,b) => {
		// remove tags
		const getSortReadyString = (str) => typeof str === 'string' ? str.toLowerCase().replace(/<[^>]+>/g, '') : str;

		a = getSortReadyString(getValFromProp(sortByProp, a));
		b = getSortReadyString(getValFromProp(sortByProp, b));

		return a > b ? -1 : b > a ? 1 : 0;
	}).
	reverse();

/** @args (object[], object{ property: string|object[], type: string, [index: number] })
	* @return {object[]} */
const getListSortedByDateString = (list, sortBy) => {
	// if sortby val is array, return single date val by index
	const getSingleDateString = (val) => val instanceof Array ?
		val.slice(typeof sortBy.index !== 'undefined' ? sortBy.index : 0)[0]
		: val;

	return list.
		sort((a,b) => {

			const aDate = getSingleDateString(
				getValFromProp(sortBy.property, a)
			);
			const bDate = getSingleDateString(
				getValFromProp(sortBy.property, b)
			);

			if (aDate && bDate)
				return new Date(bDate) - new Date(aDate);
			if (aDate) return -1;
			if (bDate) return 1;
			return 0;
		});
};

/** (object[], object) - @return {object[]} */
const getListSortedByType = (list, sortBy) => {
	if (
		sortBy.type
		&& sortBy.type.toLowerCase() === 'date'
	) {
		const sortedSubList = getListSortedByDateString(
			list.filter((item) => typeof getValFromProp(sortBy.property, item) !== 'undefined'),
			sortBy
		)

		return [
			...(typeof sortBy.reverse === 'undefined' || !sortBy.reverse ? sortedSubList.reverse() : sortedSubList),
			...list.filter((item) => typeof getValFromProp(sortBy.property, item) === 'undefined')
		];
	} else {
		const sortedListByString = getListSortedByString(
			list,
			sortBy.property
		);

		return sortBy.reverse ? sortedListByString.reverse() : sortedListByString;
	}
};

/** (Array, Array[Object]|Object{ property Array|String, type String, index Number }, [i number]) - recursive if sortBy is array
 	* @return {object[]} */
// sortBy: {
// 	property: ['edited', 'redigert'], // index > 0: fallback properties for e.g. date (if file format has changed)
// 	type: 'date',
// 	index: -1, // index to use for sorting in properties that are arrays (-1 is last entry in array)
// 	reverse: true // date is reverse by default
// },
const getSortedListFromSortBy = (list, sortBy, i) => {
	// if sortBy is array, recursive
	if (
		sortBy instanceof Array
		&& sortBy.length
		&& (typeof i === 'undefined' || i > -1)
	) {
		const getI = (sub) => typeof i === 'number' ? i - (sub - 1) : sortBy.length - sub;
		// filter by sortby index val, merge with filter by !sortby index val
		const sortedListByType = getListSortedByType(
			list,
			sortBy[getI(1)]
		);

		// recurs
		return getSortedListFromSortBy(
			sortedListByType,
			sortBy,
			getI(2)
		);
	}
	// if sortBy is object
	else if (
		sortBy instanceof Object
		&& !sortBy.length
	) {
		return getListSortedByType(
			list,
			sortBy
		);
	} else {
		return list;
	}
};

/** (object[], object) - @return {object[]} */
export default function (articles, opt = {}) {
	const {longOutput, sortBy} = opt;

	// Sort by title
	articles = getListSortedByString(
		articles,
		longOutput ?  'title.inlineHtml' : 'title'
	);

	if (sortBy) articles = getSortedListFromSortBy(articles, sortBy);

	return articles;
};
