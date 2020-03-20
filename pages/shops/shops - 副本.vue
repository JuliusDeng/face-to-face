<template>
	<view>
		<!-- 搜索框 -->
		<view class="cu-bar bg-white search">
			<view class="search-form radius">
				<text class="cuIcon-search"></text>
				<!-- <input @focus="" @blur="" :adjust-position="false" -->
				<input :adjust-position="false" type="text" placeholder="按商户名称搜索" 
				confirm-type="search" v-model="searchID"></input>
			</view>
			<view class="action" @click="search">
				<button class="cu-btn bg-yellow shadow-blur rounded-12">搜索</button>
			</view>
		</view>
		<!-- 列表 -->
		<text class="ml-3 font-24 text-gray">共有{{merchantList.length}}户商家</text>
		<view v-if="!merchant" class="mt-2 mx-25 d-flex a-center border shadow-nom bg-white mb-2" style="height: 180rpx;"
		v-for="(item, index) in merchantList" :key="index" @click="shopEarn(item)">
			<image class="ml-3 bg-blue" :src="item.logo_url" style="width: 120rpx;height: 120rpx;"></image>
			<view class="d-flex flex-column ml-3 font-24 text-black">
				<text>{{item.merchant_name}}</text>
				<text>电话：{{item.merchant_tel}}</text>
				<text>地址：{{item.merchant_address}}</text>
			</view>
		</view>
		
		<view class="mt-2 mx-25 d-flex a-center border shadow-nom bg-white mb-2" style="height: 180rpx;"
		 @click="shopEarn(merchant)">
			<image class="ml-3 bg-blue" :src="merchant.logo_url" style="width: 120rpx;height: 120rpx;"></image>
			<view class="d-flex flex-column ml-3 font-24 text-black">
				<text>{{merchant.merchant_name}}</text>
				<text>电话：{{merchant.merchant_tel}}</text>
				<text>地址：{{merchant.merchant_address}}</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				merchantList: [],
				searchID: "",
				merchant: {}
			}
		},
		onLoad() {
			this.__init()
		},
		methods: {
			InputFocus(event) {
				console.log(event);
			},
			shopEarn(item) {
				console.log('shopEarn');
				uni.navigateTo({
					url: `/pages/shops-earn/shops-earn?id=${item.merchant_id}`,
				})
				console.log('ddd');
			},
			async __init() {
				this.$H.post("/agent/", {
					user_id: "100003",
					token: "dXQyMDIwMDMxODA5MjUzMjY1NjA5MzI3",
					opt: "merchant_list",
					key_value: this.searchID
				}).then((data) => {
					console.log(data);
					uni.setStorageSync('list', data)
					this.merchantList = data.arr
				}).catch(() => {
					console.log("catch error!!");
				})
			},
			search() {
				this.$H.post("/agent/", {
					user_id: "100003",
					token: "dXQyMDIwMDMxODA5MjUzMjY1NjA5MzI3",
					opt: "merchant_list",
					key_value: this.searchID
				}).then((data) => {
					console.log("72",data);
					uni.setStorageSync('list', data)
					this.merchantList = data.arr
					
					for(let i=0; i<this.merchantList.length; i++) {
						console.log("79",this.merchantList);
						if(this.searchID == this.merchantList[i].merchant_id) {
							this.merchant = this.merchantList[i]
							console.log('82',this.merchant);
							break
						} else{
							console.log("fls");
						}
					}
					
					
				}).catch(() => {
					console.log("catch error!!");
				})
				
			}
		}
	}
</script>

<style>

</style>
