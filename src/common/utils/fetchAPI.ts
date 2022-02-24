import axios, { Method } from 'axios'

export interface RequestConfig {
	url: string
	method: Method
	data: object
}

const requester = axios.create()

requester.interceptors.response.use(
	response => response,
	error => {
		return Promise.reject(error)
	}
)

const fetchAPI = async (config: RequestConfig) => {
	const response = await requester.request(config)

	return response
}

export default fetchAPI
