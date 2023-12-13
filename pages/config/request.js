// 此vm参数为页面的实例，可以通过它引用vuex中的变量
module.exports = (vm) => {
	// 初始化请求配置
	uni.$u.http.setConfig((config) => {
		if (process.env.NODE_ENV === 'development') {
			config.baseURL = 'http://8.134.168.19:8093/sunshineFarm'; /* 根域名 */
		}
		const token = vm.$store.getters.getToken;
		if (token) {
			config.header['token'] = token;
		}
		return config
	})

	// 请求拦截
	uni.$u.http.interceptors.request.use((config) => {
		return config
	}, config => { // 
		return Promise.reject(config)
	})

	// 响应拦截
	uni.$u.http.interceptors.response.use((response) => {
		const data = response.data

		return data
	}, (response) => {
		// 对响应错误做点什么 （statusCode !== 200）
		return Promise.reject(response)
	})
}