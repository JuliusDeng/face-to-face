<template>
	<view class="h-vh100">
		<!-- 搜索框 -->
		<view class="cu-bar bg-white search">
			<view class="search-form radius">
				<text class="cuIcon-search"></text>
				<input :adjust-position="false" type="text" placeholder="按设备ID搜索" 
				confirm-type="search" v-model="dev_id"></input>
			</view>
			<view class="action" @click="searchbtn">
				<button class="cu-btn bg-yellow shadow-blur rounded-12" >搜索</button>
			</view>
		</view>
		<!-- POS机列表 -->
		<text class="font-24 text-gray ml-2">共有{{list.length}}台设备</text>
		<view class="mx-2 mt-2">
			<view class="d-flex  bg-white rounded-12 text-black mb-2 shadow-nom" 
			style="height: 120rpx;" v-for="(item, index) in list" :key="item" @click="select(item)">
				<view class="mr-3 span-18 d-flex flex-column a-center j-center font-24">
					<view>设备号：{{item.device_sn}}</view>
					<view>关联商户：{{item.merchant_name}}</view>
				</view>
			</view>
			
		</view>
		<!-- 上拉加载 -->
		<view class="d-flex a-center j-center text-light-muted font-md py-3">
			没有更多了
		</view>
		
		
	</view>
</template>

<script>
	
	export default {
		components: {
		},
		data() {
			return {
				list: [],
				// loadtext: "上拉加载更多",
				emit: '',
				dev_id: ""
			}
		},
		onLoad() {
			if(this.list.length < 1) {
				uni.showLoading({
					title: '加载中...',
					mask: true
				});
			}
			this.__init()
		},
		/* onReachBottom() {
			if(this.emit > this.list.length) {
				console.log('不会再上拉了哦');
				return
			}
			this.loadtext = "加载中..."
			this.emit += 10 
			console.log("触发上拉加载", this.emit);
			this.__init()
		}, */
		methods: {
			select(item) {
				try {
				    // uni.setStorageSync('todevice', item); // 可以通过下面跳转页面传值
					uni.navigateTo({
						url: `/pages/device/device?dev_id=${item.device_id}&mer_name=${item.merchant_name}`
					})
				} catch (e) {
				    // error
					console.log('catch error!!', e);
				}
			},
			searchbtn() {
				this.__init()
			},
			async __init(callback = false) {
				this.$H.post("/agent/", {
					user_id: uni.getStorageSync('uid'),
					token: uni.getStorageSync('utoken'),
					opt: "device_list",
					slimit: 0,
					elimit: '',
					device_id: this.dev_id
				}).then((data) => {
					this.list = data.arr
					uni.hideLoading()
					if(this.list.length < 1) {
						uni.showToast({
							title: "暂无数据",
							icon: "none",
							duration: 2500
						})
					}
					// console.log('fas:', this.list.length);
					// console.log('this.emit.length:', this.emit);
					// 恢复加载状态
					// this.loadtext = this.list.length < this.emit ? "没有更多了" :  "上拉加载更多"
				}).catch(() => {
					console.log("catch error");
				})
			}
		}
		
		
	}
</script>

<style>
</style>