import { AxiosRequestConfig } from 'axios'

// Request
export type TRequestBuilder<T> = (params: T) => AxiosRequestConfig | undefined
export type TOrder = [string, TOrderDirection] | ['random', number]
export type TOrderDirection = 'asc' | 'desc'
export type TFilteredRequest = {
	offset?: number
	limit?: number
	order?: TOrder
	globalSearch?: any
}

// Response
export type TMetaResponse = Required<TFilteredRequest> & {
	totalCounts: number
	packLength: number
}
export type TFiltersResponse = TFilteredRequest
export type TResponseWithFilters<T> = {
	data: T
	meta: TMetaResponse
	filters: TFiltersResponse
}
