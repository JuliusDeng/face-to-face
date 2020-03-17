<template>
	<view>
		<!-- 搜索框 -->
		<view class="cu-bar bg-white search">
			<view class="search-form radius">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" 
				type="text" placeholder="按商户ID搜索" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-yellow shadow-blur rounded-12">搜索</button>
			</view>
		</view>
		<!-- 列表 -->
		<text class="ml-3 font-24 text-gray">共有{{merchantList.length}}户商家</text>
			
		<view class="mt-2 mx-25 d-flex a-center border shadow-nom bg-white mb-2" style="height: 180rpx;"
		v-for="(item, index) in merchantList" :key="index" @click="shopEarn(item)">
			<image class="ml-3" :src="item.logo_url" style="width: 120rpx;height: 120rpx;"></image>
			<view class="d-flex flex-column ml-3 font-24 text-black">
				<text>{{item.merchant_name}}</text>
				<text>电话：{{item.merchant_tel}}</text>
				<text>地址：{{item.merchant_address}}</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				merchantList: [],
				
			}
		},
		onLoad() {
			this.__init()
		},
		methods: {
			shopEarn(item) {
				console.log('ddd');
				uni.navigateTo({
					url: `/pages/shops-earn/shops-earn?id=${item.merchant_id}`,
				})
				console.log('ddd');
			},
			async __init() {
				this.$H.post("/agent/", {
					user_id: "183823",
					token: "dXQyMDIwMDMxNzE2Mzg1OTYyNjA1NDM2",
					opt: "merchant_list",
				}).then((data) => {
					console.log(data);
					this.merchantList = data.arr
				}).catch(() => {
					console.log("catch error!!");
				})
			}
		}
	}
</script>

<style>

</style>
