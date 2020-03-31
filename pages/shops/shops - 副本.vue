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
			<!-- 加载数据前的动画 -->
		<view class="h-vh100 w-100vw bg-white" v-show="!merchantList[0]">
			<image src="https://image.weilanwl.com/gif/loading-white.gif" mode="aspectFit" class=" " style="height:240upx"></image>
		</view>
			<!-- 拿到数据展示 -->
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
		onLoad() {
			console.log(this.merchantList);
			if(!this.merchantList[0]) {
				this.__init()
			}
			this.merchantList = uni.getStorageSync('merchantList_key');
			
		},
		onReachBottom() {
			if(this.emit > this.merchantList.length) {
				console.log('不会再上拉了哦');
				return
			}
			this.loadtext = "加载中..."
			this.emit += 10 
			this.__init()
		},
		methods: {
			toshopEarn(item) {
				console.log('item', item);
				uni.setStorageSync('merchant', item);
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
					console.log('接口调用了一次',data.arr);
					uni.setStorageSync('merchantList_key', data.arr);
					this.merchantList = uni.getStorageSync('merchantList_key');
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
