<template>
	<view class="h-vh100 position-relative">
		<view class="d-flex j-center">
			<view class="d-flex border-bottom a-center" style="width: 550rpx;height: 130rpx;margin-top: 150rpx;">
				<view class="iconfont iconshouji text-ab d-flex a-center" style="width: 24rpx;height: 34rpx;"></view>
				<input type="text" placeholder="请输入手机号" class="ml-3 text-ab font-30 d-flex a-center" v-model="phone"/>
			</view>
		</view>
		
		<view class="d-flex j-center">
			<view class="d-flex border-bottom a-center j-sb" style="width: 550rpx;height: 130rpx;">
				<view class="d-flex a-center">
					<view class="iconfont iconmima text-ab d-flex a-center" style="width: 24rpx;height: 34rpx;"></view>
					<input type="text" placeholder="请输入验证码" class="ml-3 text-ab font-30 d-flex a-center" v-model="ver_code"/>
				</view>
				<view class="rounded-28 bg-yellow d-flex a-center j-center font-22" 
				style="width: 160rpx;height: 60rpx;" @click="getCode('verify_code')">获取验证码</view>
			</view>
		</view>
		
		<view class="bg-yellow rounded-36 d-flex a-center j-center font-28" 
		style="width: 570rpx;height: 80rpx;margin-top: 90rpx;margin-left: 90rpx;" @click="login('verify_login')">登录</view>
		
		<image src="../../static/login.png" class="position-absolute" style="bottom: 0;"></image>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: "",
				ver_code: "",
				opt_type: ""
			}
		},
		
		methods: {
			
			getCode(li) {
				this.opt_type = li
				this.$H.post("/agent/", {
					mobile: this.phone,
					opt: li,
				}).then((res) => {
					
				}).catch((e) => {
					console.log("catch error!!", e);
				})
			},
			login(li) {
				this.$H.post("/agent/", {
					mobile: this.phone,
					opt: li,
					verify_code: this.ver_code
				}).then((res) => {
					if(res) {
						try {
						    uni.setStorageSync('user_id', res.user_id);
							uni.setStorageSync('token', res.token);
							uni.navigateTo({
								url: "/pages/index/index"
							})
						} catch (e) {
						    console.log('error catch:', e);
						}
					}
					console.log('res:', res);
				}).catch((e) => {
					console.log("catch error!!", e);
				})
				this.__init()
			},
			
		}
	}
</script>

<style>

</style>
