<template>
	<view>
		<!-- 黄色背景 -->
		<view class="bg-yellow d-flex j-center pt-2" style="height: 200rpx;">
			<view class="d-flex a-center" style="height: 50rpx;" @click="this.$navigate('user')">
				<view class="font-36 font-w400">精品蟹黄堡</view>
				<view class="font-30 ml-3 rounded-12 d-flex a-center j-center"
				style="width: 42rpx;height: 42rpx;background: #F9E46C;">服</view>
				<image class="ml-2" src="../../static/right/mmin.png" style="width: 10rpx;height: 10rpx;"></image>
			</view>
		</view>
		<!-- 交易金额 -->
		<view class="mx-25 bg-white rounded-12 d-flex flex-column a-center shadow-nom"
		style="width: 700rpx;height: 353rpx;margin-top: -100rpx;">
			<view class="font-28 mt-35 text-8a">今日交易金额</view>
			<view class="font-60 text-black" @click="love">￥12000.25</view>
			<view class="d-flex w-100 font-26 mt-4">
				<view class="flex-1 d-flex a-center flex-column border-right">
					<view class="text-8a">今日订单</view>
					<view class="text-black">1000</view>
				</view>
				<view class="flex-1 d-flex a-center flex-column">
					<view class="text-8a">昨日金额</view>
					<view class="text-black">1200.00</view>
				</view>
			</view>
		</view>
		<!-- 列表项 -->
		<view class="position-absolute w-700 mx-25 mt-2">
			
			<view class="bg-white shadow-nom rounded-12 d-flex j-sb a-center mb-2" style="height: 98rpx;">
				<view class="d-flex a-center text-black font-32 ml-2" @click="this.$navigate('earn')">
					<image src="../../static/icon/weibiaoti-11.png" style="width: 39rpx;height: 40rpx;"></image>
					<view class="ml-2">收益统计</view>
				</view>
				<image class="mr-4" src="../../static/right/rignt.png" style="width: 11rpx;height: 20rpx;"></image>
			</view>
			<view class="bg-white shadow-nom rounded-12 d-flex j-sb a-center mb-2" style="height: 98rpx;">
				<view class="d-flex a-center text-black font-32 ml-2" @click="this.$navigate('shops')">
					<image src="../../static/icon/weibiaoti-.png" style="width: 39rpx;height: 40rpx;"></image>
					<view class="ml-2">商户管理</view>
				</view>
				<image class="mr-4" src="../../static/right/rignt.png" style="width: 11rpx;height: 20rpx;"></image>
			</view>
			<view class="bg-white shadow-nom rounded-12 d-flex j-sb a-center mb-2" style="height: 98rpx;">
				<view class="d-flex a-center text-black font-32 ml-2" @click="this.$navigate('staff')">
					<image src="../../static/icon/weibiaoti-2.png" style="width: 39rpx;height: 40rpx;"></image>
					<view class="ml-2">员工管理</view>
				</view>
				<image class="mr-4" src="../../static/right/rignt.png" style="width: 11rpx;height: 20rpx;"></image>
			</view>
			<view class="bg-white shadow-nom rounded-12 d-flex j-sb a-center mb-2" style="height: 98rpx;">
				<view class="d-flex a-center text-black font-32 ml-2" @click="this.$navigate('earn-search')">
					<image src="../../static/icon/weibiaoti-3.png" style="width: 39rpx;height: 40rpx;"></image>
					<view class="ml-2">设备列表</view>
				</view>
				<image class="mr-4" src="../../static/right/rignt.png" style="width: 11rpx;height: 20rpx;"></image>
			</view>
			<view class="bg-white shadow-nom rounded-12 d-flex j-sb a-center mb-2" style="height: 98rpx;">
				<view class="d-flex a-center text-black font-32 ml-2" @click="this.$navigate('deal-order')">
					<image src="../../static/icon/weibiaoti-1.png" style="width: 39rpx;height: 40rpx;"></image>
					<view class="ml-2">面对面交易流水</view>
				</view>
				<image class="mr-4" src="../../static/right/rignt.png" style="width: 11rpx;height: 20rpx;"></image>
			</view>
			<view class="bg-white shadow-nom rounded-12 d-flex j-sb a-center mb-2" style="height: 98rpx;">
				<view class="d-flex a-center text-black font-32 ml-2" @click="this.$navigate('order-check')">
					<image src="../../static/icon/weibiaoti-12.png" style="width: 39rpx;height: 40rpx;"></image>
					<view class="ml-2">校正订单</view>
				</view>
				<image class="mr-4" src="../../static/right/rignt.png" style="width: 11rpx;height: 20rpx;"></image>
			</view>
			
		</view>
		
		
	</view>
</template>

<script>
	// import $R from "@/common/lib/request.js"
	export default {
		data() {
			return {
				
			}
		},
		created() {
			// this.__init()
		},
		onLoad() {
			this.__init()
		},
		methods: {
			love() {
				console.log("love");
				uni.request({
				      url: 'https://schoolandyouapi.aboutnew.net/agent/',
				      method: 'POST',
				      data: {
				        user_id: "183823",
				        token: "dXQyMDIwMDMwNTE2MDQwNzc1NjExNTE5",
				        opt: "home"
				      },
				      header: {
				        "content-type": 'application/x-www-form-urlencoded'
				      }
				    }).then(res => {
				      console.log(res.data)
				    })
			},
				__init () {
					
					/* uni.request({
						url: 'https://schoolandyouapi.aboutnew.net/agent/',
						data: {
							user_id: "183823",
							 token: "dXQyMDIwMDMwNTE2MDQwNzc1NjExNTE5",
							 opt: "home"
						},
						method: 'POST',
						success: res => {
							console.log(res); 
						},
						fail: () => {
							console.log('请求失败');
						},
						complete: () => {
							console.log('请求完成');
						}
					}); */
				}
			
			/* async __init() {
				this.$H.post("/agent/", {
					user_id: "183823 ",
					 token: "dXQyMDIwMDMwNTE2MDQwNzc1NjExNTE5",
					 opt: "home"
				}).then((data) => {
					console.log('data-->', data);
				})
			} */
			
		}
	}
</script>

<style>
	
</style>
