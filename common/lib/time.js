export default {
	getTime() {
		// 查看今天的信息须是终止时间设为今天时间+1
		// 获取当前日期
		var date = new Date();
		// 获取当前月份
		var nowMonth = date.getMonth() + 1;
		// 获取当前是几号-->此处在我们项目中特殊：查看今天的信息须是终止时间设为今天时间+1
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
	}
}	
	