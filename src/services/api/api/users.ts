import { TRequestBuilder } from '@typings'

export const getProfiles: TRequestBuilder<any> = ({ params }) => ({
	method: 'get',
	url: `/users`,
	params,
})

export const getOrganizations: TRequestBuilder<any> = ({ params }) => ({
	method: 'get',
	url: `/organizations`,
	params,
})
