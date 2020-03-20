<template>
	<view>
		<!-- 搜索框 -->
		<view class="cu-bar bg-white search">
			<view class="search-form radius">
				<text class="cuIcon-search"></text>
				<!-- <input @focus="" @blur="" :adjust-position="false" -->
				<input :adjust-position="false" type="text" placeholder="按商户名称或ID搜索" 
				confirm-type="search" v-model="searchID" v-if="searchID"></input>
				<input :adjust-position="false" type="text" placeholder="按商户名称或ID搜索"
				confirm-type="search" v-model="searchname">
			</view>
			<view class="action" @click="searchbtn">
				<button class="cu-btn bg-yellow shadow-blur rounded-12" >搜索</button>
			</view>
		</view>
		<!-- 列表 -->
		<text class="ml-3 font-24 text-gray">共有{{merchantList.length}}户商家</text>
		<view  class="mt-2 mx-25 d-flex a-center border shadow-nom bg-white mb-2" style="height: 180rpx;"
			v-for="(item, index) in merchantList" :key="index" @click="toshopEarn(item)">
			<image class="ml-3 bg-blue" :src="item.logo_url" style="width: 120rpx;height: 120rpx;"></image>
			<view class="d-flex flex-column ml-3 font-24 text-black">
				<text>{{item.merchant_name}}</text>
				<text>电话：{{item.merchant_tel==null ? '' : item.merchant_tel}}</text>
				<text>地址：{{item.merchant_address==null ? '' : item.merchant_address}}</text>
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
				searchname: "",
				merchant: {}
			}
		},
		onLoad() {
			this.__init()
		},
		methods: {
			
			toshopEarn(item) {
				console.log('item', item);
				uni.setStorageSync('merchant', item);
				uni.navigateTo({
					url: `/pages/shops-earn/shops-earn?id=${item.merchant_id}`,
				})
			},
			async __init() {
				this.$H.post("/agent/", {
					user_id: "100003",
					token: "dXQyMDIwMDMyMDE1MzkyODg5NDUxODA1",
					opt: "merchant_list",
					key_value: (this.searchID || this.searchname)
				}).then((data) => {
					console.log('接口调用了一次');
					this.merchantList = data.arr
					uni.setStorageSync('list', data)
				}).catch(() => {
					console.log("catch error!!");
				})
			},
			searchbtn() {
				this.__init()
			}
		}
	}
</script>

<style>

</style>
