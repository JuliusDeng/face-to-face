<template>
	<view class="h-vh100 position-relative">
		<view class="d-flex j-center">
			<view class="d-flex border-bottom a-center" style="width: 550rpx;height: 130rpx;margin-top: 150rpx;">
				<view class="iconfont iconshouji text-ab d-flex a-center" style="width: 24rpx;height: 34rpx;"></view>
				<input type="text" placeholder="请输入手机号" class="ml-3 text-ab text-black font-30 d-flex a-center" 
				v-model="phone" maxlength=11/>
			</view>
		</view>
		
		<view class="d-flex j-center">
			<view class="d-flex border-bottom a-center j-sb" style="width: 550rpx;height: 130rpx;">
				<view class="d-flex a-center">
					<view class="iconfont iconmima text-ab d-flex a-center" style="width: 24rpx;height: 34rpx;"></view>
					<input type="text" placeholder="请输入验证码" class="ml-3 text-ab text-black font-30 d-flex a-center" 
					v-model="captcha" maxlength=4/>
				</view>
				<view class="rounded-28 bg-yellow d-flex a-center j-center font-22" 
				style="width: 160rpx;height: 60rpx;" @click="!safety.state ? getCode() : ''">{{!safety.state ? '获取验证码' : (safety.time + 's')}}</view>
			</view>
		</view>
		
		<view class="bg-yellow rounded-36 d-flex a-center j-center font-28" 
		style="width: 570rpx;height: 80rpx;margin-top: 90rpx;margin-left: 90rpx;" @click="login">登录</view>
		
		<image src="../../static/login.png" class="position-absolute" style="bottom: 0;"></image>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: "",
				captcha: "",
				rules: { // 正则验证
					phone: [{
						rule: /^[1][3-9]\d{9}$/,
						msg: "请输入正确的11位手机号"
					}],
					captcha: [{
						rule: /^\d{4}$/,
						msg: "请输入您的验证码"
					}]
				},
				safety: {
					time: 10,
					state: false,
					interval: ''
				},
			}
		},
		
		methods: {
			// 点击发送验证码
			getCode() {
				if ((this.rules.phone[0].rule).test(this.phone)) {
					uni.showToast({
						title: "正在发送验证码",
						icon: "loading",
						success: () => {
							// 成功后显示倒计时60s后可在点击
							this.safety.state = true;
							// 倒计时
							this.safety.interval = setInterval(() => {
								if (this.safety.time-- <= 0) {
									this.safety.time = 10;
									this.safety.state = false;
									clearInterval(this.safety.interval);
								}
							}, 1000);
							uni.showToast({
								title: "发送成功",
								icon: "success"
							})
							this.$H.post("/agent/", {
								mobile: this.phone,
								opt: verify_code,
							}).then((res) => {
								
							}).catch((e) => {
								console.log("catch error!!", e);
							})
						}
					})
				} else {
					uni.showToast({
						title: "手机号不正确",
						icon: "none"
					})
				}
			},
			// 登录
			login() {
				this.$H.post("/agent/", {
					mobile: this.phone,
					opt: verify_login,
					verify_code: this.captcha
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