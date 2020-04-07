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
		<view v-show="merchantList[0]">
			<text class="ml-3 font-24 text-gray">共有{{merchantList.length}}户商家</text>
			<view  class="mt-2 mx-25 d-flex a-center border shadow-nom bg-white mb-2" style="height: 180rpx;"
				v-for="(item, index) in merchantList" :key="index" @click="toshopEarn(item)">
				<image class="ml-3" :src="item.logo_url ? 'item.logo_url' : '../../static/icon/weibiaoti-3.png'" style="width: 120rpx;height: 120rpx;"></image>
				<view class="d-flex flex-column ml-3 font-24 text-black">
					<text>{{item.merchant_name}}</text>
					<text>电话：{{item.merchant_tel==null ? '空' : item.merchant_tel}}</text>
					<text>地址：{{item.merchant_address==null ? '空' : item.merchant_address}}</text>
				</view>
			</view>
			<!-- 上拉加载 -->
			<view class="d-flex a-center j-center text-light-muted font-md py-3">
				{{loadtext}}
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
				merchant: {},
				emit: 10,
				loadtext: "上拉加载更多",
			}
		},
		onReachBottom() {
			if(this.emit > this.merchantList.length) {
				return
			}
			this.loadtext = "加载中..."
			this.emit += 10
			this.__init()
		},
		onLoad() {
			if(this.merchantList < 1) {
				uni.showLoading({
					title: '加载中...',
					mask: false
				});
			}
			console.log(this.merchantList);
			this.__init()
		},
		methods: {
			toshopEarn(item) {
				console.log('item', item);
				uni.setStorageSync('shops-mer', item);
				uni.navigateTo({
					url: "/pages/shops-earn/shops-earn",
				})
			},
			async __init() {
				this.$H.post("/agent/", {
					user_id: uni.getStorageSync('uid'),
					token: uni.getStorageSync('utoken'),
					opt: "merchant_list",
					slimit: 0,  //列表 起始值
					elimit: this.emit,  //列表  数量
					key_value: (this.searchID || this.searchname)
				}).then((data) => {
					this.merchantList = data.arr;
					uni.hideLoading()
					if(this.merchantList.length < 1) {
						uni.showToast({
							title: "暂无数据",
							icon: "none",
							duration: 2500
						})
					}
					// 恢复加载状态
					this.loadtext = this.merchantList.length < this.emit ? "没有更多了" :  "上拉加载更多"
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
