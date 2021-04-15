import { TResentSearch } from '@typings'

/* Object helpers. */
export { default as get } from 'lodash/get'
export { default as set } from 'lodash/set'
export { default as isObject } from 'lodash/isObject'
export { default as isEmpty } from 'lodash/isEmpty'
export { default as forOwn } from 'lodash/forOwn'
export { default as pick } from 'lodash/pick'
export { default as omit } from 'lodash/omit'
export { default as cloneDeep } from 'lodash/cloneDeep'
export { default as mapValues } from 'lodash/mapValues'
// export { default as deepMerge } from 'deepmerge';

/* Array helpers */
export { default as isArray } from 'lodash/isArray'
export { default as head } from 'lodash/head'
export { default as last } from 'lodash/last'
export { default as compact } from 'lodash/compact'
export { default as castArray } from 'lodash/castArray'
export { default as intersection } from 'lodash/intersection'

/* String helpers */
export { default as toString } from 'lodash/toString'
export { default as camelCase } from 'lodash/camelCase'
export { default as queryString } from 'query-string'

/* Number helpers */
export { default as isNumber } from 'lodash/isNumber'
export { default as toNumber } from 'lodash/toNumber'
export { default as isNaN } from 'lodash/isNaN'

/* Functions helpers */
export { default as debounce } from 'lodash/debounce'
export { default as once } from 'lodash/once'
export { default as delay } from 'lodash/delay'
export { default as memoize } from 'lodash/memoize'
export { default as isFunction } from 'lodash/isFunction'

export const pushItemsToArray = (item: string, array: TResentSearch[]) => {
	const newArr = [...array, { title: item, id: String(Math.random()) }]
	if (newArr.length > 5) {
		newArr.shift()
	}
	return newArr
}
