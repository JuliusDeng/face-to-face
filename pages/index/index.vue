<template>
	<view>
		<!-- 黄色背景 -->
		<view class="bg-yellow d-flex j-center pt-2" style="height: 200rpx;">
			<view class="d-flex a-center" style="height: 50rpx;" @click="navUser(companyNname, companyTel, agentName)">
				<view class="font-36 font-w400">{{agentName}}</view>
				<view class="font-30 ml-3 rounded-12 d-flex a-center j-center"
				style="width: 42rpx;height: 42rpx;background: #F9E46C;">服</view>
				<image class="ml-2" src="../../static/right/mmin.png" style="width: 10rpx;height: 10rpx;"></image>
			</view>
		</view>
		<!-- 交易金额 -->
		<view class="mx-25 bg-white rounded-12 d-flex flex-column a-center shadow-nom"
		style="width: 700rpx;height: 353rpx;margin-top: -100rpx;">
			<view class="font-28 mt-35 text-8a">今日交易金额</view>
			<view class="font-60 text-black" @click="">{{todayAmount === null ? '0' : todayAmount}}</view>
			<view class="d-flex w-100 font-26 mt-4">
				<view class="flex-1 d-flex a-center flex-column border-right">
					<view class="text-8a">今日订单</view>
					<view class="text-black">{{todayPeople}}</view>
				</view>
				<view class="flex-1 d-flex a-center flex-column">
					<view class="text-8a">昨日金额</view>
					<view class="text-black">{{yesAmount === null ? '0' : yesAmount}}</view>
				</view>
			</view>
		</view>
		<!-- 列表项 -->
		<view class="position-absolute w-700 mx-25 mt-2">
			
			<view class="bg-white shadow-nom rounded-12 d-flex j-sb a-center mb-2" style="height: 98rpx;"  @click="$navigate('earn')">
				<view class="d-flex a-center text-black font-32 ml-2">
					<image src="../../static/icon/weibiaoti-11.png" style="width: 39rpx;height: 40rpx;"></image>
					<view class="ml-2">收益统计</view>
				</view>
				<image class="mr-4" src="../../static/right/rignt.png" style="width: 11rpx;height: 20rpx;"></image>
			</view>
			<view class="bg-white shadow-nom rounded-12 d-flex j-sb a-center mb-2" style="height: 98rpx;" @click="$navigate('shops')">
				<view class="d-flex a-center text-black font-32 ml-2">
					<image src="../../static/icon/weibiaoti-.png" style="width: 39rpx;height: 40rpx;"></image>
					<view class="ml-2">商户管理</view>
				</view>
				<image class="mr-4" src="../../static/right/rignt.png" style="width: 11rpx;height: 20rpx;"></image>
			</view>
			<view class="bg-white shadow-nom rounded-12 d-flex j-sb a-center mb-2" style="height: 98rpx;" @click="$navigate('staff')">
				<view class="d-flex a-center text-black font-32 ml-2">
					<image src="../../static/icon/weibiaoti-2.png" style="width: 39rpx;height: 40rpx;"></image>
					<view class="ml-2">员工管理</view>
				</view>
				<image class="mr-4" src="../../static/right/rignt.png" style="width: 11rpx;height: 20rpx;"></image>
			</view>
			<view class="bg-white shadow-nom rounded-12 d-flex j-sb a-center mb-2" style="height: 98rpx;" @click="$navigate('device-search')">
				<view class="d-flex a-center text-black font-32 ml-2">
					<image src="../../static/icon/weibiaoti-3.png" style="width: 39rpx;height: 40rpx;"></image>
					<view class="ml-2">设备列表</view>
				</view>
				<image class="mr-4" src="../../static/right/rignt.png" style="width: 11rpx;height: 20rpx;"></image>
			</view>
			<view class="bg-white shadow-nom rounded-12 d-flex j-sb a-center mb-2" style="height: 98rpx;" @click="$navigate('deal')">
				<view class="d-flex a-center text-black font-32 ml-2">
					<image src="../../static/icon/weibiaoti-1.png" style="width: 39rpx;height: 40rpx;"></image>
					<view class="ml-2">面对面交易流水</view>
				</view>
				<image class="mr-4" src="../../static/right/rignt.png" style="width: 11rpx;height: 20rpx;"></image>
			</view>
			<view class="bg-white shadow-nom rounded-12 d-flex j-sb a-center mb-2" style="height: 98rpx;" @click="$navigate('order-check')">
				<view class="d-flex a-center text-black font-32 ml-2">
					<image src="../../static/icon/weibiaoti-12.png" style="width: 39rpx;height: 40rpx;"></image>
					<view class="ml-2">退单</view>
				</view>
				<image class="mr-4" src="../../static/right/rignt.png" style="width: 11rpx;height: 20rpx;"></image>
			</view>
			<view class="bg-white shadow-nom rounded-12 d-flex j-sb a-center mb-2" style="height: 98rpx;" @click="$navigate('login')">
				<view class="d-flex a-center text-black font-32 ml-2">
					<image src="../../static/icon/weibiaoti-12.png" style="width: 39rpx;height: 40rpx;"></image>
					<view class="ml-2">去登录</view>
				</view>
				<image class="mr-4" src="../../static/right/rignt.png" style="width: 11rpx;height: 20rpx;"></image>
			</view>
			
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				agentName: '',
				todayAmount: '',
				todayPeople: '',
				yesAmount: '',
				companyNname: {},
				companyTel: ""
			}
		},
		onLoad() {
			this.__init()
			try {
			    uni.setStorageSync('uid', '100003');
				uni.setStorageSync('utoken', 'dXQyMDIwMDMzMDE1MTIyODc2NDYzOTA1');
			} catch (e) {
			    // error
			}
		},
		methods: {
			navUser(name, tel, agentName) {
				uni.navigateTo({
					url: `/pages/user/user?name=${name}&tel=${tel}&agentName=${agentName}`,
				})
			},
			async __init() {
				this.$H.post("/agent/", {
					// user_id: uni.getStorageSync('user_id'),
					// token: uni.getStorageSync('token'),
					user_id: "183823",
					token: "dXQyMDIwMDMyNjExNDUyNTgyNjc4Njc0",
					opt: "home",
				}).then((res) => {
					console.log(res);
					uni.setStorageSync('list', res)    // ??
					this.agentName = res.user_info.agent_info.agent_name
					this.todayAmount = res.today.total_amount
					this.todayPeople = res.today.total_people
					this.yesAmount = res.yesterday.total_amount
					this.companyNname = res.user_info.agent_info.company_info.company_name
					this.companyTel = res.user_info.agent_info.company_info.company_tel
				}).catch((error) => {
					console.log(error);
				})
				
			}
			
		}
	}
</script>

<style>
	
</style>
