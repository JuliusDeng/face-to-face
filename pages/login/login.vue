<template>
	<view class="h-vh100 position-relative">
		<view class="d-flex j-center">
			<view class="d-flex border-bottom a-center" :class="focusClass.username ? 'input-border-color' : ''" style="width: 550rpx;height: 130rpx;margin-top: 150rpx;">
				<view class="iconfont iconshouji text-ab d-flex a-center" style="width: 24rpx;height: 34rpx;"></view>
				<input type="text" placeholder="请输入手机号" class="ml-3 text-ab text-black font-30 d-flex a-center" 
				v-model="username" maxlength=11 @focus="focus('username')" @blur="blur('username')" />
			</view>
		</view>
		
		<view class="d-flex j-center">
			<view class="d-flex border-bottom a-center j-sb" :class="focusClass.password ? 'input-border-color' : ''" style="width: 550rpx;height: 130rpx;">
				<view class="iconfont iconmima text-ab d-flex a-center" style="width: 24rpx;height: 34rpx;"></view>
				<input type="text" placeholder="请输入验证码" class="ml-3 text-ab text-black font-30 d-flex a-center" 
				v-model="password" maxlength=4 @focus="focus('password')" @blur="blur('password')"/>
				<view class="rounded-28 bg-yellow d-flex a-center j-center font-22" 
				style="width: 160rpx;height: 60rpx;" @click="!safety.state ? getCode() : ''">
					{{!safety.state ? '获取验证码' : (safety.time + 's')}}
				</view>
			</view>
		</view>
		
		<view class="bg-yellow rounded-36 d-flex a-center j-center font-28" hover-class="bg"
		style="width: 570rpx;height: 80rpx;margin-top: 90rpx;margin-left: 90rpx;" @click="submit">登录</view>
		
		<image src="../../static/login.png" class="position-absolute" style="bottom: 0;"></image>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				focusClass: {
					username: false,
					password: false
				},
				username: "",
				password: "",
				// 正则验证
				rules: {
					username: [
						{
							rule: /^[1][3-9]\d{9}$/,
							msg: "请输入正确的11位手机号"
						}
					],
					password: [
						{
							rule: /^\d{4}$/,
							msg: "请输入您的验证码"
						}
					]
				},
				safety: {
					time: 60,
					state: false,
					interval: ''
				},
				
				
			}
		},
		
		methods: {
			// 点击发送验证码
			getCode() {
				if ((this.rules.username[0].rule).test(this.username)) {
					uni.showToast({
						title: "发送成功",
						icon: "success",
						success: () => {
							// 成功后显示倒计时60s后可在点击
							this.safety.state = true;
							// 倒计时
							this.safety.interval = setInterval(() => {
								if (this.safety.time-- <= 0) {
									this.safety.time = 60;
									this.safety.state = false;
									clearInterval(this.safety.interval);
								}
							}, 1000);
							this.$H.post('/agent/', {
								mobile: this.username,
								opt: 'verify_code'
							}).then((res) => {
								
							}).catch((err) => {
								console.log('!!catch err:', err);
							})
							
						}
					})
				} else {
					uni.showToast({
						title: "请输入正确的手机号",
						icon: "none"
					})
				}
			},
			// 点击登录
			focus(key) {
				this.focusClass[key] = true
			},
			blur(key) {
				this.focusClass[key] = false
			},
			// 表单验证
			validate(key) {
				let check = true
				this.rules[key].forEach((v) => {
					// 验证失败
					if(!v.rule.test(this[key])) {
						console.log('key不通：', v);
						uni.showToast({
							title: v.msg,
							icon: 'none'
						});
						check = false
						return false
					} else {
						console.log('key通过：', v);
					}
				})
				return check
			},
			// 登录 提交表单
			submit() {
				if(!this.validate('username')) return
				if(!this.validate('password')) return
				
				uni.showLoading({
					title: '登录中...',
					mask: true
				});
				// 对接后台 实现登录
				this.$H.post("/agent/", {
					mobile: this.username,
					opt: 'verify_login',
					verify_code: this.password
				}).then((res) => {
					if(res) {
						uni.hideLoading()
						try {
						    // uni.setStorageSync('uid', '100003');
							// uni.setStorageSync('utoken', 'dXQyMDIwMDMzMDE1MTIyODc2NDYzOTA1');
							uni.setStorageSync('uid', res.user_id);
							uni.setStorageSync('utoken', res.openid);
							uni.navigateTo({
								url: "/pages/index/index"
							})
						} catch (e) {
						    console.log(e);
						}
					}
				}).catch((err) => {
					console.log(err);
				})
				
				
				
			}
			
		}
	}
</script>

<style>
</style>