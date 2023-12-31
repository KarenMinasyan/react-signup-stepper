import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	params: {
		site_key: 'no01',
	},
});
instance.interceptors.request.use(
	config => {
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);
instance.interceptors.response.use(
	res => {
		return res;
	},
	async err => {
		return Promise.reject(err);
	}
);
export default instance;
