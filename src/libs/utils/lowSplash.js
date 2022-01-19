/* lowSplash.js - A splash of FP util functions. */

/** Fn returns a value in an object from key.
 * @arg {object} obj
 * @arg {string} key - `parentKey.key`, so use `.` to seperate keys.
 * @arg {number} [i] - index of value to return, if value is array.
 * @return {any}
 */
export const getValue = (obj, key, i=null) => {
	const val = key
		.split('.')
		.reduce((acc, c) => acc && acc[c], obj)

	return val && typeof i === `number` ? val[i] : val
}
