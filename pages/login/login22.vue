<template>
	<view class="h-vh100 d-flex flex-column j-end">
		<view class="d-flex j-center">
			<view class="d-flex border-bottom a-center" style="width: 550rpx;height: 130rpx;margin-top: 150rpx;">
				<view class="iconfont iconshouji text-ab d-flex a-center" style="width: 24rpx;height: 34rpx;"></view>
				<input type="text" placeholder="请输入手机号" class="ml-3 text-ab font-30 d-flex a-center"/>
			</view>
		</view>
		
		<view class="d-flex j-center">
			<view class="d-flex border-bottom a-center j-sb" style="width: 550rpx;height: 130rpx;">
				<view class="d-flex a-center">
					<view class="iconfont iconmima text-ab d-flex a-center" style="width: 24rpx;height: 34rpx;"></view>
					<input type="text" placeholder="请输入验证码" class="ml-3 text-ab font-30 d-flex a-center"/>
				</view>
				<view class="rounded-28 bg-yellow d-flex a-center j-center font-22" 
				style="width: 160rpx;height: 60rpx;">获取验证码</view>
			</view>
		</view>
		
		<view class="bg-yellow rounded-36 d-flex a-center j-center font-28" 
		style="width: 570rpx;height: 80rpx;margin-top: 90rpx;margin-left: 90rpx;">登录</view>
		
		<image src="../../static/login.png"></image>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
