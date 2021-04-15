import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

// const version = deviceInfo.getVersion()

export const requestConfig: any = {
	baseURL: 'https://api.github.com',
	timeout: 1000,
	responseType: 'json',
	responseEncoding: 'utf8',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/vnd.github.v3+json',
	},
}

export const apiClient = axios.create(requestConfig)

export const apiRequest = async <TResponseData>(axiosConfig: AxiosRequestConfig): Promise<TResponseData> => {
	const response = await apiClient.request(axiosConfig)
	const responseData = response.data
	return responseData
}

apiClient.interceptors.request.use((preRequestConfig: AxiosRequestConfig) => {
	return preRequestConfig
})

apiClient.interceptors.response.use()
