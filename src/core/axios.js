import _ from 'lodash'
import axios from 'axios'
import { Http } from './http'

const instance = axios.create({
	baseURL: Http.apiHost,
	timeout: 30000,
	headers: {
		'X-REQUEST-ID': UUID.get(),
	},
})

export default instance
