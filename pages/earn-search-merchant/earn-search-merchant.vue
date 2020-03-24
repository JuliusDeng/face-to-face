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
		<view class="mx-2 mt-2 bg-cyan d-flex a-center j-center" hover-class="bg-red" @click="all" style="height: 80rpx;">
			选择全部
		</view>
		<view  class="mt-2 mx-25 d-flex a-center border shadow-nom bg-white mb-2" style="height: 180rpx;"
			v-for="(item, index) in merchantList" :key="index" @click="select(item)">
			<image class="ml-3 bg-blue" :src="item.logo_url" style="width: 120rpx;height: 120rpx;"></image>
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
		onLoad() {
			this.__init()
		},
		onReachBottom() {
			this.loadtext = "加载中..."
			this.emit += 10 
			console.log("触发上拉加载", this.emit);
			this.__init()
		},
		methods: {
			all() {
				try {
				    uni.setStorageSync('dev_all_mer', '');
					uni.setStorageSync('dev_allname_mer', '全部');
				} catch (e) {
				    // error
					console.log('catch error!!', e);
				}
				uni.navigateBack();
			},
			select(item) {
				try {
				    uni.setStorageSync('dev_class_mer', item);
					// uni.setStorageSync('dev_name_mer', '单个');
				} catch (e) {
				    // error
					console.log('catch error!!', e);
				}
				uni.navigateBack();
			},
			toshopEarn(item) {
				console.log('item', item);
				uni.setStorageSync('merchant_item', item);
				uni.navigateTo({
					// url: `/pages/shops-earn/shops-earn?id=${item.merchant_id}`,
					url: `/pages/shops-earn/shops-earn`,
				})
			},
			async __init() {
				this.$H.post("/agent/", {
					user_id: "100003",
					token: "dXQyMDIwMDMyMzExMjM0OTMzNzM3ODAz",
					opt: "merchant_list",
					slimit: 0,  //列表 起始值
					elimit: this.emit,  //列表  数量
					key_value: (this.searchID || this.searchname)
				}).then((data) => {
					console.log('接口调用了一次',data);
					this.merchantList = data.arr
					// 恢复加载状态
					this.loadtext = this.merchantList.length < this.emit ? "没有更多了" :  "上拉加载更多"
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
