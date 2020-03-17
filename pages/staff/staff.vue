<template>
	<view>
		<view class="font-24 text-gray ml-3 pt-2">员工人数：3</view>
		
		<view class="mt-2 mx-25 py-1 px-15 a-center border shadow-nom bg-white d-flex j-sb" 
		style="height: 100rpx;"
		v-for="i in 2" :key="i" @click="this.$navigate('staff-add')">
			<view class="d-flex">
				<image src="../../static/logo.png" style="width: 80rpx;height: 80rpx;"></image>
				<view class="d-flex flex-column ml-3 font-24 text-black">
					<view>章鱼哥</view>
					<view>员工：1324567899</view>
				</view>
			</view>
			<view class="">
				设置权限
			</view>
		</view>
		
		<view class="bg-yellow d-flex a-center j-center position-fixed" 
		style="top: 1108rpx;height: 98rpx;width: 750rpx;">
			<button class="cu-btn block lg bg-yellow text-black">
				<text class="cuIcon-add"></text> 添加店工
			</button>
		</view>	
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.__init()
		},
		methods: {
			async __init() {
				this.$H.post("/agent/", {
					user_id: "183823",
					token: "dXQyMDIwMDMxNjE4MDkxOTgxNTU5NjA2",
					opt: "agent"
				}).then((data) => {
					console.log(data);
				}).catch(() => {
					console.log("catch error!!");
				})
			}
		}
	}
</script>

<style>

</style>
