<template>
	<view>
		<view class="mx-75 my-4 bg-white d-flex flex-column a-center" style="height: 674rpx;">
			<view class="mt-5 font-36 text-black">精品蟹黄堡</view>
			<view class="d-flex flex-column a-center mt-3 font-20 text-gray">
				<view>请使用微信扫描小程序成为员工,添加成为员工后可</view>
				<view>由管理者设置管理权限</view>
			</view>
			<image class="mt-4" src="../../static/logo.png" style="width: 393rpx;height: 393rpx;"></image>
		</view>
		
		<view class="mx-75 bg-white px-4 py-4 d-flex a-center" style="height: 80rpx;">
			<input type="text" placeholder="输入手机号添加" class="text-gray font-30" maxlength="11"/>
		</view>
		
		<view class="mt-3 mx-75 py-1 pl-1 border shadow-nom bg-white d-flex "
		style="height: 100rpx;" v-for="i in 2" :key="i" @click="this.$navigate('staff-remove')">
			<image src="../../static/logo.png" style="width: 80rpx;height: 80rpx;"></image>
			<view class="d-flex flex-column ml-3 font-24 text-black">
				<view>海绵宝宝</view>
				<view>员工：1324567899</view>
			</view>
		</view>
		
		
		
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
