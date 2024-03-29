/* loSplash.js -- A splash of FP util functions. */

/** Fn returns an object property value from a key string.
 *
 * ```
 * getValue(obj, key, valArrIndex))
 * ```
 *
 * @arg {object} obj
 * @arg {string} key - `parentKey.key`. Use `.` to separate keys.
 * @arg {number} [i] - index of value to return, if value is array.
 * @return {any}
 */
export const getValue = (obj, key, i = null) => {
	const val = key.split('.').reduce((acc, c) => acc && acc[c], obj);

	return val && typeof i === `number`
		? key.split('.').reduce((acc, c) => acc && acc[c], obj)[i]
		: val;
};


/** Fn returns an immutable object from object.
 * @arg {object} obj
 * @return {object}
 */
export const factory = (obj) => Object.freeze(obj)
