<template>
	<view>
		
		<!-- 黄色头部 -->
		<view class="bg-yellow position-relative" style="height: 200rpx;">
			<view class="position-absolute d-flex" style="top: 30rpx;height: 138rpx;">
				<!-- 头像 -->
				<image :src="imglogo" style="width: 138rpx;height: 138rpx;"
				class="rounded-half ml-5"></image>
				<!-- 信息 -->
				<view class="ml-4 d-flex flex-column border" style="width: 430rpx;height: 138rpx;">
					<view class="d-flex a-center" style="height: 47rpx;">
						<view class="font-36 font-w400" style="width: 210rpx;">{{merchant}}</view>
						<view class="d-flex j-center a-center font-30 font-w400 rounded-12" 
						style="width: 128rpx;height: 40rpx;background:#F9E46C;">服务商</view>
					</view>
					<view class="d-flex a-center font-20" style="padding-top: 16rpx;">
						<text style="width: 170rpx;">编号：{{userID}}</text>
						<text>推广数：0</text>
					</view>
					<view class="font-20 mt-1">
						服务商：比基尼海滩有限公司
					</view>
				</view>
				<!-- 二维码 -->
				<view class="d-flex a-center">
					<image src="../../static/icon/qrcode.png" style="width: 40rpx;height: 40rpx;"></image>
				</view>
			</view>
		</view>
		<!-- 列表项 -->
		<view class="w-700 mx-25 mt-3">
			<view class="bg-white shadow-nom rounded-12 d-flex j-sb a-center mb-3" style="height: 98rpx;">
				<view class="d-flex a-center text-black font-32 ml-2" @click="this.$navigate('earn')">
					<image src="../../static/icon/weibiaoti-10.png" style="width: 39rpx;height: 40rpx;"></image>
					<view class="ml-2">消息通知</view>
				</view>
				<switch checked="true" @change="" class="mr-4"/>
			</view>
			
			<view class="bg-white text-black font-32 shadow-nom rounded-12 d-flex flex-column py-25 px-3" 
			style="height: 250rpx;">
				<view class="d-flex j-sb mb-2">
					<view class="d-flex a-center" @click="this.$navigate('staff')">
						<image src="../../static/icon/weibiaoti-2.png" style="width: 39rpx;height: 40rpx;"></image>
						<view class="ml-2">姓名</view>
					</view>
					<view class="d-flex a-center ">
						<text class="mr-3">张三</text>
						<image src="../../static/right/rignt.png" style="width: 11rpx;height: 20rpx;"></image>
					</view>
				</view>
				<view class="d-flex j-sb mb-2">
					<view class="d-flex a-center" @click="this.$navigate('staff')">
						<image src="../../static/icon/weibiaoti-4.png" style="width: 39rpx;height: 40rpx;"></image>
						<view class="ml-2">性别</view>
					</view>
					<view class="d-flex a-center ">
						<text class="mr-3">男</text>
						<image src="../../static/right/rignt.png" style="width: 11rpx;height: 20rpx;"></image>
					</view>
				</view>
				<view class="d-flex j-sb">
					<view class="d-flex a-center" @click="this.$navigate('staff')">
						<image src="../../static/icon/weibiaoti-9.png" style="width: 39rpx;height: 40rpx;"></image>
						<view class="ml-2">学校</view>
					</view>
					<view class="d-flex a-center ">
						<text class="mr-3">漫维文化</text>
						<image src="../../static/right/rignt.png" style="width: 11rpx;height: 20rpx;"></image>
					</view>
				</view>
			</view>
			<!-- 意见反馈 -->
			<view class="bg-white text-black font-32 shadow-nom rounded-12 d-flex j-sb py-25 px-3 mt-3"
			style="height: 98rpx;">
				<view class="d-flex a-center" @click="this.$navigate('staff')">
					<image src="../../static/icon/weibiaoti-5.png" style="width: 39rpx;height: 40rpx;"></image>
					<view class="ml-2">意见反馈</view>
				</view>
				<text>{{tel}}</text>
			</view>
			<!-- 公司 -->
			<text class="font-20 text-55 d-flex j-center mt-45">公司：比基尼海滩有限公司</text>
			
			
			
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imglogo: "",
				merchant: "",
				userID: "",
				spread: "",
				tel: ""
			}
		},
		onLoad() {
			this.__shop()
		},
		methods: {
			async __shop() {
				this.$H.post("/merchant/", {
					user_id: "100003",
					token: "dXQyMDIwMDMxODA5MjUzMjY1NjA5MzI3",
					app: "xcx"
				}).then((data) => {
					console.log(data);
					/* this.imglogo = data.logo_url
					this.userID = data.user_id
					this.spread = 0
					this.merchant = data.merchant_name
					this.tel = data.merchant_tel */
				}).catch((data) => {
					console.log('--catch 错误！！');
				})
				
			}
			
		}
	}
</script>

<style>

</style>
