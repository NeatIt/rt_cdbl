import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_CORE_API_URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json'
	}
});

instance.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		return Promise.reject({
			message: error?.message || '',
			errorCode: `${error?.response?.status}` || ''
		});
	}
);

export default instance;
