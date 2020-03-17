<template>
	<view class="h-vh100">
		<uni-search-bar radius="12" placeholder="请输入设备信息" bgColor="#DCDCDC" @confirm="search" />		
		<text class="font-24 text-gray ml-2">共有{{merchant.length}}台设备</text>
		<!-- POS机 -->
		<view class="mx-2 mt-2">
			<view class="d-flex j-sb bg-white rounded-12 text-black mb-2 shadow-nom" 
			style="height: 215rpx;" v-for="(item, index) in merchant" :key="item" @click="this.$navigate('device')">
				<view class="ml-3 span-6 d-flex flex-column">
					<image class="mt-4 border bg-blue" src="../../static/logo.png"
					style="width: 92rpx;height: 94rpx;"></image>
					<view class="mt-2 font-18">食堂POS机</view>
				</view>
				<view class="mr-3 span-18 d-flex flex-column j-center a-end font-24">
					<text>设备号：{{item.device_sn}}</text>
					<text>关联商户：{{item.merchant_name}}</text>
					<text>设备地址：护理食堂3窗口</text>
				</view>
			</view>
			
		</view>
		
		
		
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	
	export default {
		components: {
			uniSearchBar,
		},
		data() {
			return {
				merchant: []
			}
		},
		onLoad() {
			this.__init()
		},
		methods: {
			async __init() {
				this.$H.post("/agent/", {
					user_id: "183823",
					token: "dXQyMDIwMDMxNzIzMDU0MDU0NzMxMjgx",
					opt: "device_list",
					slimit: "0",
					elimit: "10"
				}).then((data) => {
					console.log(data);
					this.merchant = data.arr
				}).catch(() => {
					console.log("catch error");
				})
			}
		}
		
		
	}
</script>

<style>

</style>
