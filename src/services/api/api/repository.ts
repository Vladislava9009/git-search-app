import { TRequestBuilder } from '@typings'

export const getRepositories: TRequestBuilder<any> = (params?) => ({
	method: 'get',
	url: '/orgs/ORG/repos',
	params,
})
