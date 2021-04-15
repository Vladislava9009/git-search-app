import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

// const version = deviceInfo.getVersion()

export const requestConfig: any = {
	baseURL: '__DEV__ ? config.API_URL_DEV : config.API_URL_PROD',
	timeout: 1000,
	responseType: 'json',
	responseEncoding: 'utf8',
	headers: {
		'Content-Type': 'application/json',
	},
}

export const apiClient = axios.create(requestConfig)

export const apiRequest = async <TResponseData>(axiosConfig: AxiosRequestConfig): Promise<TResponseData> => {
	const response = await apiClient.request(axiosConfig)
	const responseData = response.data
	return responseData
}

apiClient.interceptors.request.use((preRequestConfig: AxiosRequestConfig) => {
	// // Fetch and attach accessToken from store.
	// const authToken = getGlobal().authToken
	// if (authToken) {
	// 	preRequestConfig.headers[config.API_AUTH_HEADER] = authToken
	// }

	return preRequestConfig
})

apiClient.interceptors.response
	.use
	// (response: AxiosResponse) => {
	// 	return response
	// },
	// (error: any) => {
	// 	// Format request error. https://github.com/axios/axios/issues/960
	// 	error.data = error?.request?.response?.error
	// 	error.message = error?.data?.message
	// 	const responseStatus = error?.response?.status ?? 0 // 0 = 'Network Error'

	// 	// Handle backend auth errors.
	// 	if ([httpCodes.UNAUTHORIZED, httpCodes.FORBIDDEN].includes(responseStatus)) {
	// 		getDispatch().logout()
	// 	}
	// 	if ([httpCodes.UPGRADE_REQUIRED].includes(responseStatus)) {
	// 		setGlobal({
	// 			isUnsupportedVersion: true,
	// 		})
	// 	}
	// 	// Handle API errors (except 'Network Error')
	// 	if (responseStatus) {
	// 		sentry.setExtra('api', {
	// 			screen: getGlobal().navigation?.currentRouteName,
	// 			api_url: error?.config?.url,
	// 			api_status: responseStatus ?? 'Network Error',
	// 			request: error.request,
	// 			response: error.response,
	// 		})
	// 		sentry.captureException(error)
	// 	}

	// 	return Promise.reject(error)
	// },
	()
