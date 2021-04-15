/// search/count

import { TRequestBuilder } from '@typings'

export const searchRepo: TRequestBuilder<string> = (params?) => ({
	method: 'get',
	url: '/search/repositories',
	params,
})

export const searchUser: TRequestBuilder<any> = params => ({
	method: 'get',
	url: '/search/users',
	params,
})
