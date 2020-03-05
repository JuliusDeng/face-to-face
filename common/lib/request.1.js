export default {
	// 全局配置
	common: {
		baseUrl: "https://schoolandyouapi.aboutnew.net",
		header: {
			// 'Content-Type':'application/json;charset=UTF-8',
			'Content-Type':'application/x-www-form-urlencoded'
		},
		data: {},
		method: "POST",
		dataType: "json"
	},
	// 请求 返回Promise
	request( options = {} ) {
		// 组织参数
		options.url = this.common.baseUrl + options.url
		options.header = options.header || this.common.header
		options.data = options.data || this.common.data
		options.method = options.method || this.common.method
		options.dataType = options.dataType || this.common.dataType
		//请求
		return new Promise((res, rej) => {
			// 请求之前 
			// 请求中
			uni.request({
				...options,
				
				success: (result) => {
					console.log('result-->', result);
					// 服务端请求失败
					if(result.statusCode !== 200) {
						uni.showToast({
							title: result.data.msg || '服务端请求失败',
							icon: 'none'
						})
						return rej()
					}
					// 请求成功
					let data = result.data.data
					res(data)
				},
				
				fail: (error) => {
					uni.showToast({
						title: error.errMsg || '请求失败（如断网）',
						icon: 'none'
					})
					return rej()
				}
				
			})
			
		})
	},
	// get 请求
	get(url, data = {}, options = {}) {
		options.url = url
		options.data = data
		options.method = 'GET'
		return this.request(options)
	},
	// post 请求
	post(url, data = {}, options = {}) {
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	}
	
}