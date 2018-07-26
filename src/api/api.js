import axios from 'axios'
axios.defaults.withCredentials = true

let baseUrl = '';
if (process.env.NODE_ENV == 'development') {
	baseUrl = location.protocol+'//172.16.2.22:8780';
	console.log('development', baseUrl)
} else {
	if (process.env.type === 'test') {
		baseUrl = location.origin;
		console.log('test', baseUrl)
	} else if (process.env.NODE_ENV == 'production') {
    baseUrl = location.origin;
		console.log('production', baseUrl)
	}
}

axios.defaults.baseURL = baseUrl;

//登录
export const login = params => axios.post('/wap/login', params)

//获取用户信息
export const myHomeDate = (params,headers) => axios.post('/wap/myHomeDate', params, headers)

//首页轮播
export const getIndexBanner = params => axios.post('/wap/getIndexBanner', params)



