export default {
	
	year() {
		// 获取当前年初2020-01-01
		var date = new Date();
		var year = date.getFullYear() + '-01-01'
		return year
	},
	today() { //得到一个格式为(yyyy-MM-dd)的日期
		// 获取当前日期
		var date = new Date();
		// 获取当前月份
		var nowMonth = date.getMonth() + 1;
		// 获取当前是几号
		var strDate = date.getDate();
		// 添加分隔符“-”
		var seperator = "-";
		
		// 对月份进行处理，1-9月在前面添加一个“0”
		if (nowMonth >= 1 && nowMonth <= 9) {
		   nowMonth = "0" + nowMonth;
		}
		// 对号数进行处理，1-9号在前面添加一个“0”
		if (strDate >= 0 && strDate <= 9) {
		   strDate = "0" + strDate;
		}
		
		// 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
		var nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;
		return nowDate
	},
	tomorrow() {
		var time = new Date(this.today())
		var time2 = time.getTime() // 得到今天的时间戳
		// console.log(time2);
		var time3 = time2 - 86400000 // 得到明天的时间戳
		// 将明天的时间戳转成时间
		var date = new Date(time3);
		// 年
		var Y = date.getFullYear() + '-';
		// 月
		var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
		// 日
		var D = date.getDate();
		var time4 = Y+M+D
		return time4
	},
	yesterday() {
		var time = new Date(this.today())
		var time2 = time.getTime() // 得到今天的时间戳
		var time3 = time2 + 86400000 // 得到明天的时间戳
		// 将明天的时间戳转成时间
		var date = new Date(time3);
		// 年
		var Y = date.getFullYear() + '-';
		// 月
		var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
		// 日
		var D = date.getDate();
		var time4 = Y+M+D
		return time4
	}
}