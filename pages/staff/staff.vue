<template>
	<view>
		<view class="font-24 text-gray ml-3 pt-2">员工人数：{{staff.length}}</view>
		
		<view class="mt-2 mx-25 py-1 px-15 a-center border shadow-nom bg-white d-flex j-sb" 
		style="height: 100rpx;"
		v-for="(item, index) in staff" :key="index">
			<view class="d-flex">
				<image :src="item.headimgurl" style="width: 80rpx;height: 80rpx;"></image>
				<view class="d-flex flex-column ml-3 font-24 text-black">
					<view>{{item.realname}}</view>
					<view>员工：{{item.phone}}</view>
				</view>
			</view>
			<view class="">
				设置权限
			</view>
		</view>
		
		<!-- <view class="bg-yellow d-flex a-center j-center position-fixed" 
		style="top: 1108rpx;height: 98rpx;width: 750rpx;">
			<button class="cu-btn block lg bg-yellow text-black">
				<text class="cuIcon-add"></text> 添加店工
			</button>
		</view> -->	
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				staff: []
			}
		},
		onLoad() {
			this.__init()
		},
		methods: {
			async __init() {
				this.$H.post("/agent/", {
					user_id: uni.getStorageSync('uid'),
					token: uni.getStorageSync('utoken'),
					opt: "user_list"
				}).then((res) => {
					console.log(res);
					this.staff = res
					
				}).catch(() => {
					console.log("catch error!!");
				})
			}
		}
	}
</script>

<style>

</style>
